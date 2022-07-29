import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
//Injectable makes the service singleton and can be used inside constructors. 
@Injectable({
  providedIn: 'root'//makes it available at the root level so U dont have to add to the providers of the app.module which we used to do it in earlier versions of Angular(2.0-4.0)
})
export class EmployeeService {
  url : string = "http://localhost:3000/employees";

  constructor(private httpClient: HttpClient) {}

  //We use Observable for providing Async callback return types. Observable is a generic type(Templates) that tells what type of data it will return if the function is successfull.   
  public getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url)
  }

  public getEmployee(id: string) : Observable<Employee>{
    const temp = this.url + "/" + id;
    return this.httpClient.get<Employee>(temp);
  }

  public updateEmployee(emp: Employee) : Observable<Employee>{
    const temp = this.url + "/" + emp.id;
    return this.httpClient.put<Employee>(temp, emp);    
  }
}
