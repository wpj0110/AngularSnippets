import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appNum = 0;

  onStartClick(appData: {currentNumber : number}) {
    this.appNum = appData.currentNumber;
  }

  onStopClick() {

  }
}
