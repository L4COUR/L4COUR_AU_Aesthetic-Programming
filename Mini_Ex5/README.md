# Mini_Ex5:
**Objective:**
To reflect upon time and temporality in digital culture via the famous visual throbber icon, and to experiment with various computational effects of animation and transformation.

### Techno_obj.js
**The Techno_obj concept:**

The whole concept sourrounding this Mini_Ex3 is the perception of time in coding, and how it might be used in coalation with animation and transformation in an experimental envoirment. The more pragmatic view of this assignment is about coding somthing corresponding to the idea of a throbber, which is this very iconic visual representation of waiting. An example of a throbber would be the round loading icon that appears if a Youtube video is buffering more content. In comparison to something like a file-transffering where the user often will recieve some form of feedback through the convinience of a progress-bar showing how many percent has been transfered giving the user a set time, a throbber doesnt have this determanistic concept of time. A throbber is instead this placeholder for missing content, and can sometimes come off as this unlimited and unknown time of waiting. the main purpose of this buffering icon is to show the user that something is happening, and attempts to have the user wait until the content has loaded. This is according to Myers, stated in the text "Fidget spinners - How buffer icons have shaped our sense of time", a better alternative than "a progress bar that had been moving smoothly only to stall at 99 percent (...)" (J. Farman, 2017).
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex5/Screen%20Shot%20Mini_Ex5.png "Techno obj 1")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_2018/f78d58f1/Mini_Ex3/Source/index.html) I strongly advice to use a set of headphones to get a better experience of the panned audio-signals.
</br>

**The Auditory Temporality of Phasing in the code:**

I have in my mini_ex3 repurposed the concept of the trobber as something that repressents a loading time, to instead be sort of a progress bar which gives the user feedback on the current state of cycle of the looping audio-clip. By changing the means of this throbber I opened up for a new form of experimentation with temporalities evolving around Steve Reich's phasing technic which he famously used in his piece from 1966 called ["Come Out"](https://www.youtube.com/watch?v=ouYiTiiY3vg). I have linked to a video in which to choreographers performs a composed dance where they get out of phase visually in coalation to the piece also phasing. This was what inspired me to use the throbbers as the to choreaographers and making the phasing visual as well as audiable. in comparison with my Mini_ex1 i chose to this time make use of the ```preload()```in order to have the audio and visuals start at the exact same time which was crucial in order to make this work. In Reich's piece he uses two tape-recorders from which he plays the exact same recording, in order to emulate that i used to ```loadSound()``` twice with the same audio-clip defining them as ```left```and ```right```. In order to give the same effect as "Come Out" i then broadened the stereofield by using the ```left.pan(-1)``` and ```right.pan(1)```, thus creating the same audatory space which makes the phasing more clear to the listner. in order to make the two audio-clips phase with each other, I used the ```rate()```which according to the description sets the playback rate of the audio-clip. which will result in a change in speed and pitch of the file. The playback rate of a audio-clip is normal at 1.0, so all i had to do in order to make the two audio-clips phase with each other was to let the ```left.rate(1)```and the ```right.rate(0.995)```, thus slightly inducing a phasing between the to waves. I feel like I maybe need to explain a little bit about what the physical properties of phasing actually is to those of you who might not be deep into audio-design.

**The Auditory Effect of Phasing:**
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex3/PhasingGIF.gif "Logo Title Text 1")
</br>
The audio-signal must be split in two for the phasing to happen. then one of the split signals are altered in speed and pitch. when the two audio-signals are played simultaniously what then creates the artifacts in the sound is a mixture of sound waves cancelling each other out, which occours whenever two waves with the same mirrored positive and negative amplitude happens at the same time. then there is also the offset in phase of the waves in relation to each other which resonate with each other essentialy creating a new waveform. all these things combined is what we perceive as the phasing effect.  

**Coded Visual Representation of the Phasing Effect:**

Since I have explained what phasing is and how i used it upon the audio-clips in the code. Will i now move on to the visual side of the code, which proved to be quite a challenge figuring out how to do. So in my earlier versions of the code I didnt know how I was supposed to make the throbbers sync with the audio, so I did a lot of unecessary work where I used a BPM tap-counter and then tapped in the timing of one revolution of the throbber, however this was quite a stupid and unthoughtful way of doing it. What would often happen was that the throbber would get totally out of sync with the audio playing. it was only a few days before hand in that i found i useful function in the p5.sound library ```currentTime()```which enabled me to use the current time in the audio-clips as a variable, which solved my timing issues. I then combined the ```currentTime()``` with the ```rotate()```which synchronized the time of the audio-clips with the rotation of the throbbers.

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

