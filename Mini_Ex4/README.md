# Mini_Ex4:
**Objective:**
To Critically relfect upon the issue of data capturing in digital culture, 
and to furthermore experiment with variuos forms of data capturing inputs, 
such as: audio input, mouse movements, keyboard activity, facial recognition through web-cam, etc.

### Obfuscated_FB_Non-human.js
**User.js Artwork discription:**

The modern-day human becomes the User, a person that uses software, networks, and computers. The User often has a user account and is able to communicate with the system via a username. This transformation from human to User marks the commodification of the individual and has as a result ended the concept of personal data privacy. Living in a world dictated by capitalistic values which manifests itself by manipulating common people into thoughtless over-consumerism by targeting them with adds derived from their behavioral data. Surveillance systems which are being funded by corrupted politicians blinded by threats of terror, are unknowingly supporting an even greater threat to society. The mass surveillance society in which everything that people do is monitored and analyzed and transferred to large databases. Social networking sites like facebook, weChat, vk, and many more are a part of this global monetization which is making the web into a hyper modern panopticon prison in which we can't tell wether we are being watched or not. We have through all of this datamining created a mirrored society on the web, in which we upload our subject individualism, thus the embodiment of the non-human lifeform inside the binary wilderness of the web, manifesting itself through our use of services on the web, it slowly materializes through the data we constantly feed it.
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex4/La-Cour---Obfuscated_FB_Non-human.gif "Obfuscated_FB_Non-human.js")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_2018/48059895/Mini_Ex4/Source/index.html) I just 
want to clarify that i have used the ```random()```function to simulate what the data coming in from the arduino. if you wonna see my code like it is meant to be executed then either watch this https://vimeo.com/258640894, or build the arduino circuit and run the code!
</br>

**Transmediale 2015 CAPTURE ALL, 28.01 - 01.02.2015:**
This mini_ex4 is an entry to the CAPTURE ALL themed Call for Works transmediale event from 2015. The CAPTURE ALL theme is concerned with the concept of a soceity ruled by algorithms, in which we more or less consciously contribute to a permanent capture of life into data, thus entering a never-ending enterprise of predictive control. The event sets out to explore and experiment with the questions regarding the artistic strategies and speculative approaches that resist CAPTURE ALL as a measure of constant control and accumulation? and what other approaches to data collection , algorithmic self management and new modalities of work and play can be developed?

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
The audio-signal must be split in two for the phasing to happen. then one of the split signals are altered in speed and pitch. when the two audio-signals are played simultaniously what then creates the artifacts in the sound is a mixture of sound waves cancelling each other out, which occours whenever two waves with the same mirrored positive and negative amplitude happens at the same time. then there is also the offset in phase of the waves in relation to each other which resonate with each other essentialy creating a new waveform. all these things combined is what we perceive as the phasing effect.  

**Coded Visual Representation of the Phasing Effect:**

Since I have explained what phasing is and how i used it upon the audio-clips in the code. Will i now move on to the visual side of the code, which proved to be quite a challenge figuring out how to do. So in my earlier versions of the code I didnt know how I was supposed to make the throbbers sync with the audio, so I did a lot of unecessary work where I used a BPM tap-counter and then tapped in the timing of one revolution of the throbber, however this was quite a stupid and unthoughtful way of doing it. What would often happen was that the throbber would get totally out of sync with the audio playing. it was only a few days before hand in that i found i useful function in the p5.sound library ```currentTime()```which enabled me to use the current time in the audio-clips as a variable, which solved my timing issues. I then combined the ```currentTime()``` with the ```rotate()```which synchronized the time of the audio-clips with the rotation of the throbbers.

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
