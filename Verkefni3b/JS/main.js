window.addEventListener('DOMContentLoaded', function() {
  	
  getStats();



}, true);
var width = 900;
var getstats = false;
var height = 600;
var changeTransform = false;
var changeCam = document.getElementById("camera");
var scene = new THREE.Scene();
var autorotate = true;
var aspect = (width / height);
var camera = new THREE.PerspectiveCamera(100, aspect, 0.1,100);
var renderer = new THREE.WebGLRenderer();

var buttons = document.getElementById("Button");
renderer.setSize(width,height);
var paused = false;
var gemoindex = 0;
var number = 1;
var randomsizes = false;
var numberchanger  = document.getElementById("number");
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
		specular: 0x990000})
]

function flag()
{
	var cy = -33;
	var cx = -50;
	var k = 0;
	for (var i = 0; i < 204; i++) {
	var object = new THREE.Mesh( new THREE.BoxGeometry(4,4,4), new THREE.MeshPhongMaterial({color: 0x000080}));
	object.position.x = cx;
	object.position.y = cy;

	cy += 7;
	k++;
	//cx += 10;


	if(i > 71 && i < 84 )
	{
		object.material =  new THREE.MeshPhongMaterial({color: 0xffffff})
	}
	if(i > (71+36) && i < (84+36) )
	{
		object.material =  new THREE.MeshPhongMaterial({color: 0xffffff})
	}
	if(k ==6 || k==7)
	{
		object.material =  new THREE.MeshPhongMaterial({color: 0x880000})
	}

	if(k ==5 || k==8)
	{
		object.material =  new THREE.MeshPhongMaterial({color: 0xffffff})
	}
	if(i > 83 && i < (84+24) )
	{
		object.material =  new THREE.MeshPhongMaterial({color: 0x880000})
	}

	if(k == 12)
	{
		cx+= 7;
		cy = -33;
		k = 0;
	}
	objects.push(object);
}
	

}

var uppTransX,uppTransY,uppTransZ,downTransX, downTransY, downTransZ,uppRotX,uppRotY,uppRotZ,downRotX, downRotY, downRotZ,
	uppCamX,uppCamY,uppCamZ,downCamX, downCamY, downCamZ,uppCamX,uppCamY,uppCamZ,downCamX, downCamY, downRotZ,downCamFov, uppCamFov,
	ppRotCamX,uppRotCamY,uppRotCamZ,downRotCamX, downRotCamY, downRotCamZ,uppRotCamX,uppRotCamY,uppRotCamZ,downRotCamX, downRotCamY, downRotZ;

var ranges = document.getElementsByClassName("range")
  function sliderfunc(num){
  	
  	console.log("test " + ranges[num].value);
  	changeTransform = true
  	if(ranges[num].value < 0)
  	{
  		if(num == 0)
  		{
  		 downTransX = true;
  		}
  		if(num == 1)
  		{
  		 downTransY = true;
  		}
  		if(num == 2)
  		{
  		 downTransZ = true;
  		}
  		if(num == 3)
  		{
  		 downRotX = true;
  		}
  		if(num == 4)
  		{
  		 downRotY = true;
  		}
  		if(num == 5)
  		{
  		 downRotZ = true;
  		}
  		if(num == 6)
  		{
  		 downCamX = true;
  		}
  		if(num == 7)
  		{
  		 downCamY = true;
  		}
  		if(num == 8)
  		{
  		 downCamZ = true;
  		}
  		if(num == 9)
  		{
  		 downCamFov = true;
  		}
  		if(num == 10)
  		{
  		 downRotCamX = true;
  		}
  		if(num == 11)
  		{
  		 downRotCamY = true;
  		}
  		if(num == 12)
  		{
  		 downRotCamZ = true;
  		}


  	}
  	if(ranges[num].value > 0)
  	{
  		if(num == 0)
  		{
  		 uppTransX = true;
  		}
  		if(num == 1)
  		{
  		 uppTransY = true;
  		}
  		if(num == 2)
  		{
  		 uppTransZ = true;
  		}
  		if(num == 3)
  		{
  		 uppRotX = true;
  		}
  		if(num == 4)
  		{
  		 uppRotY = true;
  		}
  		if(num == 5)
  		{
  		 uppRotZ = true;
  		}
  		if(num == 6)
  		{
  		 uppCamX = true;
  		}
  		if(num == 7)
  		{
  		 uppCamY = true;
  		}
  		if(num == 8)
  		{
  		 uppCamZ = true;
  		}
  		if(num == 9)
  		{
  		 uppCamFov = true;
  		}
  		if(num == 10)
  		{
  		 uppRotCamX = true;
  		}
  		if(num == 11)
  		{
  		 uppRotCamY = true;
  		}
  		if(num == 12)
  		{
  		 uppRotCamZ = true;
  		}
  	}
  	ranges[num].value = 0;

  }


