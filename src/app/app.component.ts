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

  ngOnInit() {
    this.carPosition = Math.floor(Math.random() * this.NUM_DOORS);
    for (let i = 0; i < this.NUM_DOORS; i++) {
      this.prizes[i] = i == this.carPosition? this.CAR : this.GOAT;
    }
    console.log(this.prizes);
  }

  constructor() {}
  
  onClickDoor = (e:any):void => {
    let id = e.target.dataset.id;
    this.choice = parseInt(id);
  }

  cancelChoice = ():void => {
    this.choice = null;
  }

  showGoat = ():void => {
    let goatIndex:number[] = [];
    this.prizes.forEach((prize, index) => {
      if (prize == this.GOAT && index != this.choice) {
        goatIndex.push(index);
      }
    });

    this.doorToShow = goatIndex[Math.floor(Math.random() * goatIndex.length)];
    console.log("door to show: " + this.doorToShow);
  }
}
