import { Component } from '@angular/core';
import {ItemService} from "./item.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  isItems: boolean = false;

  constructor(private itemService: ItemService){
    if(!(localStorage.getItem("items").length)){
      localStorage.setItem('items', JSON.stringify(itemService.getDummyItems()));
    }

  }


  showItems(){
    this.isItems = !this.isItems;
  }
}
