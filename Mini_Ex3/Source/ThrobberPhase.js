var song;
var soong;
var reverb;
var filter;
var vol = 1;

function preload() {
  soundFormats('mp3');
  song = loadSound("89_59_metro.mp3");
  soong = loadSound("89_59_metro.mp3");
    reverb = new p5.Reverb();
    lowpass = new p5.BandPass();
}

function setup(){
  //Canvas settings and Framerate
    createCanvas(800,400);
    background(10);
    frameRate(60);
  //Initiation of the preloaded clips
    reverb.process(song, 3, 2);
      reverb.process(soong, 3, 2);

    song.loop();
    song.setVolume(vol);
    song.pan(-1);
    song.rate(1);

      soong.loop();
      soong.setVolume(vol);
      soong.pan(1);
      soong.rate(0.985);
}

function draw(){
//drawing the two throbbers
  noStroke();
  fill(10,10);
  rect(0, 0, width, height);
  drawThrobber1(32);
  drawThrobber2(32.985); //slightly offsetting one of them by 0.985 in rotation speed

  stroke(255)
  strokeWeight(0.5)
  fill(255);
  ellipse(width/3.03,height/2,16,16)
  ellipse(width/1.34,height/2,16,16)

}
var r = 0;
var t = 0;

function drawThrobber1(num) {
  push();
  r = (r+4.3985/2);  // r+4.5 = 89.59 BPM
  translate(width/1.5, height/2);
  rotate(radians(r));
  noStroke();
  fill(255,255,0);
  ellipse(64,0,16,16);
  pop();
}

function drawThrobber2(num) {
  push();
  t =t+4.455/2;
  translate(width/4, height/2);
  rotate(radians(t));
  noStroke();
  fill(255,40,210);
  ellipse(64,0,16,16);
  pop();
}
