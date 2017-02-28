import {Component, OnInit} from '@angular/core';
import {ItemService} from "./item.service";
import {Item} from "./models/item.model";

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  isItems: boolean = false;
  items: Item[];

  constructor(private itemService: ItemService){

  }

  ngOnInit(){

  }

  showItems(){
    this.isItems = !this.isItems;
  }
}