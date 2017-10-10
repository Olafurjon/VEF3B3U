var width = 800;
var height = 600;
var scene = new THREE.Scene();
var autorotate = true;
var aspect = (width / height);
var camera = new THREE.PerspectiveCamera(45, aspect, 0.1,100);
var renderer = new THREE.WebGLRenderer();
var buttons = document.getElementById("Button");
renderer.setSize(width,height);
var paused = false;
var gemoindex = 0;
var more = false;
var number = 1;
var randomsizes = false;
var geoms = [
new THREE.CylinderGeometry( 2, 2, 2, 36 ),
new THREE.BoxGeometry( 2, 2, 2),
new THREE.SphereGeometry( 2,0 )
]
var mats = [
new THREE.MeshNormalMaterial(),
new THREE.MeshBasicMaterial(),
new THREE.MeshPhongMaterial({
	color: 0x32CD82,
	specular: 0x009900})
]

function createSlider(change)
{
	var slider = document.createElement("input");
	slider.setAttribute("type","range");
	slider.setAttribute("min",-500);
	slider.setAttribute("max",500);
	slider.setAttribute("step",1);
	slider.value = change;
	slider.oninput = function() {
    change = this.value;
	}
	return slider;
}


var output = document.getElementById("Output");



function makeTriangle()
{
	var geom = new THREE.Geometry();
	var v1 = new THREE.Vector3(0,0,0);
	var v2 = new THREE.Vector3(0,0,0);
	var v3 = new THREE.Vector3(0,0,0);
	geom.vertices.push(v1);
	geom.vertices.push(v2);
	geom.vertices.push(v3);
	geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geom.computeFaceNormals();

	return geom;
}
var objects = new Array();
function AddMoreToScene(copy,number){
	objects = new Array();
	for (var i = 0; i < number ; i++) {
		object = new THREE.Mesh(object.geometry, object.material)
		object.position.x = Math.floor((Math.random() - 0.5) * 30);
		object.position.z = Math.floor((Math.random() - 0.5) * 20);
		object.position.y = Math.floor((Math.random() - 0.5) * 20);
		object.rotation = copy.rotation;
		objects.push(object)
	}


		
	
}


document.addEventListener("click",function(e){
	console.log(e);
	if(e.target.id == "kubbur")
	{
		object.geometry = geoms[1];
		
	}
	if(e.target.id == "bolti")
	{
		object.geometry = geoms[2];
	}
	if(e.target.id == "randomsize")
	{
		if(randomsizes)
		{
			randomsizes = false;
		}
		else
		{
			randomsizes = true;
		}
	}
	if(e.target.id == "wireframe")
	{
		if(object.material.wireframe)
		{
			object.material.wireframe = false;
		}
		else{
			object.material.wireframe = true;
		}
	}
	if(e.target.id == "more")
	{

		if (more)
		{
			scene = new THREE.Scene();
			more = false;
			AddMoreToScene(object,1);
		}
		else{
			scene = new THREE.Scene();
			more = true;
			AddMoreToScene(object,number);
			
		}
	}
	
	if(e.target.id == "pause")
	{
		if(paused)
		{
			autorotate = true;
			paused = false;
		}
		else
		{
		autorotate= false;
		getStats();
		paused = true;
		}
	}
})

document.body.appendChild(renderer.domElement);
camera.position.z = 30;
var geometry = geoms[gemoindex];
var material =  mats[0];
var object = new THREE.Mesh(geometry,material);
AddMoreToScene(object,number);
var light = new THREE.PointLight(0x322D32);
	light.intensity = 5;
	light.position.set(11,1,25);

var render = function(){ 
	for (var i = 0; i < objects.length; i++) {
		scene.add(objects[i]);
		objects[i].geometry = object.geometry;
		if(autorotate)
		{
			objects[i].rotation.x += 0.01;
			objects[i].rotation.z += 0.01;
		}
		if(randomsizes)
		{
			objects[i].scale.x = Math.floor(Math.random() * 5)+1;
			objects[i].scale.y = Math.floor(Math.random() * 5)+1;
			objects[i].scale.z = Math.floor(Math.random() * 5)+1;

		}

			scene.add(light);

	}
	randomsizes = false;




		
	//getStats();
	requestAnimationFrame(render);
	renderer.render( scene, camera );
	
}
render();

