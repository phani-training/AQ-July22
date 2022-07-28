import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/employee';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(inputValue: Employee[], filterCondition: string): Employee[] {
    if(filterCondition ==undefined) return inputValue;
    else return inputValue.filter((e)=>e.name.toLowerCase().startsWith(filterCondition.toLowerCase()));
  }
/*Pipes are filters that provide a mechanism to format the data that U want to show to the User interface. It is a class with a directive Pipe and implement an interface called PipeTransform.The PipeTransform has a function to implement called transform that take the following args:
first: the data for the pipe to transform
criteria: condition of filter,it could have variable no of args. 
The function returns the filtered data.
Pipes are not just used for filtering, but also to transform the input content to the format that UR UI has to show it.
CLI: ng g p --skip-tests=true Pipes/pipeName
*/ 
}
