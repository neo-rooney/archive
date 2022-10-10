import * as THREE from "three";

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 레티나 디스플레이에 대응하기 위해
  // 2 이상인 기기들도 있지만 성능을 위해서 아래와 같이 지정함
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
   * Camera(OrthographicCamera)
   * 직교 카메라, 원근에 따라서 물체의 크기가 다르지 않음
   * 대표적으로 디아블로, 롤 카메라
   */
  // const camera = new THREE.OrthographicCamera(
  //   -(window.innerWidth / window.innerHeight), // left
  //   window.innerWidth / window.innerHeight, // right
  //   1, // top
  //   -1, // bottom
  //   0.1, // near
  //   1000 // far
  // );

  // camera.position.x = 1;
  // camera.position.y = 2;
  // camera.position.z = 5;
  // camera.lookAt(0, 0, 0);
  // camera.zoom = 0.5;
  // camera.updateProjectionMatrix();
  // scene.add(camera);
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
