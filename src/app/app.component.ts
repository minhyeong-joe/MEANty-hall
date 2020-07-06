import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly NUM_DOORS:number = 3;
  readonly CAR:string = "car";
  readonly GOAT:string = "goat";
  carPosition:number;
  prizes:string[] = new Array(this.NUM_DOORS);
  choice:number;
  doorToShow:number;
  showMontyModal:string = "close";
  message:string;
  gameEnd:boolean;

  ngOnInit() {
    this.reset();
  }

  constructor() {}

  reset = ():void => {
    // initialize game
    this.gameEnd = false;
    this.doorToShow = null;
    this.choice = null;
    // random car position
    this.carPosition = Math.floor(Math.random() * this.NUM_DOORS);
    for (let i = 0; i < this.NUM_DOORS; i++) {
      this.prizes[i] = i == this.carPosition? this.CAR : this.GOAT;
    }
    console.log(this.prizes);
  }
  
  onClickDoor = (e:any):void => {
    let id = e.target.dataset.id;
    this.choice = parseInt(id);
  }

  setMontyModal = (message:string, show:string):void => {
    // show = "close" || "open" || "change"
    this.message = message;
    this.showMontyModal = show;
  }

  cancelChoice = ():void => {
    this.choice = null;
  }

  showGoat = ():void => {
    this.setMontyModal("", "close");
    let goatIndex:number[] = [];
    this.prizes.forEach((prize, index) => {
      if (prize == this.GOAT && index != this.choice) {
        goatIndex.push(index);
      }
    });

    this.doorToShow = goatIndex[Math.floor(Math.random() * goatIndex.length)];
    console.log("door to show: " + this.doorToShow);
    setTimeout(() => {
      this.setMontyModal(`Would you like to change your decision?\nYour Current Choice: Door #${this.choice+1}`, "change");
    }, 1500);
  }

  changeChoice = ():void => {
    this.setMontyModal("", "close");
    this.choice = [0,1,2].filter(index => index != this.choice && index != this.doorToShow)[0];
    this.openResult();
  }

  openResult = ():void => {
    this.setMontyModal("", "close");
    this.doorToShow = this.choice;
    this.gameEnd = true;
  }
}
