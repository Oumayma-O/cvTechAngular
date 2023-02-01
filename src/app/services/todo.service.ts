import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const TODO_API = 'https://jsonplaceholder.typicode.com/todos/';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TODO_API);
  }
  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(TODO_API + id);
  }
}
