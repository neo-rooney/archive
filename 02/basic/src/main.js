import * as THREE from "three";

// 동적으로 캔버스 조립하기
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

/**
 * renderer
 * three.js 요소를 화면에 그려주는 요소
 * renderer로 그려지는 장면은 카메라에 시야각에 의해 보여지는 장면
 * antialias: true 계단 현상을 완화시켜주는 옵션, (단, 성능저하는 있음 )
 */
const canvas = document.querySelector("#three-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * Scene
 * three.js에서 전체 요소들이 포함되는 공간
 */
const scene = new THREE.Scene();

/**
 * Camera(PerspectiveCamera)
 * PerspectiveCamera를 많이 씀
 */
// const camera = new THREE.PerspectiveCamera(
//   75, // 시야각
//   window.innerWidth / window.innerHeight, // 종횡비
//   0.1, // near
//   1000 // far
// );
// // 카메라의 위치
// camera.position.x = 1;
// camera.position.y = 2;
// camera.position.z = 5;
// scene.add(camera);

/**
 * Camera(OrthographicCamera)
 * 직교 카메라, 원근에 따라서 물체의 크기가 다르지 않음
 * 대표적으로 디아블로, 롤 카메라
 */
const camera = new THREE.OrthographicCamera(
  -(window.innerWidth / window.innerHeight), // left
  window.innerWidth / window.innerHeight, // right
  1, // top
  -1, // bottom
  0.1, // near
  1000 // far
);

camera.position.x = 1;
camera.position.y = 2;
camera.position.z = 5;
camera.lookAt(0, 0, 0);
camera.zoom = 0.5;
camera.updateProjectionMatrix();
scene.add(camera);
/**
 * Mesh
 * Geometry + Material
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  // color: 0xff0000,
  // color: '#ff0000',
  color: "red",
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * 그리기
 */

renderer.render(scene, camera);
