import { Component } from '@angular/core';
import {TestService} from "./test/services/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nb=3;
  title = 'advancedNg';
  constructor(public testService: TestService) {
  }
}
