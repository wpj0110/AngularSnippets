import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyConvertComponent,
    CurrencyChartComponent,
    AboutComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'currency-convert', component: CurrencyConvertComponent},
      {path: 'currency-chart', component: CurrencyChartComponent},
      {path: 'game', component: GameComponent},
      {path: 'about', component: AboutComponent},
      {path: '', redirectTo: '/currency-convert', pathMatch: 'full'},
      {path: '**', component: CurrencyConvertComponent},
    ]),
    FormsModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
