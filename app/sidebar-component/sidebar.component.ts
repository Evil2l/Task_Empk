import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidebar-app',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    isBackground: boolean = false;
    backgroundColor:string = "rgba(255, 58, 81, 1)";

    @Output() itemsShow = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    showItems(){
        this.isBackground = !this.isBackground;
        this.itemsShow.emit()
    }
    getStyle(){
        if(this.isBackground){
            return this.backgroundColor;
        }
        else{
            return "";
        }

    }
}
