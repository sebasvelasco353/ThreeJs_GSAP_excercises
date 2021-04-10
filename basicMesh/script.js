const sceneContainer = document.querySelector('#scene');
const scene = new THREE.Scene();

scene.background = null;
const camera = new THREE.PerspectiveCamera(
    95, // Field of View
    window.innerWidth / window.innerHeight, // aspect raito
    0.1, // Near clipping plane
    100 //Far clipping plane
);

// since every object is positioned initially in the center we 
// have to move the camera back
camera.position.set(0, 0, 10);

//create a new geometry (object) and material.
const geometry_one = new THREE.BoxBufferGeometry(2, 2, 2);
const material_one = new THREE.MeshBasicMaterial();
// create a mesh based on the geometry and material
const cube = new THREE.Mesh(geometry_one, material_one);

// now we add the element (cube) to the scene
scene.add(cube);

// now we create the renderer and render the element
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
sceneContainer.append(renderer.domElement);
renderer.render(scene, camera);
