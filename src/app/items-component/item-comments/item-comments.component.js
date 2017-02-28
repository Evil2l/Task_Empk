"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_model_1 = require("../../models/item.model");
var comment_model_1 = require("../../models/comment.model");
var item_service_1 = require("../../item.service");
var ItemCommentsComponent = (function () {
    function ItemCommentsComponent(itemService) {
        this.itemService = itemService;
        this.blueAvatar = "#455484";
        this.yellowAvatar = "#FD8A25";
    }
    ItemCommentsComponent.prototype.ngOnInit = function () { };
    ItemCommentsComponent.prototype.colorSet = function (i) {
        if (+(i) % 2) {
            return this.blueAvatar;
        }
        else {
            return this.yellowAvatar;
        }
    };
    ItemCommentsComponent.prototype.onSubmit = function (form) {
        var comment = new comment_model_1.Comment(form.value.text, new Date(), this.selectedItem.number);
        this.itemService.addComment(comment, this.selectedItem);
        form.resetForm();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ItemCommentsComponent.prototype, "importedItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_model_1.Item)
    ], ItemCommentsComponent.prototype, "selectedItem", void 0);
    ItemCommentsComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'item-comments',
            templateUrl: 'item-comments.component.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemCommentsComponent);
    return ItemCommentsComponent;
}());
exports.ItemCommentsComponent = ItemCommentsComponent;
//# sourceMappingURL=item-comments.component.js.map