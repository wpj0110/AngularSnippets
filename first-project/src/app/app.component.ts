import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = "recipe"; //default to show is recipe

  onHeaderAppClick(selected: string) {
    console.log(selected);
    this.header = selected; //looking for recipe
  }
}
