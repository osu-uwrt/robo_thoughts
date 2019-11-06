import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depth } from '../../types/depth';

@Component({
  selector: 'app-panels-view',
  templateUrl: './panels-view.component.html',
  styleUrls: ['./panels-view.component.css'],
})
export class PanelsViewComponent implements OnInit {

  depth = 40;
  url: string = '/backendUrl';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getDepth();
  }

  getDepth() {
    this.http.get<Depth>('http://localhost:8080').subscribe(i => {
      this.depth = i.depth;
    });
  }
}