function getStats(){
	var transformer = document.getElementById("transformer");
	var children = transformer.children
	children[2].value = object.position.x;

	children[4].value = object.position.y;
	children[6].value = object.position.z;
	var rotator = document.getElementById("rotator");
	var children = rotator.children
	children[2].value = object.rotation.x;
	children[4].value = object.rotation.y;
	children[6].value = object.rotation.z;
}

var canvas = document.getElementsByTagName("canvas")[0];
canvas.draggable = true;
canvas.addEventListener("mousewheel",function(e){
	//var scroll = window.scroll();
	//console.log(e);
	if(e.deltaY < 100)
	{
		camera.position.z -= 1;
	}
	else {
		camera.position.z += 1;
	}
})
var startx;
var starty;
canvas.addEventListener("click",function(e){
		 startx = e.screenX;
	 starty = e.screenY;

	});

canvas.addEventListener("drag",function(e){

	if(e.screenX < startx)
	{
		camera.rotation.x -= 2;
	}

	if(e.screenX > startx)
	{
		camera.rotation.x += 2;
	}
});

//console.log(e);



/*

function DrawingLines(){
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
	camera.position.set(0, 0, 100);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var scene = new THREE.Scene();

	var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 10, 0));
	geometry.vertices.push(new THREE.Vector3(10, 0, 0));
	geometry.vertices.push(new THREE.Vector3(-10, 0, 0));


	var line = new THREE.Line(geometry, material);
	scene.add(line);
	renderer.render(scene, camera);
}
//DrawingLines();
function IcosahedronWithLights(){
	var scene = new THREE.Scene();
	var aspect = window.innerWidth / window.innerHeight;
	var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
		var count = 0;
	var geometry = new THREE.IcosahedronGeometry(20, 0);
	var material = new THREE.MeshPhongMaterial({
		wireframe: false,
		color: 0x32CD82,
		shinyness: 2,
		specular: 0x009900
	});
	var cube = new THREE.Mesh( geometry, material );
	var cubes = new Array();

	camera.position.z = 100;

	var light = new THREE.PointLight(0x322D32);
	light.intensity = 5;
	light.position.set(11,1,25);
	var light2 = new THREE.PointLight(0x0000FF);
	light2.intensity = 100;
	light2.position.set(10,50,2);

	var render = function () {
		scene.add(cube);
		scene.add(light);
		scene.add(light2);
		cube.rotation.x += 0.01;
	  	cube.rotation.y -= 0.01;


	  requestAnimationFrame( render );
	  renderer.render( scene, camera );
	};

	render();
}
//IcosahedronWithLights()

function TextureTest(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
	var mesh;

	var renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// add icosahedron
	var geometry = new THREE.SphereGeometry(24, 32, 32 );
	THREE.ImageUtils.crossOrigin = true;
	var textureLoader = new THREE.TextureLoader();
	textureLoader.crossOrigin = true;
	textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNdO3P6oO6Dc-KRr8_ETOgEKBlfUCLx1uA7WWjZ7lYRBInSJ4Gw', function(texture) {
	  texture.wrapS = texture.wrapT =   THREE.RepeatWrapping;
	    texture.repeat.set( 2, 1 );
	    var material = new THREE.MeshLambertMaterial( {map: texture} );
	  mesh = new THREE.Mesh( geometry, material );
	  scene.add( mesh );
	  
	  render();
	});


	camera.position.z = 100;

	// so many lights
	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 0, 1, 0 );
	scene.add( light );

	var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light.position.set( 0, -1, 0 );
	scene.add( light );

	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 0, 0 );
	scene.add( light );

	var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light.position.set( 0, 0, 1 );
	scene.add( light );

	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 0, 0, -1 );
	scene.add( light );

	var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light.position.set( -1, 0, 0 );
	scene.add( light );


	var render = function () {
	  requestAnimationFrame( render );
	  mesh.rotation.y += 0.01;
	  renderer.render(scene, camera);
	};
}
//TextureTest();
*/