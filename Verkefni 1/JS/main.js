
var board =  document.getElementById("board");
var selection = document.getElementById("selection");
var svgns = "http://www.w3.org/2000/svg";
var kassi = document.getElementsByClassName('kassalingur');
var chessMaker = document.getElementById("makeChess");

var rects = [];
var rects2 = [];

function makeBox() {
rects = [];
for (var x = 0; x < 600; x += 60) {
    for (var y = 0; y < 600; y += 60) {
    rect = document.createElementNS(svgns,"rect");
    
    rect.setAttribute("id","kassalingur");
    rect.setAttribute("class","kassalingur");
    rect.setAttribute("x",x);
    rect.setAttribute("y",y);
    rect.setAttribute("width", "60");
    rect.setAttribute("height","60");
    rect.setAttribute("fill",'#'+Math.round(0xffffff * Math.random()).toString(16));
    rects.push(rect); 
    board.appendChild(rect);
  }
}
}

function goDown(rect, begin){
  animate = document.createElementNS(svgns, "animate")
  animate.setAttribute("attributeName","height");
  animate.setAttribute("from","0");
  animate.setAttribute("to","60");
  animate.setAttribute("dur","2s");
  animate.setAttribute("begin",begin);
  animate.setAttribute("fill","freeze");
  animate.setAttribute("repeatCount","indefinite");
  rect.appendChild(animate);
}

function goUp(rect, begin){
  animate = document.createElementNS(svgns, "animate")
  animate.setAttribute("attributeName","height");
  animate.setAttribute("from","60");
  animate.setAttribute("to","00");
  animate.setAttribute("dur","2s");
  animate.setAttribute("begin",begin);
  animate.setAttribute("fill","freeze");
  animate.setAttribute("repeatCount","indefinite");
  rect.appendChild(animate);
}


function goRight(rect, begin){
  animate = document.createElementNS(svgns, "animate")
  animate.setAttribute("attributeName","width");
  animate.setAttribute("from","0");
  animate.setAttribute("to","60");
  animate.setAttribute("dur","2s");
  animate.setAttribute("begin",begin);
  animate.setAttribute("fill","freeze");
  animate.setAttribute("repeatCount","indefinite");
  rect.appendChild(animate);
}

function goLeft(rect, begin){
  animate = document.createElementNS(svgns, "animate")
  animate.setAttribute("attributeName","width");
  animate.setAttribute("from","60");
  animate.setAttribute("to","0");
  animate.setAttribute("dur","2s");
  animate.setAttribute("begin",begin);
  animate.setAttribute("fill","freeze");
  animate.setAttribute("repeatCount","indefinite");
  rect.appendChild(animate);
}

function colorRave(rect){
  animate = document.createElementNS(svgns, "animate")
  animate.setAttribute("attributeName","fill");
  color = rect.getAttribute("fill");
  animate.setAttribute("from",color);
  animate.setAttribute("to",'#'+Math.round(0xffffff * Math.random()).toString(16));
  animate.setAttribute("dur","1s");
  animate.setAttribute("fill","freeze");
  animate.setAttribute("repeatCount","indefinite");
  rect.appendChild(animate);
}


function makeChess()
{
  rects2 = [];
  var i = 0;
  for (var x = 0; x < 600; x += 75) {
        i++;

    for (var y = 0; y < 600; y += 75) {
          i++;
    rect = document.createElementNS(svgns,"rect");
    rect.setAttribute("id","kassalingur");
    rect.setAttribute("class","kassalingur");
    rect.setAttribute("x",x);
    rect.setAttribute("y",y);
    rect.setAttribute("width", "75");
    rect.setAttribute("height","75");

    
   
    if ((i % 2) == 1)
    {
      rect.setAttribute("fill","Black");
    }
    else
    {
     rect.setAttribute("fill","white"); 
    }
    board.appendChild(rect);

  }

   rects2 += rect;
}
}





function danceBox(){
for (var i = 0; i < rects.length; i++) {
if ((i % 2) == 0)
    {
   goDown(rects[i],0);
    goLeft(rects[i],0)
    colorRave(rects[i]);


      

    }
    else
    {
        goUp(rects[i],0)
       goRight(rects[i],0);
        colorRave(rects[i]);

      

    }
    
};
}
   
   makeBox();




/*for (var x = 0; x < 600; x += 60) {
    for (var y = 0; y < 600; y += 60) {
    circle = document.createElementNS(svgns,"circle");
    circle.setAttribute("id","kassalingur");
    circle.setAttribute("class","kassalingur");
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r","60");
    circle.setAttribute("fill",'#'+Math.round(0xffffff * Math.random()).toString(16));
    board.appendChild(rect);
  }
}*/




/*window.addEventListener("click",function(e){
	console.log(e);
})*/
selection.addEventListener("click", function(e) {
  if(e.target.id == "makeChess")
  {
    makeChess();
  }
    if(e.target.id == "danceBox")
  {
    danceBox();
  }


});

board.addEventListener("click",function(e)
{
	console.log(e);
	var tala = Math.floor(Math.random() * 5);
	var litur = ["blue","black","green","red","purple","red","white"];
	e.target.setAttribute("fill",litur[tala]);
})



function mousemagic(e)
{
	/*kassi.setAttribute("x",e.clientX+(Math.sqrt((Math.pow(80,2)*2))/2));
	kassi.setAttribute("y",e.clientY + (Math.sqrt((Math.pow(80,2)*2))/2));
 	console.log(e.clientY - (Math.sqrt((Math.pow(80,2)*2))/2));*/
 	kassi.setAttribute("x",e.clientX-30 );
	kassi.setAttribute("y",e.clientY -30 );
}

