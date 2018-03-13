# Mini_Ex5:
**Objective:**
To implement a class-based object oriented sketch via abstracting and designing objects' properties and behaviors, and to furthermore reflect upon the object orientation in the domain of digital culture

### Techno_obj.js
**The Techno_obj concept:**

I have with this mini_ex5 gone with a much simpler idea compared to my previous excercises. This is mostly due to the fact that I currently am working on a electronic music performance, but also because I find that sometimes "less is more". I saw this excersie as an oppertunity to make something very simplistic and really try to figure most of it out, without Daniel Shiffman's tutorials to guide me. I really enjoy programmming in this more minimalistic envoirment. using only one simple shape and just a few other functions and then try to figure out how to overcome the limitations of what i have. I find that working this way makes the process a lot more interesting, because it more than often is necessary to think creatively with the tools at hand. So I knew from the beginning that I wanted to create an object which would be class-based, but all of it's properties came as I progressed through the excersise. I also wanted to use sound, and try to mix the concept of sound with the concept of object. the combination of these to concepts made me realize the objectification of techno. I wanted the object to be somewhat deppendent on the sound, so the size is defined by ```p5.PeakDetect``` which analyzing the peak's in the audio, and the rotation is controlled by the ```tech.currentTime()``` which uses the time of an audio file. 
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex5/Screen%20Shot%20Mini_Ex5.png "Techno obj 1")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_2018/f390cc2b/Mini_Ex5/Source/index.html) I would once again strongly advice to use a set of headphones for a better experience of the panned audio-signals.
</br>

**Object Orientation in digital Culture:**

I have in my mini_ex3 repurposed the concept of the trobber as something that repressents a loading time, to instead be sort of a progress bar which gives the user feedback on the current state of cycle of the looping audio-clip. By changing the means of this throbber I opened up for a new form of experimentation with temporalities evolving around Steve Reich's phasing technic which he famously used in his piece from 1966 called ["Come Out"](https://www.youtube.com/watch?v=ouYiTiiY3vg). I have linked to a video in which to choreographers performs a composed dance where they get out of phase visually in coalation to the piece also phasing. This was what inspired me to use the throbbers as the to choreaographers and making the phasing visual as well as audiable. in comparison with my Mini_ex1 i chose to this time make use of the ```preload()```in order to have the audio and visuals start at the exact same time which was crucial in order to make this work. In Reich's piece he uses two tape-recorders from which he plays the exact same recording, in order to emulate that i used to ```loadSound()``` twice with the same audio-clip defining them as ```left```and ```right```. In order to give the same effect as "Come Out" i then broadened the stereofield by using the ```left.pan(-1)``` and ```right.pan(1)```, thus creating the same audatory space which makes the phasing more clear to the listner. in order to make the two audio-clips phase with each other, I used the ```rate()```which according to the description sets the playback rate of the audio-clip. which will result in a change in speed and pitch of the file. The playback rate of a audio-clip is normal at 1.0, so all i had to do in order to make the two audio-clips phase with each other was to let the ```left.rate(1)```and the ```right.rate(0.995)```, thus slightly inducing a phasing between the to waves. I feel like I maybe need to explain a little bit about what the physical properties of phasing actually is to those of you who might not be deep into audio-design.

**The Code:**

```javascript
/* Mini_ex5 OOP Object oriented programming
the objectification of Techno
*/
var t1, canvas;

var kick, tech, fft, peakDetect, reverb, compressor, filter, filterb; //Sound varibles

function preload(){
  kick = loadSound('LCkick.ogg'); //loading a sample with 4/4 kick drum pattern
  tech = loadSound('LCTechno.ogg');
}

function setup(){
  var canvas;
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  noStroke();
  frameRate(30);

//looping the sample, and changing the playback rate along with the amplitude
  kick.loop();
  kick.rate(0.6);
  kick.amp(1);

  tech.loop();
  tech.rate(0.2);
  tech.amp(0.5);

//initiating the p5.FFT in order to detect peaks in the soundFile
  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect(20, 120, 0.1, 10);

// adding FX Reverb, Comp, Filter
  reverb = new p5.Reverb();
  compressor = new p5.Compressor();
  filter = new p5.LowPass();
  filterb = new p5.BandPass();

  reverb.process(kick, 2,3);
  compressor.process(kick, 0.03, 0, 20,-24,0.1);
  filter.process(kick, 43,10);
  filterb.process(kick,440,100);

  reverb.process(tech, 10,0.1);
  compressor.process(tech, 0.2, 0, 20,-10,0.1);
}

function draw(){
  clear(0);
t1 = new Techno(0,winMouseX,winMouseY,this.size+100);
    t1.show();
    t1.move();

  noCursor();

    var panning = map(mouseX, 0., width, -0.6, 0.);
  tech.pan(panning);
}

//creating a class for the Circle Object

class Techno {
  constructor(getcolor, xpos, ypos, size) {
    this.getcolor = getcolor;
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }

  show() {
noStroke();
  push();
    rectMode(CENTER);
    translate(this.xpos, this.ypos)
    rotate(HALF_PI / tech.currentTime()/12);
    fill(this.getcolor);
    rect(0,0,this.size,this.size);
  pop();
  }

  move() {
    fft.analyze();
    peakDetect.update(fft);
    if (peakDetect.isDetected) {
      size = 450;
    } else {
      size = 10;
    }

  }

}
```

