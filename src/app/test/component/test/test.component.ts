import { Component } from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(public testService: TestService) {
    // this.testService.test();
  }
}
