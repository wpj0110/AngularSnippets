import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { StoreModule} from "@ngrx/store";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import {MatRadioModule} from "@angular/material/radio";
import {AppRoutingModule} from "./app-routing.module";
//import { NgrxDemoComponent } from './ngrx-demo/ngrx-demo.component';
//import { BookListEditComponent } from './ngrx-demo/book-list-edit/book-list-edit.component';
//import {ngrxDemoReducer} from "./ngrx-demo/store/ngrx-demo.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyConvertComponent,
    AboutComponent,
    GameComponent,
   // NgrxDemoComponent,
   // BookListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatRadioModule,
    AppRoutingModule,
   // StoreModule.forRoot({bookList: ngrxDemoReducer()})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
