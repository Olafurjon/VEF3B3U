var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var motion = "null";
var x = 10;
var y = 10
var z = 55;
rect1 = ctx.fillRect(x, y, z, 50);

var applealive = false; 




var imgepli = document.getElementById("eplimynd");
  


function getmyapple()
{
  if(applealive == false)
  {

  var randpos = [Math.floor((Math.random() * c.height)), Math.floor((Math.random() * c.height))];
  epli =  ctx.drawImage(imgepli, randpos[0], randpos[1],50,50);
  applealive = true;

  if(x == randpos[0] && y == randpos[1] )
  {
    console.log("collide");
    applealive = false;
  }
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



  if(motion != "null")
  {
    epli =  ctx.drawImage(imgepli, 150,150,50,50);

    if(x == 150 && y == 150 )
    {
      console.log("collide");
      applealive = false;
    }
    

    if(motion == "right")
    {
    ctx.clearRect(0,0,c.width,c.height);
    x = x + speed;
    rect1 = ctx.fillRect(x, y, z, 50);
    }

     if(motion == "left")
    {
    ctx.clearRect(0,0,c.width,c.height);
    x = x - speed;
    rect1 = ctx.fillRect(x, y, z, 50);
    }

    if(motion == "down")
    {
    ctx.clearRect(0,0,c.width,c.height);
    y = y + speed;
    rect1 = ctx.fillRect(x, y, z, 50);
    }

    if(motion == "up")
    {
    ctx.clearRect(0,0,c.width,c.height);
    y = y - speed;
    rect1 = ctx.fillRect(x, y, z, 50);
    }
    
    
   



  }


}


while(motion != "null");
{


  
  window.setInterval(function()
  {

   moveitmoveit(motion);
    
  },speedup)
}



