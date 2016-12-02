import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import {SidebarComponent} from "./sidebar-component/sidebar.component";
import {ItemsComponent} from "./items-component/items.component";
import {ItemsListComponent} from "./items-component/items-list/items-list.component";
import {ItemCommentsComponent} from "./items-component/item-comments/item-comments.component";

import {ItemService} from "./item.service";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  declarations: [
      AppComponent,
      SidebarComponent,
      ItemsComponent,
      ItemsListComponent,
      ItemCommentsComponent
  ],
  providers: [
        ItemService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
