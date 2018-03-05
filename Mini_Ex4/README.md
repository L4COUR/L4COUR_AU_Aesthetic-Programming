# Mini_Ex4:
**Objective:**
To Critically relfect upon the issue of data capturing in digital culture, 
and to furthermore experiment with variuos forms of data capturing inputs, 
such as: audio input, mouse movements, keyboard activity, facial recognition through web-cam, etc.

### User.js
**User.js Artwork discription:**

https://vimeo.com/258640894
The modern-day human becomes the User, a person that uses software, networks, and computers. The User often has a user account and is able to communicate with the system via the username. This transformation from human to User marks the commodification of the individual and has as a result ended the concept of personal data privacy. Living in a world dictated by capitalistic values which manifests itself by manipulating common people into thoughtless over-consumerism, or surveillance systems which are being funded by corrupted politicians blinded by threats of terror, when in fact they are unknowingly supporting an even greater threat to society. The mass surveillance society in which everything that people do is monitored and analyzed and transferred to large databases. Social networking sites like facebook, weChat, vk, and many more are a part of this global monetization of us. Because this data is becoming a more and more vital part of our society to function, it has then created a mirrored society on the web, in which we humans transform ourselves into the User, a non-human lifeform inside the binary wilderness of the web. The User is a mirrored image of our identity that has been comprised of personal behavioral data, inquired and analyzed through complex computational facial recognition algorithms.

**The Concept of Communicating between Hardware and Software:**

The whole concept sourrounding this Mini_Ex3 is the perception of time in coding, and how it might be used in coalation with animation and transformation in an experimental envoirment. The more pragmatic view of this assignment is about coding somthing corresponding to the idea of a throbber, which is this very iconic visual representation of waiting. An example of a throbber would be the round loading icon that appears if a Youtube video is buffering more content. In comparison to something like a file-transffering where the user often will recieve some form of feedback through the convinience of a progress-bar showing how many percent has been transfered giving the user a set time, a throbber doesnt have this determanistic concept of time. A throbber is instead this placeholder for missing content, and can sometimes come off as this unlimited and unknown time of waiting. the main purpose of this buffering icon is to show the user that something is happening, and attempts to have the user wait until the content has loaded. This is according to Myers, stated in the text "Fidget spinners - How buffer icons have shaped our sense of time", a better alternative than "a progress bar that had been moving smoothly only to stall at 99 percent (...)" (J. Farman, 2017).
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex4/La-Cour---Obfuscated_FB_Non-human.gif "Logo Title Text 1")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_2018/f78d58f1/Mini_Ex3/Source/index.html) I strongly advice to use a set of headphones to get a better experience of the panned audio-signals.
</br>

**The Auditory Temporality of Phasing in the code:**

I have in my mini_ex3 repurposed the concept of the trobber as something that repressents a loading time, to instead be sort of a progress bar which gives the user feedback on the current state of cycle of the looping audio-clip. By changing the means of this throbber I opened up for a new form of experimentation with temporalities evolving around Steve Reich's phasing technic which he famously used in his piece from 1966 called ["Come Out"](https://www.youtube.com/watch?v=ouYiTiiY3vg). I have linked to a video in which to choreographers performs a composed dance where they get out of phase visually in coalation to the piece also phasing. This was what inspired me to use the throbbers as the to choreaographers and making the phasing visual as well as audiable. in comparison with my Mini_ex1 i chose to this time make use of the ```preload()```in order to have the audio and visuals start at the exact same time which was crucial in order to make this work. In Reich's piece he uses two tape-recorders from which he plays the exact same recording, in order to emulate that i used to ```loadSound()``` twice with the same audio-clip defining them as ```left```and ```right```. In order to give the same effect as "Come Out" i then broadened the stereofield by using the ```left.pan(-1)``` and ```right.pan(1)```, thus creating the same audatory space which makes the phasing more clear to the listner. in order to make the two audio-clips phase with each other, I used the ```rate()```which according to the description sets the playback rate of the audio-clip. which will result in a change in speed and pitch of the file. The playback rate of a audio-clip is normal at 1.0, so all i had to do in order to make the two audio-clips phase with each other was to let the ```left.rate(1)```and the ```right.rate(0.995)```, thus slightly inducing a phasing between the to waves. I feel like I maybe need to explain a little bit about what the physical properties of phasing actually is to those of you who might not be deep into audio-design.

**The Auditory Effect of Phasing:**
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
