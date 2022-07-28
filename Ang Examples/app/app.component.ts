import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular whose title is set thru Property Binding works really well online';
  status : string = "Show Me!!!"
  showMe :boolean = false;

  //Event handler for the CLick event of the button
  onShowMe(){
    this.showMe = !this.showMe;
    if(this.showMe == true){
      this.status = "Hide Me!!!";
    }else{
      this.status = "Show Me!!!";
    }
  }
}
