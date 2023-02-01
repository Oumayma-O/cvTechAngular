import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TestComponent} from "./component/test/test.component";
import {TestService} from "./services/test.service";




@NgModule({
  declarations: [TestComponent],
  providers: [TestService],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: TestComponent}])
  ]
})
export class TestModule { }
