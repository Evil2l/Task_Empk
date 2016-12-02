import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidebar-app',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    @Output() itemsShow = new EventEmitter<boolean>();

    check: false;

    constructor() { }

    ngOnInit() { }

    showItems(){
        this.itemsShow.emit()
    }
}