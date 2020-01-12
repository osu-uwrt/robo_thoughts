import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as THREELOADER from 'three-collada-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imu',
  templateUrl: './imu.component.html',
  styleUrls: ['./imu.component.css']
})
export class ImuComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvasRef: ElementRef;

  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  q = new THREE.Quaternion();
  avatar;

  url = 'http://192.168.1.135:5000'; // should be changed if backend url is changed

  constructor(private http: HttpClient) {

    this.renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);

    const loader = new THREELOADER();
    loader.load('../../../assets/puddles.dae', (collada) => {
      this.avatar = collada.scene;
      this.scene.add(this.avatar);
    });

    this.camera.position.z = 1;
  }

  ngAfterViewInit() {
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.getQuaternion();
    this.render();
  }

  render() {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
    this.avatar.setRotationFromQuaternion(this.q);
  }

  getQuaternion() {
    // this.http.post(this.url, { request: [{ data: 'Imu' }] }).subscribe(i => {
    //   const q = i.data[0].Imu.quaternion;
    //   this.q = new THREE.Quaternion();
    //   this.q.x = q.x;
    //   this.q.y = q.y;
    //   this.q.z = q.z;
    //   this.q.w = q.w;
    //   this.q.set(q.x, q.y, q.z, q.w);
    //   console.log(this.q);
    //   this.render();
    // });

    this.q.rotateTowards(new THREE.Quaternion(-0.5, -0.5, -0.5, 0.5), 0.01);

    setTimeout(() => this.getQuaternion(), 100);
  }



  // animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  // }
  // animate();
}
