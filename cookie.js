var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2, 32, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame( animate );

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render( scene, camera );
};

<audio id="my_audio" src="bg.mp3" loop="loop"></audio>

window.onload = function() {
    document.getElementById("BL").play();
}

animate();
