import * as THREE from "three";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // console.log(window.devicePixelRatio);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  // Scene
  const scene = new THREE.Scene();

  // Camara
  const camera = new THREE.PerspectiveCamera(
    75, //fov
    window.innerWidth / window.innerHeight, //aspect
    0.1, //near
    1000 //far
  );

  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 5;
  scene.add(camera);

  //Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "red",
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 그리기
  renderer.render(scene, camera);

  function setSize() {
    // 카메라
    camera.aspect = window.innerWidth / window.innerHeight;
    // 카메라의 프로퍼티 등이 변경 되었을 때 실행시켜줘야하는 메서드
    camera.updateProjectionMatrix();
    // renderer 사이즈 정의
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 그리기
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("resize", setSize);
}
