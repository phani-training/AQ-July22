import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})

//Get the id passed as parameter in the url route
export class ViewEmpComponent implements OnInit {
  
  empId : string | null  = "";//id to store the value passed in the route
  foundEmp : Employee = {} as Employee;//Found Emp from the EmpService....

  constructor(private activatedRoute : ActivatedRoute, private empService : EmployeeService) { }

  //What is a MAP?Key-value pairs. Parameters of the Route will have key-Value pairs.
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap)=>{
      this.empId = param.get("id");//get the Value of the associated key. 
      if(this.empId != null){
        this.empService.getEmployee(this.empId).subscribe((data)=>{
          this.foundEmp = data;
        })
      }
    })
  }
}
