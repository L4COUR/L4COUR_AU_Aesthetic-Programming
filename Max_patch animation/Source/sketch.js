// Max/MSP Objects in p5.js
// the idea is to make a menu nav system for a webpage using the patch tech
// TO DO; make patch-chords, figure out a point and click interaction with mouse
// connecting objects to objects, and using it as a button for controlling something.

let maxobject1; let maxobject2; var isOverCircle; var overObj = false; var
locked = false;

var dragX;
var dragY;
var moveX;
var moveY;

function setup() {
  createCanvas(windowWidth,windowHeight);
  maxobject1 = new MaxObj("Home~",200,150,180,50,15);
  maxobject2 = new MaxObj("About",200,350,200,50,15);
}

function draw() {
  background(180);
  maxobject1.show();
  maxobject2.show();

//  stroke(0);
  //strokeWeight(2);
  //line(dragX,dragY,mouseX,mouseY);
}

var mouseMoved = function() { // Move gray circle
	  moveX = mouseX;
	  moveY = mouseY;
};

var mouseDragged = function() { // Move black circle
	  dragX = mouseX;
	  dragY = mouseY;
};

function mousePressed() {
  maxobject1.io();
  maxobject2.io();
  console.log(mouseX,mouseY);
}

class MaxObj {
  constructor(name,x,y,w,h,r) {
    this.name = name
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ex = x +20;
    this.ey = y +50;
    this.r = r;

    this.strokeW = 0;
  }

  io() { //this code is able to identify the mouse position within the MaxObj
    if (mouseX > this.x && mouseX < this.x + this.w + this.r &&
     mouseY > this.y && mouseY < this.y + this.h) {
        overObj = true;
      if(!locked) {
        console.log("In", this.name);
        stroke(255);
        strokeWeight(this.strokeW+5);
      }
    } else {
      stroke(156,39,176);
      strokeWeight(this.strokeW);
      console.log("Out", this.name);
      overObj = false;
    }
  }

  show() {
    stroke(0);
    strokeWeight(this.strokeW);
    fill("#7D7F84");
    rect(this.x,this.y,this.w,this.h);
    fill("#4B4F4D");
    rect(this.x,this.y+10,this.w,this.h-20);


    textSize(25);
      fill(255);
      text(this.name, this.x+8, this.y+32);

    // Object output
    var distance = dist(mouseX, mouseY, this.ex, this.ey);
    // if the distance is less than the circle's radius
    if(distance < this.r)
    {
      isOverCircle = true;
    } else {
      isOverCircle = false;
    }

    // draw a circle
    ellipseMode(CENTER);
    stroke(0);
    strokeWeight(0);
    if(isOverCircle == true)
    {
      fill(100);
      stroke("#D1D66E");
      strokeWeight(4);
      cursor(HAND);
    } else {
      fill(200);
      cursor(ARROW);
    }
    ellipse(this.ex, this.ey, this.r, this.r);

    // Object input
    var distance = dist(mouseX, mouseY, this.ex, this.y);
    // if the distance is less than the circle's radius
    if(distance < this.r)
    {
      isOverCircle = true;
    } else {
      isOverCircle = false;
    }

    // draw a circle
    ellipseMode(CENTER);
    stroke(0);
    strokeWeight(0);
    if(isOverCircle == true)
    {
      fill(100);
      stroke("#E0ACA1");
      strokeWeight(4);
      cursor(HAND);
    } else {
      fill(200);
      cursor(ARROW);
    }
    ellipse(this.ex, this.y, this.r, this.r);

  }
}