numberchanger.addEventListener("focusout",function(){
	number = numberchanger.value;
	scene = new THREE.Scene();
	AddMoreToScene(object,number);

})

var random = Math.floor(Math.random()*geoms.length);
var objects = new Array();
function AddMoreToScene(copy,number){
	objects = new Array();
	for (var i = 0; i < number ; i++) {
		object = new THREE.Mesh(geoms[random], mats[random])
		object.position.x = Math.floor((Math.random() - 0.5) * 100);
		object.position.z = Math.floor((Math.random() - 0.5) * 100);
		object.position.y = Math.floor((Math.random() - 0.5) * 100);
		object.rotation = copy.rotation;
		objects.push(object)
	}


}


document.addEventListener("click",function(e){
	//console.log(e);
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
			objects[i].material.wireframe = false;
		}
		else{
			object.material.wireframe = true;
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

	if(e.target.id == "iceland")
	{
		flag();
	}
})

document.body.appendChild(renderer.domElement);
camera.position.z = 30;
var geometry = geoms[gemoindex];
var material =  mats[1];
var object = new THREE.Mesh(geometry,material);

var light = new THREE.PointLight(0xFFFF90);
var light = new THREE.AmbientLight();
	light.intensity = 1;
	light.position.set(11,1,25);

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

window.addEventListener("mousemove",function(){
	mouse.x = ( event.clientX / width ) * 2 - 1;
	mouse.y = - ( event.clientY / height ) * 2 + 1;
	//console.log(mouse);

})
var selected;
AddMoreToScene(object,number);
var render = function(){ 

	raycaster.setFromCamera( mouse, camera );
	scene.add(light);
	for (var i = 0; i < objects.length; i++) {
		scene.add(objects[i]);
		objects[i].geometry = object.geometry.clone();
		

		if(autorotate)
		{
			objects[i].rotation.x += 0.01;
			objects[i].rotation.y += 0.01;
			objects[i].rotation.z += 0.01;
		}
		if(randomsizes)
		{
			objects[i].scale.x = Math.floor(Math.random() * 5)+1;
			objects[i].scale.y = Math.floor(Math.random() * 5)+1;
			objects[i].scale.z = Math.floor(Math.random() * 5)+1;

		}
		if(changeTransform)
		{
			if(!selected)
			{
				if(downTransX)
				{
					objects[i].position.x -= 1;
					
				}
				if(uppTransX)
				{
					objects[i].position.x += 1;
				}
				if(downRotX)
				{
					objects[i].rotation.x -= 0.1;
					
				}
				if(uppRotX)
				{
					objects[i].rotation.x += 0.1;
				}
				if(downRotY)
				{
					objects[i].rotation.y -= 0.1;
					
				}
				if(uppRotY)
				{
					objects[i].rotation.y += 0.1;
				}
				if(downRotZ)
				{
					objects[i].rotation.z -= 0.1;
					
				}
				if(uppRotZ)
				{
					objects[i].rotation.z += 0.1;
				}
				if(downTransY)
				{
					objects[i].position.y -= 1;
					
				}
				if(uppTransY)
				{
					objects[i].position.y += 1;
				}
				if(downTransZ)
				{
					objects[i].position.z -= 1;
					
				}
				if(uppTransZ)
				{
					objects[i].position.z += 1;
				}
				
			}
			if(selected)
			{
				if(downTransX)
				{
					selected.position.x -= 0.1;
					
				}
				if(uppTransX)
				{
					selected.position.x += 0.1;
				}
				if(downRotX)
				{
					selected.rotation.x -= 0.1;
					
				}
				if(uppRotX)
				{
					selected.rotation.x += 0.1;
				}
				if(downRotY)
				{
					selected.rotation.y -= 0.1;
					
				}
				if(uppRotY)
				{
					selected.rotation.y += 0.1;
				}
				if(downRotZ)
				{
					selected.rotation.z -= 0.1;
					
				}
				if(uppRotZ)
				{
					selected.rotation.z += 0.1;
				}
				if(downTransY)
				{
					selected.position.y -= 0.1;
					
				}
				if(uppTransY)
				{
					selected.position.y += 1;
				}
				if(downTransZ)
				{
					selected.position.z -= 1;
					
				}
				if(uppTransZ)
				{
					selected.position.z += 1;
				}

			}
			if(uppCamX)
				{
					camera.position.x += 1;
				}
				if(uppCamY)
				{
					camera.position.y += 1;
					
				}
				if(uppCamZ)
				{
					camera.position.z += 0.5;
				}
				if(downCamX)
				{
					camera.position.x -= 1;
				}
				if(downCamY)
				{
					camera.position.y -= 1;
					
				}
				if(downCamZ)
				{
					camera.position.z -= 0.5;
				}
				if(downCamFov)
				{
					camera.fov -= 1;
				}
				if(uppCamFov)
				{
					camera.fov += 1;
				}
				if(uppRotCamX)
				{
					camera.rotation.x += 1;
				}
				if(downRotCamX)
				{
					camera.rotation.x -= 1;
				}
				if(uppRotCamY)
				{
					camera.rotation.y += 1;
				}
				if(downRotCamY)
				{
					camera.rotation.y -= 1;
				}
				if(uppRotCamZ)
				{
					camera.rotation.z += 1;
				}
				if(downRotCamZ)
				{
					camera.rotation.z -= 1;
				}
			
			
		}


			
			getStats();

	}
	randomsizes = false;
	changeTransform = false;
	uppTransX = false;	downTransX = false;	uppTransY = false;	downTransY = false;	downTransZ = false;	uppTransZ = false;
	uppRotX = false;	downRotX = false;	uppRotY = false;	downRotY = false;	downRotZ = false;	uppRotZ = false;
	uppCamX  = false;uppCamY = false; uppCamZ = false; downCamX = false; downCamY = false; downCamZ = false; uppCamX = false; uppCamY = false; uppCamZ = false; downCamX = false; downCamY = false; downRotZ  = false;downCamFov = false; uppCamFov = false;		
	uppRotCamX  = false;uppRotCamY = false; uppRotCamZ = false; downRotCamX = false; downRotCamY = false; downRotCamZ = false; uppRotCamX = false; uppRotCamY = false; uppRotCamZ = false; downRotCamX = false; downRotCamY = false; downRotZ  = false;
	

	getStats();
	makeNumberPretty();
	var	intersects = raycaster.intersectObjects(scene.children);

		if(intersects.length > 0)
		{
		var intersect = intersects[0];
		window.addEventListener("mousedown",function(e){
			console.log(intersect.object);
			intersect.object.material = mats[1].clone();
			intersect.object.geometry = geoms[2].clone();
			selected = intersect.object;
			
		});
	}
	requestAnimationFrame(render);
	renderer.render( scene, camera );
	
}
render();
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





