import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-imu',
  templateUrl: './imu.component.html',
  styleUrls: ['./imu.component.css']
})
export class ImuComponent implements OnInit {

  quaternion = 0; //From Inertial frame to Body frame
  rpyRad = 0; //[rad]
  rpyDeg = 0; //[deg]
  headingAlt = 0; //[deg]
  headingLORD = 0;//[deg]
  linearAccel = 0; //[m/s^2]
  angVelRad = 0; //[rad/s]
  angVelDeg = 0; //[deg/s]
  angAccelRad = 0; //[rad/s]
  angAccelDeg = 0; //[deg/s]
  q = new THREE.Quaternion();

  constructor() {
    // const q = new Quaternion('99.3+8i');
    // console.log(q);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );

      this.q.rotateTowards(new THREE.Quaternion(0, 0.7071, 0.7071, 0), 0.00001);
      cube.applyQuaternion(this.q);

    };
    animate();
  }



  ngOnInit() {
  }

  // animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  // }
  // animate();
}
