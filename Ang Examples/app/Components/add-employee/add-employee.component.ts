import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { empty } from 'rxjs';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() onNewEmployee : EventEmitter<Employee> =new EventEmitter<Employee>();

  //create the data...
  id: number =0;
  name : string ="";
  address : string ="";
  email : string ="";
  salary : number = 0.0;
  img : string ="";
  url : any;
  constructor() { }

  ngOnInit(): void {
  }
  onAddNew(){
    let emp = {} as Employee;
    emp.id = this.id;
    emp.name = this.name;
    emp.salary = this.salary
    emp.address = this.address
    emp.emailAddress = this.email;
    emp.empPic = this.url as string;
    this.onNewEmployee.emit(emp);//emit is a way to push the object into the container component. This is event handling. UR Component has an event called onNewEmployee which is triggered when the user  clicks the addEmployee button.
    this.clearText(); 
  }
  clearText() {
    this.id =0;
    this.name= "";
    this.address = "";
    this.salary =0;
    this.email ="";
    this.img = "";
  }
  onChange(event : any){
    if (event.target.files && event.target.files.length) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_ev) => {
        this.url = reader.result;
      }
    }else{
      alert("No file is selected")
    }
  }
}

