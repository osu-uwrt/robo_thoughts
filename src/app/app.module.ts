import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsViewComponent } from './components/panels-view/panels-view.component';
import { VideoFeedComponent } from './components/video-feed/video-feed.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ImuComponent } from './imu/imu.component';
import { DvlComponent } from './dvl/dvl.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelsViewComponent,
    VideoFeedComponent,
    ImuComponent,
    DvlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
