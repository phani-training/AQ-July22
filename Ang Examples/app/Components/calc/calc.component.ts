import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  fValue: number = 0.0;
  sValue: number = 0.0;
  rValue: number = 0.0;
  operand: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onCalc() {
    switch (this.operand) {
      case "+":
        this.rValue = this.fValue + this.sValue;
        break;
      case "-":
        this.rValue = this.fValue - this.sValue;
        break;
      case "X":
        this.rValue = this.fValue * this.sValue;
        break;
      case "/":
        this.rValue = this.fValue / this.sValue;
        break;
      default:
        break;
    }
  }
}
