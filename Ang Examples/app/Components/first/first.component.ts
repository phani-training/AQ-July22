import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  empRecord : Employee ={} as Employee
  constructor() { }

  ngOnInit(): void {
    this.empRecord = {
      id : 123, name : "Phaniraj", address : "Bangalore", salary : 45000, emailAddress: "phanirajbn@gmail.com", empPic : "./assets/images/pic1.png"
    } as Employee;
  }

}
