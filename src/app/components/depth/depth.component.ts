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
  url = 'http://192.168.43.214:5000'; // should be changed if backend url is changed

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepth();
  }
  getDepth() {
    this.http.post<Depth>(this.url, {request: [{data: 'State_Depth'}]}).subscribe(i => {
      this.depth = i.data[0].State_Depth.depth;
    });
    setTimeout(() => this.getDepth(), 1000);
  }
}
