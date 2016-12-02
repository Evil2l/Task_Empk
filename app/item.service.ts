import { Injectable } from '@angular/core';
import {Item} from "./models/item.model";
import {Comment} from "./models/comment.model";

@Injectable()
export class ItemService {
    items: Item[]  = [
        {
            title: "First Iem",
            date: "13.13.12",
            id: "0",
            comments: [
                {
                    text: "Check this first",
                    date: "12.10.12",
                    taskId: "0"
                },
                {
                    text: "Second one",
                    date: "12.10.12",
                    taskId: "0"
                }
            ]

        },
        {
            title: "Second Iem",
            date: "13.13.14",
            id: "1",
            comments: [
                {
                    text: "Check this out",
                    date: "12.10.12",
                    taskId: "1"
                }
            ]

        }

    ];

    constructor() { }

    addItem(item: Item){
        this.items.push(item)
    }

    getItems(){
        return this.items;
    }

    deleteItem(item: Item){
        this.items.splice(this.items.indexOf(item), 1);
    }

    addComment(comment: Comment, item: Item){
        item.comments.push(comment);
    }

}