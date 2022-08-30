import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  row1 : number[] = [2,2,2]; //0 is O, 1 is X, 2 is blank
  row2 : number[] = [2,2,2];
  row3 : number[] = [2,2,2];
  choice : number = 1;
  currentPlayer : boolean = true; //determines if it's the player's move or not
  gameFinished : boolean = false;
  totalGames : number = 0;
  playerScore : number = 0;
  robotScore : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  boxClick(idx : number, currRow : any[]) {
    if (this.gameFinished === false) {
      if (currRow[idx] === 2){
        console.log(idx);
        currRow[idx] = this.choice;
        console.log(this.choice);
        this.choice = this.choice === 1 ? 0 : 1; //if current choice is 1, turn it to 0, else turn it to 1
        if (this.scorer()) {
          this.playerScore += 1;
          this.gameFinished = true;
          console.log("Player Score: "+ this.playerScore);
        } else {
          //Robot makes a turn
          this.robotMove();
          if (this.scorer()) {
            this.robotScore += 1;
            this.gameFinished = true;
            console.log("Robot Score: "+ this.robotScore);
          }
        }
      }
    }
  }

  resetGame() {
    this.row1 = [2,2,2];
    this.row2 = [2,2,2];
    this.row3 = [2,2,2];
    this.gameFinished = false;
  }

  scorer() {
    if(this.rowMatcher(this.row1)) {
      console.log("row1 match");
      return true;
    } else if (this.rowMatcher(this.row2)) {
      console.log("row2 match");
      return true;
    } else if (this.rowMatcher(this.row3)) {
      console.log("row3 match");
      return true;
    } else if (this.columnMatcher(0)) {
      console.log("column1 match");
      return true;
    } else if (this.columnMatcher(1)) {
      console.log("column2 match");
      return true;
    } else if (this.columnMatcher(2)) {
      console.log("column3 match");
      return true;
    } else if (this.diagonalMatcher()) {
      console.log("diagonal match");
      return true;
    } else {
      return false;
    }
  }

  rowMatcher(currRow : number[]) { //helper function to avoid bloated code

    let zeroCount = 0;
    let oneCount = 0;
    if ((currRow[0] === 2) || (currRow[1] === 2) || (currRow[2] === 2)) {
        return false;
    } else {
      for (let counter = 0; counter < currRow.length; counter ++) {
        if (currRow[counter] === 0) {
          zeroCount += 1;
        } else if (currRow[counter] === 1) {
          oneCount += 1;
        }
      }
      if (zeroCount === 3 || oneCount === 3) {
        return true;
      } else { 
        return false;
      }
    }
  }

  columnMatcher(currIdx : number) { //helper function to avoid bloated code
    if ((this.row1[currIdx] === 2) || (this.row2[currIdx] === 2) || (this.row3[currIdx] === 2)) {
      return false;
    } else {
    return (this.row1[currIdx] && this.row2[currIdx] && this.row3[currIdx])
    }
  }

  diagonalMatcher() { //scores diagonally
    if ((this.row1[0] && this.row2[1] && this.row3[2]) && (this.row1[0] !== 2) && (this.row2[1] !== 2) && (this.row3[2] !== 2)) {
      return true
    } else if ((this.row1[2] && this.row2[1] && this.row3[0]) && (this.row1[2] !== 2) && (this.row2[1] !== 2) && (this.row3[0] !== 2)) {
      return true
    } else {
      return false
    }
  }

  robotMove() {
    let emergencyBreaker = 0;
    while ((true && (this.drawCheck() === false)) && emergencyBreaker < 120) { //Breaks if it finds an empty array
      emergencyBreaker += 1;
      let randNum1 : number = Math.floor(Math.random() * 3)
      let randNum2 : number = Math.floor(Math.random() * 3)

      console.log("randNum1" + randNum1);
      console.log("randNum2" + randNum2);


      if (randNum1 === 0) {
        if (this.row1[randNum2] === 2) {
          this.row1[randNum2] = this.choice;
          this.choice = this.choice === 1 ? 0 : 1;
          break;
        }
      } else if (randNum1 === 1) {
        if (this.row2[randNum2] === 2) {
          this.row2[randNum2] = this.choice;
          this.choice = this.choice === 1 ? 0 : 1;
          break;
        } else {
          if (this.row2[randNum2] === 2) {
            this.row2[randNum2] = this.choice;
            this.choice = this.choice === 1 ? 0 : 1;
            break;
          }
        }
      }
    }
    if (emergencyBreaker === 120) {
      console.log("breaker tripped");
    }
  }

  drawCheck() {
    for (let counter = 0; counter < this.row1.length; counter ++) {
      if (this.row1[counter] === 2) {
        return false;
      }
    }
    for (let counter = 0; counter < this.row2.length; counter ++) {
      if (this.row2[counter] === 2) {
        return false;
      }
    }
    for (let counter = 0; counter < this.row3.length; counter ++) {
      if (this.row3[counter] === 2) {
        return false;
      }
    }
    return true
  }
}
