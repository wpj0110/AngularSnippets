import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<{}>();
  @Output() gameStop = new EventEmitter<{}>();
  newNumber : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    console.log("onStart");
      this.gameStart.emit({});
  }

  onStop() {
    console.log("onStop");
    this.gameStop.emit({});
  }

}
