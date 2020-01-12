import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {
  battery1 = 100;
  battery2 = 100;
  battery3 = 100;
  battery4 = 100;
  constructor() { }

  ngOnInit() {
    this.getBattery();
  }
  getBattery() {
    // this.http.post<Depth>(this.url, {request: [{data: 'State_Depth'}]}).subscribe(i => {
    //   this.depth = i.data[0].State_Depth.depth;
    //   console.log(new Date());
    // });
    // setTimeout(() => this.getDepth(), 1000);
  }
}
