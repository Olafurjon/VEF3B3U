var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var scoreboard = document.getElementById("scoreboard");
var selection = document.getElementById("selection");


var rect = [];
var x = 10;
var y = c.height / 2; 
var bx = c.width / 2;
var by = c.height / 2;
var ex = 580;
var ey = 420;
var direction = "left";
function drawBall(x,y,direction)
{
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fill();
  /*if(bx <= x +10 || bx <= x +10 && by <= y+40 || by >= y-40 )
  {

  }*/
  if (direction == "down") {
    by++;
  }
  if (direction == "left")
  {
    bx--;
  }
  if (direction == "right")
  {
    bx++;
  }
  if (direction == "up")
  {
    by--;   
  }
  if (direction == "skaupp") {
  bx++;
  by++;
  }
  if (direction == "skanidur")
  {
    bx--;
    by--;
  }
  if (direction == "right")
  {
    bx++;
  }
  if (direction == "up")
  {
    by--;   
  }

}
function drawEnemy(x,y)
{
  if(by < ey+40)
  {
    ey--;
  }
   if(by > ey+40)
  {
    ey++;
  }
  rect[1] = ctx.fillRect(ex, ey, 10, 80);

}

function drawPlayer(x,y)
{
  rect[0] = ctx.fillRect(x, y, 10, 80);
  c.addEventListener("mousemove",function(e)
  {
    y = e.screenY - 200;
    if(y > c.height - 80)
    {
      y = c.height - 80;
    }
    if(y > c.height + 80)
    {
      y = c.height + 80;
    }
    /*
    ctx.clearRect(0,0,c.width,c.height);
    rect[0] = ctx.fillRect(x, y, 10, 80);
     if(by <= y + 40 || by <= y-80)
      {
        if(bx <= x+20)
        {
            direction = "right";
        }

      }*/
    })

}

function listener()
{
c.addEventListener("mousemove",function(e)
{
  y = e.screenY - 200;
  if(y > c.height - 80)
  {
    y = c.height - 80;
  }
  if(y > c.height + 80)
  {
    y = c.height + 80;
  }

})
   if(by <= y+80 && by >= y-80)
    {
      console.log("collide");
      if(bx <= x+20)
      {
      direction = "right";
      }
    
    }
}


    
    window.setInterval(function()
    {
    ctx.clearRect(0,0,c.width,c.height);
    listener();
    drawPlayer(x,y);
    drawEnemy(ex,ey,10,80);
    drawBall(bx,by,direction);
    console.log(by,y);


    },1)
  


   


function snake()
{

  ctx.clearRect(0,0,c.width,c.height);


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
      //path.splice(0,1*z);
      speedup += 0.1;
    
      z = z + 1;

  
      applealive = false;
    }


    }
  function drawrect()
  {   ctx.fillRect(x, y, 50, 50);
     path.push([x,y]);

      for (var i =1; i < z; i++) {
         
        ctx.fillRect(path[path.length - i-5][0], path[path.length - i-5][1], 50, 50);
       
      
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


  });



  var speed = 3;
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


    },speedup)
  }}


selection.addEventListener("click",function(e){

  if(e.target.id == "snakemynd");
  {
    snake();
  }

});
