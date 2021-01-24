import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:5000';
   }

   getTodoList(){
     return this.http.get(`${this.ROOT_URL}/todo`)
   }

   add(title: Object){
     return this.http.post(`${this.ROOT_URL}/todo`, {title})
   }

   deleteTodo(id: string){
     return this.http.delete(`${this.ROOT_URL}/todo/${id}`)
  }
}
