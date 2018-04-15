# Mini_Ex9:

**Objective:**
Acquiring the skill of decomposing a computer program into definable parts, and organize this decomposition using a flowchart. further more to understand a flowchart as a means for communication and planning, and being able to comprehend the concept of algorithms from the perspectives of both computer science and cultural understanding. 

### Obfuscated_FB_Non-human.js as a flowchart
**De-composition of my Mini_Ex4:**

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex9/Mini_ex09%20(3).png "mini_ex9_flowchart")
</br>
[Obfuscated_FB_Non-human.js](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/tree/master/Mini_Ex4).

This program is utilizing Giphy's API in order to gain access to this huge database of gif-files. The JSON-file provided by giphy enables us to gain access to specific gifs, depeding on certain keywords. We thought it would be interesting to search for encouraging words, and so we created an encouraging_words.json file containing as many positive words that we could think of and find throughout the web. We then used the encouraging_words.json file as our search query for the Giphy API. The results that we got was quite interesting. The gif's and the words would ocasionaly be match each other in meaning, however sometimes the gif's would have a totally different meaning in relation to the word and may even be outright silly or horrible. It is certainly interesting how this program can either be this sort of translation of words to gif's or on the other hand have this rather preposterous nature in relation to the translation. with that in mind I will try to explain how the code works. So when the user initiates the program the .json file is loaded providing the Giphy API, with a set of six randomly picked words from the encouraging_words.json file. These words will then act as a search on Giphy which will then find the parse the six corresponding gif's to the submitted words. The six gif's are then portrayed on a straight line on the canvas along with the six encouraging words picked randomly from the json file, the process then repeats every 15 secoonds, thus giving the user a little time to look at the relations between the words and the gif's.
</br>

It should be mentioned that prior to this finished program, a lot of experimentation was carried out, which is revealed in out-commented section of the code. Our initial idea was to have the different gif's sort of glitch/blur together and creating gif's molded into each other, and we therefor thought of making a class called glitch, which would contain all the properties which would enable the gifs to blend together. these properties included alpha values, along with x,y, positioning via vectors. however we found out that we could'nt make the gif's work correctly if they were inside an object. we even tryed downloading a p5 library called p5.gif.js, however since the library had not been updated in two years, and this new form of object orientated programming had been added to p5.js for about a year ago, this made the two methods incompatible. we also tried to implement noise for controlling the x and y positioning in the object, but we had to discard that idea, we also found out that we could'nt get the gif files to be animated if we used the draw function. this meant that we were limited to only use the p5.dom to make this project.
</br>

Another thing a think is relevant to mention in this project is definaly how the collaboration worked out. Last week when it was just Mark and I, it really went well and so did the collaboration between Mark, Martin and I. Of course it can be quite difficult at times because there is also so many who can code at the same time, without the code getting totally out of control, however I think that being more people to inspire each other and discuss possible option for where the code should go next, or discuss what we are actually trying to show with this code is very nice. I also think it's very nice to get this more collaborative view on the mini_ex's it is certainly very different from when you are working on it yourself. However something that could be nice in regards to this collaborative work would be to perhaps introduce different work methods in regards to code. I think that quickly it becomes one person in the group who has to code everything, mainly because that person often is the one who know where they wonna go I guess. I think that in order to avoid that it might be useful to sort of really plan out how this code is going to be before starting to program anything, and then divide it into smalle task that can then later be combined. Or maybe even trying to utilize github more with pull-requests could be nice. thats just my thoughts on the subject of collaborative programming from my experiences with it so far.
</br>

**The Thing about API's:**
working with API's can be a lot of fun especially if you are able to find some really interesting ones, you might get a lot of ideas, just from scrolling through the huge amounts of them out there on the web. however besides being totally and utterly facinated of what data we are able to acumulate, there is also the matter of using an API, which involves a series of steps. This is initially what can make API's a little bit scary to work with, there is simply so many places were it could go wrong or you might forget to enter some specific details in an URL. I thought that I would just breifly write about this whole gaining access to API's because I think that is the core or understanding API's. of course there is also a matter of being able to interpret a JSON-file, I do however feel that it can be learned with in a matter of minuttes compared with this registration that you will sometimes have to do when you want to use an API. Some websites providing API's are definatly better at making it userfriendly to work with and understand, and some sites are just not that easy to wrap your head around.
So in order to use an API you will need to obtain the API-key, which is often provided from a developers section on the given site you want the data from. then it is a matter of parsing it into your code, and then getting to a point where you can piece together an API-adress so you can look at the json-file and read what it contains so you can figure out how to get to that part of the json file.

**The Code:**
![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex4/La-Cour---Obfuscated_FB_Non-human.gif "mini_ex9_flowchart")

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
- https://github.com/Mmarksp/Aesthetic_Programming_2018/tree/master/mini_exercises/mini_ex8
- https://developers.giphy.com/explorer/
