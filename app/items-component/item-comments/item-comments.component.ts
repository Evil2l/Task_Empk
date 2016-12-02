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

    @Input() selectedItem: Item;

    constructor(private itemService: ItemService) { }

    ngOnInit() { }

    onSubmit(form: NgForm){
        const comment: Comment = new Comment(
            form.value.text,
            new Date(),
            this.selectedItem.id
        );
        this.itemService.addComment(comment, this.selectedItem);
        form.resetForm();
    }

}