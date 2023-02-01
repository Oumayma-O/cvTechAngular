import { Injectable } from '@angular/core';
import {from, mergeMap, Observable, Observer} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Todo} from "../../services/todo.service";
const PRODUCT_API = 'https://dummyjson.com/products/';
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  urls = [
    'https://dummyjson.com/todos',
    'https://jsonplaceholder.typicode.com/todos'
  ];
  constructor(private http: HttpClient) { }
  mergeMapExample(): Observable<any> {
    return from(this.urls).pipe(
      mergeMap(
        (url) => this.http.get(url)
      )
    );
  }
  getProducts(search = ''): Observable<Product[]> {
    if (search) {
      const params = new HttpParams().set('q', search);
      return this.http.get<Product[]>(PRODUCT_API + 'search', {params})
    }
    return this.http.get<Product[]>(PRODUCT_API);
  }
  timerObs(timer: number, name: string, iteration = 4) {
    return new Observable((observer: Observer<string>) => {
      let i = 0;
      let x = setInterval(() => {
        if (i >= iteration) {
          observer.complete();
          clearInterval(x);
        }
        observer.next(`observable ${name}  ${++i}`);
      }, timer);
    });
  }
  // obs1$: Observable<string> = this.timerObs(1000, 'obs1' );
  // obs2$: Observable<string> = this.timerObs(1500, 'obs2' );
}
