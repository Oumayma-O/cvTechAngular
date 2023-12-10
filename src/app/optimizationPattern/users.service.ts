import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import {BehaviorSubject, map} from "rxjs";
export interface User {
  name: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersBS: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.usersBS.asObservable();
  evenUsers$ = this.users$.pipe(
    map((users) => users.filter((user) => user.age % 2 == 0))
  );
  oddUsers$ = this.users$.pipe(
    map((users) => users.filter((user) => user.age % 2 != 0))
  );
  constructor() {
    let fakeUsers: User[] = [];
    for (let i = 0; i < 50; i++) {
      fakeUsers.push({
        name: faker.name.firstName(),
        age: faker.datatype.number({ min: 18, max: 30 }),
      });
    }
    this.usersBS.next(fakeUsers);
  }

  addUser(list: User[], name: string) {
    list.unshift({
      name,
      age: faker.datatype.number({min: 18, max: 30})
    });
  }
}
