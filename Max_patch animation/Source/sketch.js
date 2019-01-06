// Max/MSP Objects in p5.js
// the idea is to make a menu nav system for a webpage using the patch tech
// TO DO; make patch-chords, figure out a point and click interaction with mouse
// connecting objects to objects, and using it as a button for controlling something.

//variables for the MaxObj
let maxobject1;
let maxobject2;
var isOverCircle;
var overObj = false;
var locked = false;

// patch_chord variables
var patch_chord = [];

var dragX;
var dragY;
var moveX;
var moveY;

function setup() {
  background(180);
  createCanvas(windowWidth,windowHeight);
  maxobject1 = new MaxObj("Home~",200,150,180,50,15);
  maxobject2 = new MaxObj("Works",250,350,200,50,15);
}

function mousePressed() {
  maxobject1.io();
  maxobject2.io();

  if (isOverCircle = true && overObj) {
    patch_chord.push(new Patcher(maxobject1.ex,maxobject1.ey,mouseX,mouseY));
  }


  //if (overObj == true){
  //  patch_chord.push(new Patcher(maxobject1.ex,maxobject1.ey,mouseX,mouseY));
  //}
  //console.log(mouseX,mouseY);
//patch_chord[i].move();
}

function draw() {
  background(180);
  //patch_chord = new Patcher(maxobject1.ex,maxobject1.ey,mouseX,mouseY);

  maxobject1.show();
  maxobject2.show();
  //patch_chord.show();

  for (var i = 0; i < patch_chord.length; i++) {
   patch_chord[i].show();
   //patch_chord[i].move();
  }

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
        set(this.ex,this.ey);
        stroke(255);
        strokeWeight(this.strokeW+5);

      }
    } else {
      stroke(156,39,176);
      strokeWeight(this.strokeW);
      console.log("Out", this.name);
      set(mouseX,mouseY);
      overObj = false;
    }
  }

  show() {
    //MaxObj - box template
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
    if(distance < this.r && mouseIsPressed)
    {
      isOverCircle = true;
      //patch_chord.push(new Patcher(this.ex,this.ey,maxobject2.ex,maxobject2.y));
    } else {
      isOverCircle = false;

    }

    // output patchpoint
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
      cursor(HAND);
    }
    ellipse(this.ex, this.ey, this.r, this.r);

    // Object input
    var distance = dist(mouseX, mouseY, this.ex, this.y);
    // if the distance is less than the circle's radius
    if(distance < this.r)
    {
      isOverCircle = true;
    //  patch_chord.push(new Patcher(this.ex,this.ey,maxobject2.ex,maxobject2.y));
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

class Patcher {
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  show() {
    stroke(88)
    strokeWeight(8);
    line(this.x1,this.y1,this.x2,this.y2)
    stroke(150)
    strokeWeight(6);
    line(this.x1,this.y1,this.x2,this.y2)
  }
}
