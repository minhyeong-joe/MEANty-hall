import { Component, OnInit } from '@angular/core';
import { DatasetService } from './Dataset/dataset.service';
import { Dataset } from './Dataset/dataset';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // variables for game
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
  didChange: boolean;
  wonCar: boolean;

  // variables for stats
  changed:number = 0;
  didNotChange:number = 0;
  changedAndWon:number = 0;
  didNotChangeAndWon:number = 0;

  ngOnInit() {
    this.datasetService.getDataset().subscribe(res => {
      res.data.forEach(data=> {
        if (data.changed) {
          this.changed++;
          if (data.won) {
            this.changedAndWon++;
          }
        } else {
          this.didNotChange++;
          if (data.won) {
            this.didNotChangeAndWon++;
          }
        }
      });
    });
    this.reset();
  }

  constructor(private datasetService: DatasetService) {}

  reset = ():void => {
    // initialize game
    this.gameEnd = false;
    this.doorToShow = null;
    this.choice = null;
    this.didChange = false;
    this.wonCar = false;
    // random car position
    this.carPosition = Math.floor(Math.random() * this.NUM_DOORS);
    for (let i = 0; i < this.NUM_DOORS; i++) {
      this.prizes[i] = i == this.carPosition? this.CAR : this.GOAT;
    }
  }

  onClickDoor = (e:any):void => {
    let id = e.target.dataset.id;
    this.choice = parseInt(id);
  }

  cancelChoice = ():void => {
    this.choice = null;
  }

  setMontyModal = (message:string, show:string):void => {
    // show = "close" || "open" || "change"
    this.message = message;
    this.showMontyModal = show;
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
    setTimeout(() => {
      this.setMontyModal(`Would you like to change your decision?\nYour Current Choice: Door #${this.choice+1}`, "change");
    }, 1500);
  }

  changeChoice = ():void => {
    this.setMontyModal("", "close");
    this.choice = [0,1,2].filter(index => index != this.choice && index != this.doorToShow)[0];
    this.didChange = true;
    this.openResult();
  }

  openResult = ():void => {
    this.setMontyModal("", "close");
    this.doorToShow = this.choice;
    if (this.choice == this.prizes.findIndex(prize => prize == this.CAR)) {
      this.wonCar = true;
    }
    this.gameEnd = true;
    let data:Dataset = {
      changed: this.didChange,
      won: this.wonCar
    }

    this.datasetService.addDataset(data).subscribe(res => {
      // backend updated
      // re-render frontend
      data = res.newData;
      if (data.changed) {
        this.changed++;
        if (data.won) {
          this.changedAndWon++;
        }
      } else {
        this.didNotChange++;
        if (data.won) {
          this.didNotChangeAndWon++;
        }
      }
    });
  }
}
