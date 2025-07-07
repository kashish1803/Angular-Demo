import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServ {
  constructor(private http:HttpClient) { }

  getAllMyEmployee(){
    return this.http.get("http://localhost:9988/getAllEmployee")
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:9988/getAllEmployee/${id}`);
  }

  addEmployee(emp: any): Observable<any> {
    return this.http.post<any>('http://localhost:9988/addEmployee', emp);
  }

  updateEmployee(id: number, emp: any): Observable<any> {
    return this.http.put<any>(`http://localhost:9988/updateEmployee/${id}`, emp);
  }
  
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:9988/deleteEmployee/${id}`);
  }
  
}
