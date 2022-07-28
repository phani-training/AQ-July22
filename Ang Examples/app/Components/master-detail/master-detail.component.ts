import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {
  employees : Employee[] = [];
  searchCriteria: string ="";
  selectedEmp : Employee = {} as Employee;
  constructor() { }

  ngOnInit(): void {
    this.employees.push({ id: 123, name:"Vignesh", address:"Chennai", emailAddress:"vignesh@gmail.com", empPic:"./assets/images/pic1.png" , salary:65000} as Employee);
    this.employees.push({ id: 124, name:"Sanjay Sahu", address:"Hyderabad", emailAddress:"s.sahu@gmail.com", empPic:"./assets/images/pic2.png" , salary:55000} as Employee);
    this.employees.push({ id: 125, name:"Shubam Singh", address:"Varanasi", emailAddress:"ss_99h@gmail.com", empPic:"./assets/images/pic3.png" , salary:65000} as Employee);
    this.employees.push({ id: 126, name:"Sumana", address:"Bangalore", emailAddress:"sumana_g@gmail.com", empPic:"./assets/images/pic4.png" , salary:75000} as Employee);
    this.employees.push({ id: 127, name:"Savitri", address:"Pune", emailAddress:"Savitri_ms@gmail.com", empPic:"./assets/images/pic5.png" , salary:34000} as Employee);
    this.employees.push({ id: 128, name:"David", address:"Solna", emailAddress:"David.gs@gmail.com", empPic:"./assets/images/pic6.png" , salary:72000} as Employee);
    this.employees.push({ id: 129, name:"Sereena Williams", address:"New York", emailAddress:"SereenaWilliams@gmail.com", empPic:"./assets/images/pic7.png" , salary:65000} as Employee);
    this.employees.push({ id: 130, name:"Anushka Sharma", address:"Bangalore", emailAddress:"Anushka-sharma@gmail.com", empPic:"./assets/images/pic8.png" , salary:65000} as Employee);
  }
  //Handler for the button Click of every Employee
  onDetail(emp : Employee){
    this.selectedEmp = emp;    
  }

  addNewEmp(emp : Employee){
    debugger;
    this.employees.push(emp);
    this.employees =this.employees.slice();
    alert("Employee added successfully to the database");
  }
}
