import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class TestService {
  nb = 0;
  private _clickSubject = new Subject<boolean>();
  click$ = this._clickSubject.asObservable();
  constructor() {
    console.log('i am instanciated');
  }
  click() {
    this._clickSubject.next(true);
  }
  test() {
    this.nb++;
    console.log('i am test service test', this.nb);
  }
}
