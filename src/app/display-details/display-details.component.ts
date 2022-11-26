import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})

export class DisplayDetailsComponent implements OnInit {
  isShown = false;
  timeStamps = [] as any;
  timeStamp: number = 0;
  current: string = new Date().toUTCString();
  
  constructor() { }
  
  ngOnInit(): void { }

  onClick() {
    this.isShown = !this.isShown;
    this.timeStamp = this.timeStamps.length + 1;
    this.timeStamps.push(this.current + this.timeStamp);
  }
}

/* EKA YRITYS:
  export class DisplayDetailsComponent implements OnInit {
  isShown = false;
  timeStampName = '1';
  timeStampAdded = false;
  timeStamps = ['TS01', 'TS02'];
  
  constructor() { }
  ngOnInit(): void {
  }
  getTimeStamp() {
    return this.timeStampName;
  }
  onShowDetails() {
    this.isShown = !this.isShown;
    this.timeStampAdded = true;
    this.timeStamps.push(this.timeStampName);
  }
}  */