import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestService} from "../test/services/test.service";
import { FirstComponent } from './first.component';



@NgModule({
  declarations: [
    FirstComponent
  ],
  providers: [TestService],
  exports: [
    FirstComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FirstModule { }
