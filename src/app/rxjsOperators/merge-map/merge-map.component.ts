import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {RxjsService} from "../service/rxjs.service";

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent {
  // todos$: Observable<any>;

  constructor(private rxjsService: RxjsService) {
    this.rxjsService.mergeMapExample().subscribe(
      data => console.log(data)
    );
  }
}
