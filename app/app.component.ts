import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  isItems: boolean = false;

  constructor(){

  }
  showItems(){
    this.isItems = !this.isItems;
  }
}
