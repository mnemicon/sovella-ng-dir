import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
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
}