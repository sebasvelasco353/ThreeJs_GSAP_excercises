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
const material_one = new THREE.MeshLambertMaterial({color: 0xFFCC00});
// create a mesh based on the geometry and material
const cube = new THREE.Mesh(geometry_one, material_one);

// now we add the element (cube) to the scene
scene.add(cube);

// light in order to see the element
const light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

// now we create the renderer and render the element
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

// renderer function that refreshes every frame
const render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

// play on click
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth)*2-1;
    mouse.y = -(event.clientY / window.innerHeight)*2+1;

    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i<intersects.length; i++){
        // Animation using GSAP
        this.tl = gsap.timeline().delay(.3);
        this.tl.to(intersects[i].object.position, .8, {x: 2, ease: Expo.easeOut});
        this.tl.to(intersects[i].object.rotation, .5, {y: 1, ease: Expo.easeOut}, '-=0.4');
        this.tl.to(intersects[i].object.position, 2, {x: -5, ease: Expo.easeOut}, '-=0.2');
        this.tl.to(intersects[i].object.rotation, 2, {x: -2, ease: Expo.easeOut}, '-=0.2');
        this.tl.to(light.position, 1, {y: -5, ease: Expo.easeOut}, '-=2');
        this.tl.to(intersects[i].object.position, 2, {y: 5, ease: Expo.easeOut}, '-=0.2');
    }
}

document.body.addEventListener('click', onMouseClick);

// Resize Canvas on window resize!
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

