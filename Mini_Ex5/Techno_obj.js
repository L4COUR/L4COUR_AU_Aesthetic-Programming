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
