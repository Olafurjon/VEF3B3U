var color = [[0.5, 0.5, 0.5],[0.75, 0.25, 0.5],[0.25, 0.25, 0.75],[1.0, 0.0, 0.15],[0.0, 1.0, 0.15],[0.5, 0.5, 1.0],[0.1, 0.2, 0.7]];

var rotspeed = 1;
var rotspeedbox = document.getElementById("rotspeed")
rotspeedbox.value = rotspeed;
rotspeedbox.addEventListener("focusout", function(){
var rotspeedval = document.getElementById("rotspeed").value;
rotspeed = rotspeedval;
});


var zview = 5;
var zviewbox = document.getElementById("z-view")
zviewbox.value = zview;
zviewbox.addEventListener("focusout", function(){
var zviewval = document.getElementById("z-view").value;
zview = zviewval;
});

var yview = 0;
var yviewbox = document.getElementById("y-view")
yviewbox.value = yview;
yviewbox.addEventListener("focusout", function(){
var yviewval = document.getElementById("y-view").value;
yview = yviewval;
});

var xview = 0;
var xviewbox = document.getElementById("x-view")
xviewbox.value = xview;
xviewbox.addEventListener("focusout", function(){
var xviewval = document.getElementById("x-view").value;
xview = xviewval;
});

var vertexShaderText = 
[
'precision mediump float;', 
'',
'attribute vec3 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'uniform mat4 mWorld;',
'uniform mat4 mView;',
'uniform mat4 mProj;',
'void main()',
'{',
' fragColor = vertColor;',
'gl_Position = mProj *  mView * mWorld * vec4(vertPosition,1.0);',
'}'
].join('\n');

