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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepth();
  }
  getDepth() {
    this.http.get<Depth>('http://localhost:8080').subscribe(i => {
      this.depth = i.depth;
    });
  }
}
