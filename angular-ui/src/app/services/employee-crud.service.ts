import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map, catchError, timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(private http: HttpClient,) { }
  
  employeeList(){
    return this.http.get<any>(`${environment.apiUrl}`)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );
  }

  employeeAdd(req){
    return this.http.post<any>(`${environment.apiUrl}`, req)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );
  }

  employeeDelete(id){
    if(confirm("Are you sure?")){
    return this.http.delete(`${environment.apiUrl}/${id}`)
    .pipe(      
       map(data => {          
          return data;
      },
      catchError(error => {
          return error;
      }))
       );}
  }

  employeeUpdate(id, req){
    return this.http.put<any>(`${environment.apiUrl}/${id}`, req)
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
