import { Component } from '@angular/core';
import {TestService} from "../test/services/test.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(public testService: TestService) {
    // this.testService.test();
  }
}
