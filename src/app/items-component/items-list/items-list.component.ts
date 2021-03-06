import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Item} from "../../models/item.model";
import {ItemService} from "../../item.service";

@Component({
    // moduleId: module.id,
    selector: 'items-list-app',
    templateUrl: 'items-list.component.html',
    styleUrls: ['items-list.component.css']
})
export class ItemsListComponent implements OnInit {

    title: string = "Items";

    items: Item[];

    @Output() itemSelected = new EventEmitter<Item>();

    constructor(private itemService: ItemService
    ) { }

    ngOnInit() {

        this.items = (localStorage.getItem('items')!==null) ? this.itemService.getItems() : this.itemService.getDummyItems();
        localStorage.setItem('items', JSON.stringify(this.items));

    }

    onSubmit(form: NgForm){
        const item = new Item(
            form.value.title,
            new Date(),
            ((this.items.length)+1).toString(),
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

    listCheck(any: any){
        let selector = '.element-wrap a';
        let elems = document.querySelectorAll(selector);
        for (let i = 0; i < elems.length; i++){
            elems[i].classList.remove('active');
        }
        any.target.classList.add('active');

    }

}