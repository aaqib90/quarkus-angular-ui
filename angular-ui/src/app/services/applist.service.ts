import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class AllappService {
    constructor(private http: HttpClient,) { }
    
    issueCategoryList(issueName){
        let url = 'https://quarkus-angularui.herokuapp.com/filter-issue?issueCategory='+issueName;
        
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
  }