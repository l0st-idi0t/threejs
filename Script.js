let camera,
    scene,
    renderer,
    controls,
    container,
    rotationPoint;

init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  //create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(#add8e6);
  //rotation point
  rotationPoint = new THREE.Object3D();
  rotationPoint.position.set(0,0,0);
  scene.add(rotationPoint);
  //camera
  camera = new THREE.PerspectiveCamera(
    50, //fov
    window.innerWidth/window.innerHeight, //aspect ratio
    1, //near view
    20000 //far view
  )
  //move camera away from origin
  camera.position.z = -300;
  camera.position.y = 100;

  //renderer
  renderer = new THREE.WebGLRenderer({antialias: true});

  let element = renderer.domElement;
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(element);

  //controls
  controls = new THREE.OrbitControls(camera, element);
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.maxDistance = 1000; //max zoom out mouse scroll
  controls.minDistance = 60; //min zoom in mouse scroll
  controls.target.copy(new THREE.Vector3(0,0,0));
} //end of init function

function update() {
  camera.updateProjectionMatrix();
}

//render scene
function render() {
  renderer.render(scene, camera);
}

//animate scene
function animate() {
  requestAnimationFrame(animate);
  update();
  render();
}
