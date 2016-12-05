import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Item} from "../models/item.model";

@Component({
    moduleId: module.id,
    selector: 'items-app',
    templateUrl: 'items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    // items: Item[];

    selectedItem: Item;

    constructor(
        private itemService: ItemService

    ) { }

    ngOnInit() {
        // this.items = this.itemService.getItems();
    }



}