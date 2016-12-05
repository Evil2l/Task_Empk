import {Comment} from "./comment.model";

export class Item{
    constructor(
        public title: string,
        public date: any,
        public number?: string,
        public comments?: Comment[]
    ){}
}