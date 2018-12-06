# PCD@Aarhus_09-02-2019_PromoCode:
*Author: Frederik la Cour*
Digital Design student at Aarhus University, Sound & Media Artist. Attended the course on Aesthetic Programming, where he learned how to perceive code as a material for critical reflection on conceptual matters. Coupling his appreciation for aesthetic programming with his passion for audio-design and electronic music, has installed a new perception on sound experimentation.


**Objective:**
To design a sketch for promoting the PCD @ Aarhus, which is a worldwide event that focuses on promoting code, diversity, creativity and community. The event will happen 09-02-2019 @ DOKK1 in the city of Aarhus. The code should be relatively simple, yet experimentation is highly encouraged, although the sketch must be easy enough to engage with. The idea behind is to keep the community aware of this event coming. the code have to be able to run in the p5 web editor in order be available for the general public as a promotional code.

### sketch.js

```javascript
// Processing Community Day @Aarhus 09-02-2019
var osc, fft, freq;

function setup() {
  createCanvas(500, 400);
  background(0);

  //Oscillator triangle
  osc = new p5.Oscillator(freq, 'tri'); // set frequency and type
  osc.amp(1);

  fft = new p5.FFT();
  osc.start();

}

function draw() {

  //Oscilloscope-audiovisualizer
  var waveform = fft.waveform();
  beginShape();
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);

    	strokeWeight(0.5);
    	var alpha3 = map(mouseX, width, 0, 255, 0);
    	fill(255, 255, 255, 0 + alpha3);
    rect(x, y, 1.5, 2);
  }
  endShape();

  // Oscillator frequency
  var freq = map(mouseX, 0, width, 32.044106, 43.073);
  osc.freq(freq);

  //PCD
  push();
  translate(width / 2, (height / 2)-30);
  textAlign(LEFT);
  textSize(42);
  textFont('Georgia');
  var alpha1 = map(mouseX, width / 1.5, 0, 255, 00);
  var c = 255-alpha3;
  fill(c, c, c, 255 - alpha1);
  noStroke();
  text('Processing', 0, 0);
  text('Community', 0, 42);
  text('Day', 0, 84);
  pop();

  //@Aarhus, 09-02-2019
  push();
  translate(width / 2, (height / 2)-30);
  textAlign(RIGHT);
  textSize(42);
  textFont('Helvetica');
  var alpha2 = map(mouseX / 3, 0, width, 255, 0);
  fill(0, 0, 0, 255-alpha2);
  noStroke();
  text('@Aarhus', 0, 42);
  text('09-02-2019', 0, 84);
  pop();

  // Click to Learn More
  push();
  translate((width-10), (height / 2)+60);
  textAlign(RIGHT);
  textSize(25);
   textFont('Helvetica');
  var alpha2 = map(mouseX / 3, 0, width, 255, 0);
  fill(0, 0, 0, 255-alpha2);
  noStroke();
  text('Click', 0, 22);
  text('to learn', 0, 44);
  text('more', 0, 66);
  pop();

}

function mousePressed() {
  window.open("https://www.pcdaarhus.net/ ");
}

```
**Sources:**
- https://editor.p5js.org/L4COUR/sketches/HkZkI7m1V
- https://www.facebook.com/events/502260593612937/permalink/507845676387762/
- https://www.pcdaarhus.net/about/
