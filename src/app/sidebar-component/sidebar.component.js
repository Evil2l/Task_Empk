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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isBackground = false;
        this.backgroundColor = "rgba(255, 58, 81, 1)";
        this.itemsShow = new core_1.EventEmitter();
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.showItems = function () {
        this.isBackground = !this.isBackground;
        this.itemsShow.emit();
    };
    SidebarComponent.prototype.getStyle = function () {
        if (this.isBackground) {
            return this.backgroundColor;
        }
        else {
            return "";
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SidebarComponent.prototype, "itemsShow", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'sidebar-app',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map