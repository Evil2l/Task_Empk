import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Item} from "../../models/item.model";
import {ItemService} from "../../item.service";

@Component({
    moduleId: module.id,
    selector: 'items-list-app',
    templateUrl: 'items-list.component.html'
})
export class ItemsListComponent implements OnInit {

    title: string = "Items";

    items: Item[] = [];

    @Output() itemSelected = new EventEmitter<Item>();

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        this.items = this.itemService.getItems();
    }

    onSubmit(form: NgForm){
        const item = new Item(
            form.value.title,
            new Date(),
            (this.items.length).toString(),
            []
        );
        this.itemService.addItem(item);
        form.resetForm();
    }

    onSelected(item: Item) {
        this.itemSelected.emit(item);
    }

    removeItem(item: Item){
        this.itemService.deleteItem(item);
    }

}