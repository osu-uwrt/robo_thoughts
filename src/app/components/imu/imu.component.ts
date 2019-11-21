import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import * as THREELOADER from 'three-collada-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imu',
  templateUrl: './imu.component.html',
  styleUrls: ['./imu.component.css']
})
export class ImuComponent implements OnInit {

  quaternion; //From Inertial frame to Body frame
  rpyRad; //[rad]
  rpyDeg; //[deg]
  headingAlt; //[deg]
  headingLORD;//[deg]
  linearAccel = 0; //[m/s^2]
  angVelRad; //[rad/s]
  angVelDeg; //[deg/s]
  angAccelRad; //[rad/s]
  angAccelDeg; //[deg/s]

  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  avatar;
  cube = new THREE.Mesh(this.geometry, this.material);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  q = new THREE.Quaternion();

  url = 'http://192.168.43.214:5000'; // should be changed if backend url is changed

  constructor(private http: HttpClient) {
    // const q = new Quaternion('99.3+8i');
    // console.log(q);


    this.renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    document.body.appendChild(this.renderer.domElement);

    let loader = new THREELOADER();
    loader.load('../../../assets/puddles.dae', (collada) => {

      this.avatar = collada.scene;
      console.log('test');
      // this.scene.add(this.cube);
      this.scene.add(this.avatar);

    });

    this.camera.position.z = 5;

    this.getQuaternion();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
    this.avatar.setRotationFromQuaternion(this.q);
  }

  getQuaternion() {
    this.http.post(this.url, { request: [{ data: 'Imu' }] }).subscribe(i => {
      console.log(i);
      let q = i.data[0].Imu.quaternion;
      this.q = new THREE.Quaternion();
      this.q.x = q.x;
      this.q.y = q.y;
      this.q.z = q.z;
      this.q.w = q.w;
      // this.q.set(q.x, q.y, q.z, q.w);
      console.log(this.q);
      this.animate();
    });
    setTimeout(() => this.getQuaternion(), 100);
  }


  ngOnInit() {
  }

  // animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  // }
  // animate();
}
