import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appNum = 0;
  temp: any;

  onStartClick() {
    //this.appNum = appData.currentNumber;
    //this.appNum += 1;
    this.temp = setInterval(() => this.appNum += 1,1000);
  }

  onStopClick() {
    console.log("onStopClick");
    clearInterval(this.temp);
  }
}
