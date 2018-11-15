/*
TO DO:

movement, figuring out how to get the rect to not disapear
how to make the objects independent of each other
*/

var square = [];
var cols = 10;
var rows = 10;

function setup() {
createCanvas(500,500);
for (var i = 0; i < 4; i++) {
  square[i] = new mySquare();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < square.length; i++) {

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
    square[i].display();
    square[i].move();
      }
    }
  }
}

function mySquare() {
  this.x = 250;
  this.y = 250;
  this.dimX = 50
  this.dimY = 50
  this.speed = 1

  this.display = function() {
    stroke(255);
    noFill();
    rectMode(CENTER);
    rect(this.x, this.y, this.dimX, this.dimY);
  }

  this.move = function() {
    this.x = this.x+0.5;
    this.y = this.y+0.2;
  }
}
