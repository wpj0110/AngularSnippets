import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyConvertComponent} from "./currency-convert/currency-convert.component";
import {GameComponent} from "./game/game.component";
import {AboutComponent} from "./about/about.component";
//import {NgrxDemoComponent} from "./ngrx-demo/ngrx-demo.component";

const appRoutes: Routes = [
  {path: 'currency-convert', component: CurrencyConvertComponent},
  //{path: 'ngrx-demo', component: NgrxDemoComponent},
  {path: 'game', component: GameComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/currency-convert', pathMatch: 'full'},
  {path: '**', redirectTo: '/currency-convert', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
