import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  id: string | null = null;
  foundEmp: Employee = {} as Employee;
  constructor(private activatedRoute: ActivatedRoute, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get("id");
      if (this.id != null) {
        this.empService.getEmployee(this.id).subscribe((data) => {
          this.foundEmp = data;
        });
      }
    })
  }

  onUpdate(){
    this.empService.updateEmployee(this.foundEmp).subscribe((data)=>{
      alert("Employee updated Successfully");      
    })    
  }
}
