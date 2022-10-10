import * as THREE from "three";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    // alpha: true, // 배경 투명
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  const scene = new THREE.Scene();

  /**
   * Camera(PerspectiveCamera)
   * PerspectiveCamera를 많이 씀
   */
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각
    window.innerWidth / window.innerHeight, // 종횡비
    0.1, // near
    1000 // far
  );
  // 카메라의 위치
  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 5;
  scene.add(camera);

  /**
   * Light
   * 조명
   */

  const light = new THREE.DirectionalLight(0xffffff, 100);
  light.position.z = 2;
  light.position.x = 1;
  scene.add(light);

  /**
   * Mesh
   * Geometry + Material
   */
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // MeshBasicMaterial는 Light에 반응하지 않는다.
  const material = new THREE.MeshStandardMaterial({
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

  /**
   * 반응형
   */
  function setSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", setSize);
}