var fragmentShaderText = 
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
' gl_FragColor = vec4(fragColor,1.0);',
'}'
].join('\n');
var StartGl = function(){
var canvas = document.getElementById('glCanvas');
var gl = canvas.getContext('webgl');

   if(!gl)
   {
      console.log("WebGL not supported, falling back on Experimental web-gl")
      gl = canvas.getContext('experimental-webgl');

   }

   if(!gl)
   {
    
      alert("Your Browser does not support WebGL");
   }


   gl.clearColor(0.75,0.85,0.8,1.0);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

   var vertexShader = gl.createShader(gl.VERTEX_SHADER);
   var fragmentShader  = gl.createShader(gl.FRAGMENT_SHADER);
   gl.shaderSource(vertexShader,vertexShaderText);
   gl.shaderSource(fragmentShader,fragmentShaderText);
   gl.enable(gl.DEPTH_TEST);
   gl.enable(gl.CULL_FACE);
   gl.cullFace(gl.BACK);
   gl.frontFace(gl.CCW);

   gl.compileShader(vertexShader);
   if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
   {
      console.error("ERROR compiling shader! ", gl_getShaderInfoLog(vertexShader))
      return;
   }
   gl.compileShader(fragmentShader);
   if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
   {
      console.error("ERROR compiling shader! ", gl_getShaderInfoLog(fragmentShader))
      return;
   }

   var program = gl.createProgram();
   gl.attachShader(program,vertexShader);
   gl.attachShader(program,fragmentShader);
   gl.linkProgram(program);
   if(!gl.getProgramParameter(program, gl.LINK_STATUS))
   {
      console.error("Error linking program ", gl.getProgramInfoLog(program));
      return;
   }
   //bara í debug
   gl.validateProgram(program);
   if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS))
   {
      console.error("Error validating program ", gl.getProgramInfoLog(program));
      return;
   }
    var r1 = Math.floor(Math.random() * color.length);
    var r2 = Math.floor(Math.random() * color.length);
    var r3 = Math.floor(Math.random() * color.length);
    var r4 = Math.floor(Math.random() * color.length);
    var r5 = Math.floor(Math.random() * color.length);
    var r6 = Math.floor(Math.random() * color.length);

   //
   //Buffer
   //
   var boxVertices = 
   [ //X,Y,Z   //RGB

   //toppurinn
     -1.0, 1.0, -1.0,   color[r1][0],color[r1][1],color[r1][2],
     -1.0, 1.0, 1.0,   color[r1][0],color[r1][1],color[r1][2],
     1.0, 1.0, 1.0,   color[r1][0],color[r1][1],color[r1][2],
     1.0, 1.0, -1.0,   color[r1][0],color[r1][1],color[r1][2],

      //vinstri hlið
     -1.0, 1.0, 1.0,   color[r2][0],color[r2][1],color[r2][2],
     -1.0, -1.0, 1.0,   color[r2][0],color[r2][1],color[r2][2],
     -1.0, -1.0, -1.0,   color[r2][0],color[r2][1],color[r2][2],
     -1.0, 1.0, -1.0,   color[r2][0],color[r2][1],color[r2][2],

      //hægri hlið
     1.0, 1.0, 1.0,   color[r3][0],color[r3][1],color[r3][2],
     1.0, -1.0, 1.0,   color[r3][0],color[r3][1],color[r3][2],
     1.0, -1.0, -1.0,   color[r3][0],color[r3][1],color[r3][2],
     1.0, 1.0, -1.0,   color[r3][0],color[r3][1],color[r3][2],

     //Framan á hlið
     1.0, 1.0, 1.0,   color[r4][0],color[r4][1],color[r4][2],
     1.0, -1.0, 1.0,   color[r4][0],color[r4][1],color[r4][2],
     -1.0, -1.0, 1.0,   color[r4][0],color[r4][1],color[r4][2],
     -1.0, 1.0, 1.0,   color[r4][0],color[r4][1],color[r4][2],

     //Bakvið
     1.0, 1.0, -1.0,   color[r5][0],color[r5][1],color[r5][2],
     1.0, -1.0, -1.0,   color[r5][0],color[r5][1],color[r5][2],
     -1.0, -1.0, -1.0,   color[r5][0],color[r5][1],color[r5][2],
     -1.0, 1.0, -1.0,   color[r5][0],color[r5][1],color[r5][2],

    //Botn
     -1.0, -1.0, -1.0,   color[r6][0],color[r6][1],color[r6][2],
     -1.0, -1.0, 1.0,   color[r6][0],color[r6][1],color[r6][2],
     1.0, -1.0, 1.0,   color[r6][0],color[r6][1],color[r6][2],
     1.0, -1.0, -1.0,   color[r6][0],color[r6][1],color[r6][2],
      
   ];

   var boxIndices = 
   [
      //Toppurinn
      0,1,2,
      0,2,3,

      //vinstri
      5,4,6,
      6,4,7,

      //hægri
      8,9,10,
      8,10,11,

      //framan
      13,12,14,
      15,14,12,

      //Bak
      16,17,18,
      16,18,19,

      //botn
      21,20,22,
      22,20,23

   ]

   var boxVerticesBufferObject = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER,boxVerticesBufferObject);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(boxVertices) ,gl.STATIC_DRAW);

   var boxIndexBufferObject = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(boxIndices), gl.STATIC_DRAW);

   var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
   var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
   gl.vertexAttribPointer(
      positionAttribLocation, //attrib loc
      3,//number of elem per attrib
      gl.FLOAT,
      gl.FALSE,
      6*Float32Array.BYTES_PER_ELEMENT,//(4)//size of an individual vertex,
      0//Offset of the begining of a single vertex
      );
      gl.vertexAttribPointer(
      colorAttribLocation, //attrib loc
      3,//number of elem per attrib
      gl.FLOAT,
      gl.FALSE,
      6*Float32Array.BYTES_PER_ELEMENT,//(4)//size of an individual vertex,
      3 * Float32Array.BYTES_PER_ELEMENT//Offset of the begining of a single vertex
      );

   gl.enableVertexAttribArray(positionAttribLocation);
   gl.enableVertexAttribArray(colorAttribLocation);

   gl.useProgram(program);

   var matWorldUniformLocation = gl.getUniformLocation(program, 'mWorld');
   var matViewUniformLocation = gl.getUniformLocation(program, 'mView');
   var matProjUniformLocation = gl.getUniformLocation(program, 'mProj'); 

   var projMatrix = new Float32Array(16);
   var worldMatrix = new Float32Array(16);
   var viewMatrix = new Float32Array(16);


   var xRotationMatrix = new Float32Array(16);
   var yRotationMatrix = new Float32Array(16);

   //
   //Main render loop
   //
   var identityMatrix = new Float32Array(16);
   mat4.identity(identityMatrix);
   var angle = 0;
   var loop = function()
   {   

    mat4.identity(worldMatrix);
   mat4.lookAt(viewMatrix,[0,0,zview],[xview,yview,0],[0,1,0]);
   mat4.perspective(projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height,0.1,1000.0);

   gl.uniformMatrix4fv(matWorldUniformLocation, gl.FALSE, worldMatrix);
   gl.uniformMatrix4fv(matViewUniformLocation, gl.FALSE, viewMatrix);
   gl.uniformMatrix4fv(matProjUniformLocation, gl.FALSE, projMatrix);
   
      angle = performance.now() / 1000 / 6 * 2 * Math.PI;
      angle = angle * rotspeed;;


      mat4.rotate(yRotationMatrix, identityMatrix, angle ,[0,1,0]);
      mat4.rotate(xRotationMatrix, identityMatrix, angle /4 ,[1,0,0]);
      mat4.mul(worldMatrix, yRotationMatrix,xRotationMatrix);
      gl.uniformMatrix4fv(matWorldUniformLocation,gl.FALSE,worldMatrix);
      gl.clearColor(0.75,0.85,0.8,1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      
      requestAnimationFrame(loop);
   gl.drawElements(gl.TRIANGLES,boxIndices.length,gl.UNSIGNED_SHORT,0);
   };
   requestAnimationFrame(loop);

   
};

window.addEventListener("click",function(e){
  console.log(e);
})

/*function vertexShader(vertPosition,vertColor) {
   return{
      fragColor:vertColor,
      gl_Position: [vertPosition.x, vertPosition.y, 0.0,1.0]
   };
};*/




