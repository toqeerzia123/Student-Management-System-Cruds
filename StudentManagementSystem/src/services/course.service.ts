import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = environment.apiurl + 'Courses/';
constructor(private http: HttpClient) { }
GetAll(){
  return this.http.get(this.baseUrl+"GetAll")
}
Add(form:any){
  return this.http.post<any>(this.baseUrl+'Add',form)
}
Update(form:any){  
  return this.http.post<any>(this.baseUrl+'Update',form)
}
Remove(form:any){
  return this.http.post<any>(this.baseUrl+'Remove',form)
}
}
