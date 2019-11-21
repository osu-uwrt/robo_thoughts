import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {backendService} from '/backend.service'

@Component({
  selector: 'app-video-feed',
  templateUrl: './video-feed.component.html',
  styleUrls: ['./video-feed.component.css']
})
export class VideoFeedComponent implements OnInit {
  video: any;
  url = 'http://192.168.1.124:5000';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getVideo();
  }
  getVideo() {
    this.http.post(this.url, {request: [{data: 'State_Depth'}]}).subscribe(i => {
      this.video = i;
    });
    setTimeout(() => this.getVideo(), 1000);
  }
}
