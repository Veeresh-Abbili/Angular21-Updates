import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {

 constructor(private http:HttpClient){}

 base_Url:string = "https://jsonplaceholder.typicode.com/users"

 getData(){
  return this.http.get<[]>(this.base_Url);
 }

}
