var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var motion = "null";
var x = 10;
var y = 10
var newx = x;
var newy = x;
var z = 0;
var pos = [];
var xchecker = [];
var ychecker = [];
var path = [];

rect1 = ctx.fillRect(x, y, 50, 50);

var applealive = false; 

var imgepli = document.getElementById("eplimynd");
  
function getmyapple()
{

  if(applealive == false)
  {

  var randpos = [Math.floor((Math.random() * (c.height-50))), Math.floor((Math.random() * (c.height-50)))];
  pos = randpos
  

}
}

function drawapple(posx,posy)
{
  applealive = true;
  epli =  ctx.drawImage(imgepli, posx,posy,50,50);
  if(xchecker.includes(posx) && ychecker.includes(posy))
  {
    path.splice(0,2*z);
    console.log("collide");
  
    z++;
    applealive = false;
  }
  }
function drawrect()
{   ctx.fillRect(x, y, 50, 50);

    for (var i =1; i < z; i++) {
       
      ctx.fillRect(path[path.length - i][0], path[path.length - i][1], 50, 50);
     
    
    }
     

}

window.document.addEventListener("keydown",function(e)
{


  if (e.key == "d") {
   
    motion = "right";

  }
  if (e.key == "a") {
     motion = "left";
  }

  if (e.key == "s") {
    motion = "down";
  }
  if (e.key == "w") {
    motion = "up";
  }

  console.log(motion);

});



var speed = 2;
var speedup = 10;

function moveitmoveit(motion)
{ 


  xchecker = []
  var negativex = x
  var negativey = y
for (var i = 0; i < 30; i++) {
  xchecker.push(x + i);
  xchecker.push(negativex - i);
};
  ychecker = []
for (var i = 0; i < 30; i++) {
  ychecker.push(y + i);
  ychecker.push(negativey - i);
};
getmyapple();
drawapple(pos[0],pos[1]);

  if(motion != "null")
  {
    
    
    if(motion == "right")
    {
    ctx.clearRect(0,0,c.width,c.height);
    x = x + speed;
  
    drawrect()
    drawapple(pos[0],pos[1])
    }

     if(motion == "left")
    {
    ctx.clearRect(0,0,c.width,c.height);
    x = x - speed;
  
    drawrect()
    drawapple(pos[0],pos[1])
    }

    if(motion == "down")
    {
    ctx.clearRect(0,0,c.width,c.height);
    y = y + speed;

    drawrect()
    drawapple(pos[0],pos[1])
    }

    if(motion == "up")
    {
    ctx.clearRect(0,0,c.width,c.height);
    y = y - speed;
    drawrect()
    drawapple(pos[0],pos[1])
    }
    
  }


}


while(motion != "null");
{


  
  window.setInterval(function()
  {

   moveitmoveit(motion);

     if(!path.indexOf([x,y]))
      {
        
    }
    else
    {
      path.push([x,y]);
    }


   console.log(path.length);



  },speedup)
}



