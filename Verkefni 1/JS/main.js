
var board =  document.getElementById("board");
var svgns = "http://www.w3.org/2000/svg";

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
		board.appendChild(rect);
	}
}

var kassi = document.getElementsByClassName('kassalingur');


var mouseDown = 0;


document.body.onmousedown = function() { 
  mouseDown++;
  console.log(mouseDown);
}
document.body.onmouseup = function() {
  --mouseDown;
}

/*window.addEventListener("click",function(e){
	console.log(e);
})*/

board.addEventListener("click",function(e)
{
	console.log(e);
	var tala = Math.floor(Math.random() * 5);
	var litur = ["blue","black","green","red","purple","red"]
	e.setAttribute("fill",litur[tala]);
})



	/*kassi.addEventListener("mouseover",function(e){
	mousemagic(e);


	}); */

/*var svgns = "http://www.w3.org/2000/svg";
for (var x = 0; x < 600; x += 60) {
    for (var y = 0; y < 600; y += 60) {
        var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'x', x);
        rect.setAttributeNS(null, 'y', y);
        rect.setAttributeNS(null, 'height', '60');
        rect.setAttributeNS(null, 'width', '60');
        rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
        document.getElementById('board').appendChild(rect);
    }
}*/

function mousemagic(e)
{
	/*kassi.setAttribute("x",e.clientX+(Math.sqrt((Math.pow(80,2)*2))/2));
	kassi.setAttribute("y",e.clientY + (Math.sqrt((Math.pow(80,2)*2))/2));
 	console.log(e.clientY - (Math.sqrt((Math.pow(80,2)*2))/2));*/
 	kassi.setAttribute("x",e.clientX-30 );
	kassi.setAttribute("y",e.clientY -30 );
}

