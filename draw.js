var canvas = document.getElementById("slate")
var context = canvas.getContext("2d")
var b1 = document.getElementById("b1")
var first = true;

var clear = function(e){
    first = true
    context.clearRect(0,0,500,500);
    
}

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    //console.log(x);
    //console.log(y);
    context.fillStyle= "black";

    if (first){
	console.log("first");
	context.beginPath();
	context.arc(x,y,10, 0 , 2*Math.PI);
	context.fill();
	context.moveTo(x,y);
	first = false;	
	
    }
    else {
	context.lineTo(x,y);
	context.moveTo(x,y);
	context.stroke();
	context.arc(x,y,10, 0 , 2*Math.PI);
	context.fill();
	context.moveTo(x,y);
	
    }


    
    
}


canvas.addEventListener("click", draw);
b1.addEventListener("click", clear);
