import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<{currentNumber: number}>();
  newNumber : number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    console.log("onStart");
    //while(true) {
    //  setInterval(() => this.newNumber += 1,1000);
      console.log("Current num: " + this.newNumber);
      this.gameStart.emit({currentNumber : this.newNumber});
    //}
    

  }

  onStop() {
    console.log("onStop");
  }

}
