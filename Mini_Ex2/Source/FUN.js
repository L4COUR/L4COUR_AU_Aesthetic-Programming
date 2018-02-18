/* This is Mini_Ex2, where I explore FUN in programming
using only simple shapes and functions from the p5 library
*/
var s = 'F-undamentally U-ncontrollable N-ose';
var song

function setup() {
  createCanvas(600, 600);
  song = loadSound('BeezSneez.mp3', loaded);
}

function loaded(){
  song.play();
  song.setVolume(0.4);
}

function draw() {
  background('#f0f0f');
  frameRate(10);
  strokeWeight(2);
  stroke(0);
    fill(50);
      text(s, 10, 10, 70, 80);
    fill('rgb(255, 206, 206)');  // The Head
      ellipse(width/1,width/2, 300,350);
    fill(0);
      ellipse(width/1.2,width/2.4, 10,15);
      ellipse(width/1.2,width/1.5, 50,40);
    fill('rgb(255, 206, 220)');  // The Nose
      triangle(width/1.3, width/2, random(0,450), width/2.3, width/1.3, width/2.5);
    fill(222); //hankerchif
      quad(449, 305, 317, 344, 380, 413, 469, 304);
        quad(470, 305, 317, 320, 380, 413, 430, 304);
    stroke('green'); //Mucus
    strokeWeight(10);
      line(469, 302, 468, random(302,368));
}

function mousePressed(){
  console.log(mouseX, mouseY);
}
