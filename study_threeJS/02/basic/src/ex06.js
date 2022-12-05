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
  // camera.position.x = 1;
  // camera.position.y = 2;
  camera.position.z = 5;
  scene.add(camera);

  /**
   * Light
   * 조명
   */

  const light = new THREE.DirectionalLight(0xffffff, 1);
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

  const clock = new THREE.Clock();

  function draw() {
    // const time = clock.getElapsedTime();
    const delta = clock.getDelta();
    // 각도는 Radian을 기본으로 사용
    // mesh.rotation.y += 0.1;
    // mesh.rotation.y += THREE.MathUtils.degToRad(time);
    mesh.rotation.y += delta * 10;
    mesh.position.y += delta;
    if (mesh.position.y > 3) {
      mesh.position.y = 0;
    }
    renderer.render(scene, camera);
    // requestAnimationFrame(draw);
    renderer.setAnimationLoop(draw);
  }

  draw();

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
