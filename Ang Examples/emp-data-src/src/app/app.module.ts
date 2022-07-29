import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'//for REST API calls. 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { EmpMgrComponent } from './Components/emp-mgr/emp-mgr.component';
import { ViewEmpComponent } from './Components/view-emp/view-emp.component';
import { EditEmpComponent } from './Components/edit-emp/edit-emp.component';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { ɵAnimationGroupPlayer } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmpMgrComponent,
    ViewEmpComponent,
    EditEmpComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
