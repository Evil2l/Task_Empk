import { Injectable } from '@angular/core';
import {Item} from "./models/item.model";
import {Comment} from "./models/comment.model";

@Injectable()
export class ItemService {
    dummyItems: Item[]  = [
        {
            title: "First Item",
            date: "13.13.12",
            number: "1",
            comments: [
                {
                    text: "Check this first",
                    date: "12.10.12",
                    taskId: "0"
                },
                {
                    text: "Lorem Ipsum - це текст-'риба', що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною 'рибою' аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. 'Риба' не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.",
                    date: "12.10.12",
                    taskId: "0"
                }
            ]

        },
        {
            title: "Second Item",
            date: "13.13.14",
            number: "2",
            comments: [
                {
                    text: "Check this out",
                    date: "12.10.12",
                    taskId: "1"
                }
            ]

        }

    ];

    items: Item[] = JSON.parse(localStorage.getItem("items"));

    constructor() { }

    getDummyItems(){
        return this.dummyItems;
    }

    addItem(item: Item){
        this.items.push(item);
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    getItems(){
        return this.items;
    }


    deleteItem(item: Item){
        this.items.splice(this.items.indexOf(item), 1);
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    addComment(comment: Comment, item: Item){
        item.comments.push(comment);
        localStorage.setItem('items', JSON.stringify(this.items));
    }

}