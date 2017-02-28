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
var item_service_1 = require("../../item.service");
var ItemsListComponent = (function () {
    function ItemsListComponent(itemService) {
        this.itemService = itemService;
        this.title = "Items";
        this.itemSelected = new core_1.EventEmitter();
    }
    ItemsListComponent.prototype.ngOnInit = function () {
        this.items = (localStorage.getItem('items') !== null) ? this.itemService.getItems() : this.itemService.getDummyItems();
        localStorage.setItem('items', JSON.stringify(this.items));
    };
    ItemsListComponent.prototype.onSubmit = function (form) {
        var item = new item_model_1.Item(form.value.title, new Date(), ((this.items.length) + 1).toString(), []);
        this.itemService.addItem(item);
        form.resetForm();
    };
    ItemsListComponent.prototype.onSelected = function (item) {
        this.itemSelected.emit(item);
    };
    ItemsListComponent.prototype.removeItem = function (item) {
        this.itemService.deleteItem(item);
    };
    ItemsListComponent.prototype.listCheck = function (any) {
        var selector = '.element-wrap a';
        var elems = document.querySelectorAll(selector);
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
        }
        any.target.classList.add('active');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemsListComponent.prototype, "itemSelected", void 0);
    ItemsListComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'items-list-app',
            templateUrl: 'items-list.component.html',
            styleUrls: ['items-list.component.css']
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemsListComponent);
    return ItemsListComponent;
}());
exports.ItemsListComponent = ItemsListComponent;
//# sourceMappingURL=items-list.component.js.map