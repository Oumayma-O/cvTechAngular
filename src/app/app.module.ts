import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomStructuralDirective } from './directives/custom-structural.directive';
import {FormsModule} from "@angular/forms";
import { AfterDelayDirective } from './directives/after-delay.directive';
import { RepeatDirective } from './directives/repeat.directive';
import {TestService} from "./test/services/test.service";
import {FirstModule} from "./first/first.module";
import { TestUnsbscribeComponent } from './test-unsbscribe/test-unsbscribe.component';
import {HttpClientModule} from "@angular/common/http";
import { MergeMapComponent } from './rxjsOperators/merge-map/merge-map.component';
import { SwitchMapComponent } from './rxjsOperators/switch-map/switch-map.component';
import { FlatternOperatorComponent } from './rxjsOperators/flattern-operator/flattern-operator.component';
import { GpComponent } from './components/gp/gp.component';
import { ParentComponent } from './components/parent/parent.component';
import { FilsComponent } from './components/fils/fils.component';
import { RhComponent } from './optimizationPattern/rh/rh.component';
import { UserListComponent } from './optimizationPattern/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomStructuralDirective,
    AfterDelayDirective,
    RepeatDirective,
    TestUnsbscribeComponent,
    MergeMapComponent,
    SwitchMapComponent,
    FlatternOperatorComponent,
    GpComponent,
    ParentComponent,
    FilsComponent,
    RhComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FirstModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
