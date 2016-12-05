import {Component, OnInit, Input} from '@angular/core';
import {Item} from "../../models/item.model";
import {Comment} from "../../models/comment.model";
import {NgForm} from "@angular/forms";
import {ItemService} from "../../item.service";

@Component({
    moduleId: module.id,
    selector: 'item-comments',
    templateUrl: 'item-comments.component.html'
})
export class ItemCommentsComponent implements OnInit {

    blueAvatar: string = "#455484";
    yellowAvatar: string = "#FD8A25";

    @Input() importedItems: Item [];
    @Input() selectedItem: Item;

    constructor(private itemService: ItemService) { }

    ngOnInit() { }

    colorSet(i:any){
        if(+(i)%2){
            return this.blueAvatar;

        }
        else{
            return this.yellowAvatar;
        }
    }

    onSubmit(form: NgForm){
        const comment: Comment = new Comment(
            form.value.text,
            new Date(),
            this.selectedItem.number
        );
        this.itemService.addComment(comment, this.selectedItem);
        form.resetForm();
    }

}