function getStats(){
	var transformer = document.getElementById("transformer");
	var rotator = document.getElementById("rotator");
	var camerarot = document.getElementById("camerarot");

	var children = transformer.children
	children[2].value = object.position.x;
	
	children[4].value = object.position.y;
	children[6].value = object.position.z;

	var children = rotator.children
	children[2].value = object.rotation.x;
	children[4].value = object.rotation.y;
	children[6].value = object.rotation.z;
	var children = changeCam.children
	children[2].value = camera.position.x;
	children[4].value = camera.position.y;
	children[6].value = camera.position.z;
	children[8].value = camera.fov;
	var children = camerarot.children
	children[2].value = camera.rotation.x;
	children[4].value = camera.rotation.y;
	children[6].value = camera.rotation.z;
	if(numberchanger.onfocus = false)
	{
	numberchanger.value + objects.length();
	}

}

function makeNumberPretty(){
	if(object.rotation.x > 360 || object.rotation.x < -360)
	{
		object.rotation.x = 0;
	}
	if(object.rotation.y > 360 || object.rotation.y < -360)
	{
		object.rotation.y = 0;
	}
	if(object.rotation.z > 360 || object.rotation.z  -360)
	{
		object.rotation.z = 0;
	}
	if(camera.rotation.x > 360 || camera.rotation.x < -360)
	{
		camera.rotation.x = 0;
	}
	if(camera.rotation.y > 360 || camera.rotation.y < -360)
	{
		camera.rotation.y = 0;
	}
	if(camera.rotation.z > 360 || camera.rotation.z  -360)
	{
		camera.rotation.z = 0;
	}

}

