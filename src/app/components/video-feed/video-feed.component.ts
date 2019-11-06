import { Component, OnInit } from '@angular/core';
// import {backendService} from '/backend.service'

@Component({
  selector: 'app-video-feed',
  templateUrl: './video-feed.component.html',
  styleUrls: ['./video-feed.component.css']
})
export class VideoFeedComponent implements OnInit {
  video: object = {};

  constructor() { }

  ngOnInit() {
  }

}
