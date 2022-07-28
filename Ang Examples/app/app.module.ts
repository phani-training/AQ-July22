import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FirstComponent } from './Components/first/first.component';
import { CalcComponent } from './Components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { EmpMgrComponent } from './Components/emp-mgr/emp-mgr.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';
import { ErrorComponent } from './Components/error/error.component';
import { EmpFilterPipe } from './Pipes/emp-filter.pipe';
import { MasterDetailComponent } from './Components/master-detail/master-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    CalcComponent,
    EmpMgrComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    ErrorComponent,
    EmpFilterPipe,
    MasterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
