import { Component } from '@angular/core';
import {RxjsService} from "../service/rxjs.service";
import {concatMap, exhaustMap, from, mergeMap, switchMap} from "rxjs";

@Component({
  selector: 'app-flattern-operator',
  templateUrl: './flattern-operator.component.html',
  styleUrls: ['./flattern-operator.component.css']
})
export class FlatternOperatorComponent {
  params = [
    {name: 'obs1', timer: 1000, iteration: 4 },
    {name: 'obs2', timer: 1500, iteration: 4 },
  ];
  constructor(private rxjsService: RxjsService) {
    from(this.params).pipe(
      exhaustMap((param) => this.rxjsService.timerObs(param.timer, param.name))
    ).subscribe(
      (data) => console.log(data)
    )
  }
}
