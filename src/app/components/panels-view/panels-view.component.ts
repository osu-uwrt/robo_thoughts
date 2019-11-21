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
  url = '/backendUrl';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getDepth();
  }

  getDepth() {
    this.http.post<Depth>('http://192.168.1.124:5000', {request: [{data: 'State_Depth'}]}).subscribe(i => {
      this.depth = i.data[0].State_Depth.depth;
    });
    setTimeout(() => this.getDepth(), 1000);
  }
}
