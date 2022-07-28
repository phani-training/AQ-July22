import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

//ViewComponent will be a child to the Emp Manager Component. 
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  @Input() selectedEmp : Employee = {} as Employee;
  constructor() { }

  ngOnInit(): void {
  }//@Input() is a Directive used to provide inputs to UR component in the form of Properties/Attributes.
}
