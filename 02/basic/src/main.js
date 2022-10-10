import * as THREE from "three";

// 동적으로 캔버스 조립하기
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

/**
 * renderer
 * three.js 요소를 화면에 그려주는 요소
 * renderer로 그려지는 장면은 카메라에 시야각에 의해 보여지는 장면 
 */
const canvas = document.querySelector("#three-canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
