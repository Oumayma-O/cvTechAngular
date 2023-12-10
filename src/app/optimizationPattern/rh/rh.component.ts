import {Component, OnInit} from '@angular/core';
import {User, UsersService} from "../users.service";
import * as ChartJs from 'chart.js/auto';
import {map, Observable} from "rxjs";
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit {
  oddUsers$: Observable<User[]>;
  evenUsers$: Observable<User[]>;
  oddCount$: Observable<number>;
  evenCount$: Observable<number>;
  chart: any;
  constructor(private userService: UsersService) {
    this.oddUsers$ = this.userService.oddUsers$;
    this.evenUsers$ = this.userService.evenUsers$;
    this.oddCount$ = this.oddUsers$.pipe(map((users) => users.length || 0));
    this.evenCount$ = this.evenUsers$.pipe(map((users) => users.length || 0));
  }

  ngOnInit(): void {
  }

}
