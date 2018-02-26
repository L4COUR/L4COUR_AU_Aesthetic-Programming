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
  //createcanvas
  createCanvas(800,400);
  background(10);
  frameRate(60);
  //loading the same sound using to different variables
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
  //background(10);
  noStroke();
  fill(10,10);  //check this syntax with alpha value
  rect(0, 0, width, height);
  drawThrobber1(32);
  drawThrobber2(32.985);

  stroke(255)
  strokeWeight(0.5)
  //line(0,height/2,width,height/2)
  fill(255);
  ellipse(width/3.03,height/2,16,16)
  ellipse(width/1.34,height/2,16,16)

}
var r = 0;
var t = 0;

function drawThrobber1(num) {
  push();
  r = (r+4.3985/2);  // r+4.5 = 89.59
  translate(width/1.5, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  //var cir = 360/num*(frameCount%num);  //to know which one among 9 possible positions.
  rotate(radians(r));
  noStroke();
  fill(255,255,0);
  ellipse(64,0,16,16);  //the moving dot(s), the x is the distance from the center
  pop();
}

function drawThrobber2(num) {
  push();
  t =t+4.455/2;
  translate(width/4, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  //var cir = 360/num*(frameCount%num);  //to know which one among 9 possible positions.
  rotate(radians(t));
  noStroke();
  fill(255,40,210);
  ellipse(64,0,16,16);  //the moving dot(s), the x is the distance from the center
  pop();
}
