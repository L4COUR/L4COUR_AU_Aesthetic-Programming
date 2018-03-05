/* This mini_ex4 evolves around data capturing in any shape or form
in this example I have chosen to focus on capturing serial data
from a light-dependend-resistor, which gives values to ambient light in a room.

connecting an arduino uno to p5.js through serial is not an easy task,
especially when you dont know anything about serial communication.
*/

//Hardware -> Software communication
var started = false;

//button
var button;

//web-cam
var capture;

function setup() {
  var canvas;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
//web-cam capture
  capture = createCapture(VIDEO);
  capture.hide();
  rectMode(CENTER);
  noStroke();

  frameRate(10);


var button = createButton("Log In");
button.mousePressed(start, clearence);
button.style("display","inline-block");
button.style("color","#fff");
button.style("padding","5px 8px");
button.style("text-decoration","none");
button.style("font-size","0.9em");
button.style("font-weight","normal");
button.style("border-radius","3px");
button.style("border","none");
button.style("text-shadow","0 -1px 0 rgba(0,0,0,.2)");
button.style("background","#4c69ba");
button.style("background","-moz-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
button.style("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%, #3b55a0))");
button.style("background","-webkit-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
button.style("background","-o-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
button.style("background","-ms-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
button.style("background","linear-gradient(to bottom, #4c69ba 0%, #3b55a0 100%)");
button.style("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c69ba', endColorstr='#3b55a0', GradientType=0 )");
button.position(width/1.19,35);

noLoop();
}


function draw() {
  if(started){

clear(0);
  fill(0);
  capture.loadPixels();
  for (var cy = 0; cy < capture.height; cy += 3) {
    for (var cx = 0; cx < capture.width; cx += 3) {
      var offset = ((cy*capture.width)+cx)*4;
      var xpos = (cx / capture.width) * width;
      var ypos = (cy / capture.height) * height;
      rect(xpos, ypos, 10,
        (20) * (capture.pixels[offset+1]/200));
      }
    }
  //image(capture, 0, 0, 320, 240);
  //filter(INVERT);

  }
}

function clearence() {
  clear();
}

function start(){
   started = true;
   loop();
}
