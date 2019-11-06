import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imu',
  templateUrl: './imu.component.html',
  styleUrls: ['./imu.component.css']
})
export class ImuComponent implements OnInit {

  quaternion  = null; //From Inertial frame to Body frame
  rpyRad = 0; //[rad]
  rpyDeg = 0; //[deg]
  headingAlt = 0; //[deg]
  headingLORD = 0;//[deg]
  linearAccel = 0; //[m/s^2]
  angVelRad = 0; //[rad/s]
  angVelDeg = 0; //[deg/s]
  angAccelRad = 0; //[rad/s]
  angAccelDeg = 0; //[deg/s]

  constructor() { }



  ngOnInit() {
  }

}
