/* This mini_ex4 evolves around data capturing in any shape or form
in this example I have chosen to focus on capturing serial data
from a light-dependend-resistor, which gives values to ambient light in a room.

connecting an arduino uno to p5.js through serial is not an easy task,
especially when you dont know anything about serial communication.
*/

//Hardware -> Software communication
var started = false;
var serial //variable to hold an instance of the serialport lib.
var portName = '/dev/cu.usbmodem1421';
var inData;

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

//serial data from arduino, interface
serial = new p5.SerialPort(); //make a new instance of the serialport lib.
  serial.on('list', println);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // The port opening
  serial.on('data', serialEvent);     // New data arrives
  serial.on('error', serialError);    // Errors
  serial.on('close', portClose);      // The port closing

serial.open(portName);              // open a serial port
/*draw and serial event function can now be combined
in order to make the code manifest itself as a material
in the "real world".
*/

var button = createButton("Log In");
button.mousePressed(start);
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
          var offset = ((cy*capture.width)+cx)*4+inData;
          var xpos = (cx / capture.width) * width;
          var ypos = (cy / capture.height) * height;
          rect(xpos, ypos, 10+(inData-100),
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

var p;

function start(){
   started = true;
   loop();
   p = createElement('p', 'Human to Non-human data transfer complete.');
   p.position(0,0);
   p.style("color","#fff");
}

//serial data - in console.log
  function serialEvent() {
    inData = Number(serial.read());
    console.log(inData);
  }

  function println(portln){ //shows the data from the arduino in the console
    for (var i = 0; i < portList.length; i++){
      console.log(i + " " + portList[i]);
    }
  }

// All the functions below are callback functions, for utilitarian reasons
  function serverConnected() {
    println('connected to server.');
  }

  function portOpen() {
    println('the serial port opened.')
  }

  function serialError(err) {
    println('Something went wrong with the serial port. ' + err);
  }

  function portClose() {
    println('The serial port closed.');
  }
