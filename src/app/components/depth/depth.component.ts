import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depth } from '../../types/depth';

@Component({
  selector: 'app-depth',
  templateUrl: './depth.component.html',
  styleUrls: ['./depth.component.css']
})
export class DepthComponent implements OnInit {

  depth = 40;
  url = 'http://192.168.1.140:5000'; // should be changed if backend url is changed
  depthVersion = 1; // 1 = controls_depth and 2 = state_depth

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepth();
  }
  getDepth() {
  //   this.http.post<Depth>(this.url, {request: [{data: 'State_Depth'}]}).subscribe(i => {
  //     // request either state dpeth or controls depth depending on radio button value
  //     if (this.depthVersion === 1) {
  //       this.depth = i.data[0].State_Depth.depth;
  //     } else {
  //       this.depth = i.data[0].Controls_Depth.depth;
  //     }
  //     // console.log(new Date());
  //   });
  //   setTimeout(() => this.getDepth(), 1000);
  }
}
