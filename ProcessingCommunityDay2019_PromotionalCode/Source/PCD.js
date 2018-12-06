var osc, fft, freq;

function setup() {
  createCanvas(500, 400);

  osc = new p5.Oscillator(freq, 'tri'); // set frequency and type
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
  background(0);
}

function draw() {

  var waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    rect(x, y, 3.3, 3.3);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, 0, width, 1, 558);
  osc.freq(freq);

  var amp = map(0, 0, 2000, 1, .01);
  osc.amp(amp);

  masterVolume(1);

  push();
  translate(500 / 10, 400 / 2);
  //textAlign(CENTER);
  textSize(32);
  fill(999 - mouseX);
  noStroke();
  text('Processing', 0, 0);
  text('Community', 0, 30);
  text('Day', 0, 60);
  pop();

   push();
  translate(500 / 4.3, 400 / 2);
  //textAlign(CENTER);
  textSize(32);
  fill(0 - mouseX);
  noStroke();
  text('Aarhus', 0, 60);
  pop();

  push();
  translate(500 / 1.5, 400 / 2);
  textSize(32);
  fill(0 - mouseX);
  noStroke();
  text('', 0, 0);
  text('09-02-19', 0, 30);
  text('@DOKK1', 0, 60);
  pop();

}





function mousePressed() {
  window.open("https://www.pcdaarhus.net/ ");
}
