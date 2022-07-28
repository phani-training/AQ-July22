import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { CalcComponent } from './Components/calc/calc.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { EmpMgrComponent } from './Components/emp-mgr/emp-mgr.component';
import { ErrorComponent } from './Components/error/error.component';
import { FirstComponent } from './Components/first/first.component';
import { MasterDetailComponent } from './Components/master-detail/master-detail.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';

const routes: Routes = [
  {path: "", redirectTo: "first", pathMatch : "full"},
  {path : "first", component: FirstComponent},
  {path : "calc", component: CalcComponent},
  {path : "manager/addEmp", component: AddEmployeeComponent},
  {path : "manager/edit/:id", component: EditEmployeeComponent},
  {path : "manager", component: EmpMgrComponent},
  {path : "manager/view", component: ViewEmployeeComponent},
  {path : "master-detail", component: MasterDetailComponent},
  {path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
