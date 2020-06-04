const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
var cors = require('cors');

const MongoClient = require('mongodb').MongoClient;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;


// Connection URL
const url = 'mongodb+srv://admin:admin@cluster0-ryh0r.mongodb.net/test?retryWrites=true&w=majority';
 
// Database Name
const dbName = 'EMPLOYEE_DB';

let client = null;
 
function getClient (cb) {
      // Use connect method to connect to the server
      MongoClient.connect(url, function(err, client) {
        if(err) {
          console.log(err);
        }
        console.log("Connected successfully to server");
        client = client;

        const db = client.db(dbName);
        const collection = db.collection('dashboard');
      
        //client.close();
        cb(err, client);
      });
}

function closeClient() {
  client.close();
  console.log("Connection closed");
}


// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();


  app.use(cors())


  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../angular-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });



  app.get('/allapp-dashboard', function(req, res) {
    getClient((err, client) => {
      if(err) {
        console.log(err)
        res.send(err);
      } else {
        const db = client.db(dbName);
        const collection = db.collection('dashboard');

        collection.find({}).toArray((err, data) => {
          if(err) {
            res.send(err);
          }
          let parentApp = data.map((o) => o["Parent Application"]);
          let issueCategory = data.map(o => o["Issue Category"]);
          
          parentApp = [... new Set(parentApp)];

          issueCategory = [... new Set(issueCategory)];

          //console.log("parentApp ", parentApp);
          let result = [];

          for(let i=0;i<parentApp.length;i++) {
            var t = {
              parentAppName : parentApp[i],
            }
            for(let j=0; j< issueCategory.length;j++){
              t[issueCategory[j]] = 0
            }
            result.push(t)
          }
          // for(let i=0; i< issueCategory.length;i++){
          //   result
          // }
          //console.log(result);

          // data.forEach((obj) => {
          //   for(let i=0; i<parentApp.length;i++) {
          //     if(obj["Parent Application"] = parentApp[i]) {
          //       let resultObj = {
          //         parentApp: obj["Parent Application"]
          //       }
          //       result[obj["Parent Application"]]
          //       //result.push(resultObj)
          //     }
          //   }
           
          // })
          res.send(result);
          //closeClient();
        })
      }
    })
  });

  app.get('/filter-issue', function(req, res) {
    const {issueCategory}  = req.query;
    getClient((err, client) => {
      if(err) {
        console.log(err)
        res.send(err);
      } else {
        const db = client.db(dbName);
        const collection = db.collection('dashboard');
        collection.aggregate(
          [
            {
              '$match': {
                'Issue Category': issueCategory
              }
            }, {
              '$group': {
                '_id': 'null', 
                'count': {
                  '$sum': 1
                }, 
                'title': {
                  '$addToSet': '$Title'
                }
              }
            }
          ]
        ).toArray((err, data) => {
          if(err) {
            res.send(err);
          }
          res.send(data);
          //closeClient();
        })
      }
    })
  });

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
      response.sendFile(path.resolve(__dirname, '../angular-ui/build', 'index.html'));
    });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}