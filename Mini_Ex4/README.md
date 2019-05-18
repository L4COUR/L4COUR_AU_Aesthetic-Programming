# Mini_Ex4:
**Objective:**
To Critically relfect upon the issue of data capturing in digital culture, 
and to furthermore experiment with variuos forms of data capturing inputs, 
such as: audio input, mouse movements, keyboard activity, facial recognition through web-cam, etc.

### Obfuscated_FB_Non-human.js
**Artwork Discription:**

The modern-day human becomes the User, a person that uses software, networks, and computers. The User often has a user account and is able to communicate with the system via a username. This transformation from human to User marks the commodification of the individual and has as a result ended the concept of personal data privacy. Living in a world dictated by capitalistic values which manifests itself by manipulating common people into thoughtless over-consumerism by targeting them with adds derived from their behavioral data. Surveillance systems which are being funded by corrupted politicians blinded by threats of terror, are unknowingly supporting an even greater threat to society. The mass surveillance society in which everything that people do is monitored and analyzed and transferred to large databases. Social networking sites like facebook, weChat, vk, and many more are a part of this global monetization which is making the web into a hyper modern panopticon prison in which we can't tell wether we are being watched or not. We have through all of this datamining created a mirrored society on the web, in which we upload our subject individualism, thus the embodiment of the non-human lifeform inside the binary wilderness of the web, manifesting itself through our use of services on the web, it slowly materializes through the data we constantly feed it.
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex4/La-Cour---Obfuscated_FB_Non-human.gif "Obfuscated_FB_Non-human.js")
</br>
Before pressing [RawGit](https://rawcdn.githack.com/L4COUR/Aesthetic_Programming_2018/48059895/Mini_Ex4/Source/index.html) I just 
want to clarify that i have used the ```random()```function to simulate what the data coming in from the arduino. if you wonna see my code like it is meant to be executed then either watch this https://vimeo.com/258640894, or build the arduino circuit and run the code!
</br>

**Transmediale 2015 CAPTURE ALL, 28.01 - 01.02.2015:**
This mini_ex4 is an entry to the CAPTURE ALL themed Call for Works transmediale event from 2015. The CAPTURE ALL theme is concerned with the concept of a soceity ruled by algorithms, in which we more or less consciously contribute to a permanent capture of life into data, thus entering a never-ending enterprise of predictive control. The event sets out to explore and experiment with the questions regarding the artistic strategies and speculative approaches that resist CAPTURE ALL as a measure of constant control and accumulation? and what other approaches to data collection , algorithmic self management and new modalities of work and play can be developed?

I wanted to focus my attention in this entry to try and establish a connection between software and hardware through serial communication which I will elaborate on further down in this README file. another thing that I also wanted to explore was the concept of facial recognition, however figuring out how the p5.Serial connection worked took longer than expected to figure out, so unfortunatly I did not get to experiment much with the clmtrakr library. however i did manage to play around with the p5.dom library and the ```createCapture(VIDEO)``` and scratch the surface of video/FX such as the ```pixel()``` which I really enjoyed a lot. The idea behind the code in this entry is to illustrate this non-human which manifests itself through behavioral data. My initial thoughts were to figure out how API's work and then use it to extract some form of economic data from facebook and then use it to glitch the non-human, portrayed via the webcam capture. I did however find API's a little difficult to grasp in the short period of time that I had, so I instead tried to focus on this serial communication between the Arduino and the p5 software.

**The Concept of Serial-Communicating between Hardware and Software:**
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex4/Arduino_photo_res_circuit.png "Logo Title Text 1")
</br>
**Arduino Code:**
```
int sensorPin = A0; // select the input pin for LDR 
int sensorValue = 0; // variable to store the value coming from the sensor 
void setup() { 
Serial.begin(19200); //sets serial port for communication 
} 
void loop() { 
sensorValue = analogRead(sensorPin); // read the value from the sensor 
Serial.println(sensorValue); //prints the values coming from the sensor on the screen 
delay(10); 
} 
```
This is the critical part of this entry, and was proberbly one of the most difficult concepts to figure out. especially since I first thought that I needed to use p5.bots library to communicate between the arduino and p5.js, however it turned out that i only needed to get the p5.serial library, which is the hardest to install library I have tried so far. It involved installing node.js through homebrew and some TERMINAL commands like ```npm install -g serialport``` along with installing this serialport application which made it a lot easier to manage. All of the serial-data is generated from a photon-resistor in the arduino circuit, which i turned into a variable in p5 called ```inData``` which I then used in the ```pixel()``` to add some glitch to it.

**Integration of HTML & CSS code with the p5.dom elements:**

Another very important part is the heavy use of HTML and CSS elements in relation to the p5.dom elements. So I wanted to reprogram the facebook sign-up page and then change the text and sort of use it as a canvas on which my video glitch could happenn. So I went online and found some source code and importet it into the index.html file along with creating a style.css file containing the stylesheet of the facebook site. I then took the liberty of changing some text to contextualize it more to what I wanted to portray. I also removed a couple of buttons including the origrinal log in button which i replaced with a p5.dom button so which I added some functionality to so that the sketch would first be initiated after the user had logged in. I still think however that i only really scratched the surface of what is possible with the DOM elements and I will most definately get more into it in later excercises.

**p5.js Code:**

```javascript
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

```
**Sources:**
- https://github.com/vanevery/p5.serialport
- https://github.com/vanevery/p5.serialcontrol/releases
- https://github.com/sarahgp/p5bots
- https://github.com/auduno/clmtrackr
- https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
- https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-output-from-p5-js/
- https://creative-coding.decontextualize.com/video/
- https://creative-coding.decontextualize.com/text-and-type/
- https://p5js.org/reference/#/libraries/p5.dom
- https://vimeo.com/237203208
