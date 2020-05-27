import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map, catchError, timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(private http: HttpClient,) { }
  
  employeeList(dbName){
    let url = null;
    if(dbName == 'mongodb') {
      url = `${environment.mongodbUrl}`;
    } else {
      url = `${environment.mysqlUrl}`;
    }
    return this.http.get<any>(url)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );
  }

  employeeAdd(dbName, req){
    let url = null;
    if(dbName == 'mongodb') {
      url = `${environment.mongodbUrl}`;
    } else {
      url = `${environment.mysqlUrl}`;
    }
    return this.http.post<any>(url, req)
    //return this.http.post<any>(`${environment.mysqlUrl}`, req)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );
  }

  employeeDelete(dbName, id){
    let url = null;
    if(dbName == 'mongodb') {
      url = `${environment.mongodbUrl}`;
    } else {
      url = `${environment.mysqlUrl}`;
    }

    if(confirm("Are you sure?")){
    return this.http.delete(url+`/${id}`)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );}
  }

  employeeUpdate(dbName, id, req){
    let url = null;
    if(dbName == 'mongodb') {
      url = `${environment.mongodbUrl}`;
    } else {
      url = `${environment.mysqlUrl}`;
    }
    return this.http.put<any>(url+`/${id}`, req)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );
  }
}
