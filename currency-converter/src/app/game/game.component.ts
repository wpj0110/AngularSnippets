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
  gameFinished : boolean = false;
  playerScore : number = 0;
  robotScore : number = 0;
  draw : number = 0;
  isRobotWorking : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  boxClick(idx : number, currRow : any[]) {
    if (this.gameFinished === false) {
      if (currRow[idx] === 2){
        console.log(idx);
        currRow[idx] = this.choice;
        this.choice = this.choiceFlip();
        if (this.scorer()) {
          console.log("playerScore");
          this.playerScore += 1;
          this.gameFinished = true;
          this.choice = this.choiceFlip();
        } else {
          if (this.isRobotWorking) {
            this.robotMove();
            if (this.scorer()) {
              console.log("robotScore");
              this.robotScore += 1;
              this.gameFinished = true;
            }
          }
        }
      }
    }
  }

  choiceFlip() {
     return this.choice === 1 ? 0 : 1;
  }

  resetGame() {
    this.row1 = [2,2,2];
    this.row2 = [2,2,2];
    this.row3 = [2,2,2];
    this.gameFinished = false;
    this.choice = 1;
  }

  resetScore() {
    this.playerScore = 0;
    this.robotScore = 0;
    this.draw = 0;
    this.choice = 1;
  }

  scorer() {
    console.log("Current Scores: " + this.playerScore + " " +this.robotScore + " " + this.draw);
    if(this.rowMatcher(this.row1)) {
      return true;
    } else if (this.rowMatcher(this.row2)) {
      return true;
    } else if (this.rowMatcher(this.row3)) {
      return true;
    } else if (this.columnMatcher(0)) {
      return true;
    } else if (this.columnMatcher(1)) {
      return true;
    } else if (this.columnMatcher(2)) {
      return true;
    } else if (this.diagonalMatcher()) {
      return true;
    } else {
        if (!(this.row1.includes(2) || this.row2.includes(2) || this.row3.includes(2)) && !this.gameFinished) {
          this.draw += 1;
          this.gameFinished = true;
        }
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
    } else if ((this.row1[currIdx] === 0) && (this.row2[currIdx] === 0) && (this.row3[currIdx] === 0)){
      return true;
    } else {
      return (this.row1[currIdx] && this.row2[currIdx] && this.row3[currIdx]);
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

      if (randNum1 === 0) {
        if (this.row1[randNum2] === 2) {
          this.row1[randNum2] = this.choice;
          this.choice = this.choiceFlip();
          break;
        }
      } else if (randNum1 === 1) {
        if (this.row2[randNum2] === 2) {
          this.row2[randNum2] = this.choice;
          this.choice = this.choiceFlip();
          break;
        } else {
          if (this.row3[randNum2] === 2) {
            this.row3[randNum2] = this.choice;
            this.choice = this.choiceFlip();
            break;
          }
        }
      }
    }
    if (emergencyBreaker === 120) { /////////////////////////////////////TEMP
      console.log("Error: Tripped breaker");
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
