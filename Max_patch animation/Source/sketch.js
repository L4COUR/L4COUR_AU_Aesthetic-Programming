// Max/MSP Objects in p5.js
// the idea is to make a menu nav system for a webpage using the patch tech
// TO DO; make patch-chords, figure out a point and click interaction with mouse
// connecting objects to objects, and using it as a button for controlling something.

//variables for the MaxObj
//let maxobject1;
//let maxobject2;

var maxobject = [1,2];

var isOverOutput;
var isOverInput;
var overObj = false;
var locked = false;

// patch_chord variables
var patch_chord = [];

var dragX;
var dragY;
var moveX;
var moveY;

var x1 = maxobject[1].ex;
var y1 = maxobject[1].ey;
var x2;
var y2;

function setup() {
  background(180);
  createCanvas(windowWidth,windowHeight);
  background(180);
  maxobject[1] = new MaxObj("Home~",200,150,180,50,15,15);
  maxobject[2] = new MaxObj("Works",250,350,200,50,15,15);
  maxobject[3] = new MaxObj("About",350,250,140,50,15,15);
}

function mousePressed() {
  //maxobject1.io();
  //maxobject2.io();

  if (x1 > 0, x2 > 0, y1 > 0, y2 > 0) {
    patch_chord.push(new Patcher(x1,y1,x2,y2));
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

  maxobject[1].show();
  maxobject[2].show();
  maxobject[3].show();
  //patch_chord.show();

  for (var i = 0; i < patch_chord.length; i++) {
   patch_chord[i].show();
   patch_chord[i].move();

//  if(x2 > 0){
//     console.log("Reset line parameters")
//     set(x1 = undefined, y1 = undefined);
//     set(x2 = undefined, y2 = undefined);
//   }
   //patch_chord[i].move();
  }
  stroke(88)
  strokeWeight(8);
  line(x1,y1,x2,y2)
  stroke(150)
  strokeWeight(6);
  line(x1,y1,x2,y2)

}

function mouseReleased(move) {
  //set(patch_chord[0].x1,patch_chord[0].x2);
  //console.log("Hey")
//  if(y2 > undefined){
//    console.log("Hey")
//    set(x1 = undefined, y1 = undefined);
//    set(x2 = undefined, y2 = undefined);
//  }
//patch_chord[i].move();
}

class MaxObj {
  constructor(name,x,y,w,h,udr,indr) {
    this.name = name
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ex = x +20;
    this.ey = y +50;
    this.udr = udr;
    this.indr = indr;

    this.strokeW = 0;
  }

  //io() { //this code is able to identify the mouse position within the MaxObj
  //  if (mouseX > this.x && mouseX < this.x + this.w + this.r &&
  //   mouseY > this.y && mouseY < this.y + this.h) {
  //      overObj = true;
  //    if(!locked) {
        //console.log("In", this.name);
        //set(this.ex,this.ey);
  //      stroke(255);
  //      strokeWeight(this.strokeW+5);

  //    }
  //  } else {
  //    stroke(156,39,176);
  //    strokeWeight(this.strokeW);
      //console.log("Out", this.name);
      //set(mouseX,mouseY);
  //    overObj = false;
  //  }
  //}

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
    var distance1 = dist(mouseX, mouseY, this.ex, this.ey);
    // if the distance is less than the circle's radius
    if(distance1 < this.udr && mousePressed)
    {
      isOverOutput = true;
      //console.log("Output", this.name);
      set(x1 = this.ex,y1 = this.ey);
      //patch_chord.push(new Patcher(this.ex,this.ey,maxobject2.ex,maxobject2.y));
    } else {
      isOverOutput = false;
      //set(x2 = undefined, y2 = undefined);
      //set(x1 = undefined, y2 = undefined);
      //console.log("out", this.name);
    }




    // output patchpoint
    ellipseMode(CENTER);
    stroke(0);
    strokeWeight(0);
    if(isOverOutput == true)
    {
      fill(100);
      stroke("#D1D66E");
      strokeWeight(4);
      cursor(HAND);
    } else {
      fill(200);
      cursor(HAND);
    }
    ellipse(this.ex, this.ey, this.udr, this.udr);

    // Object input
    var distance2 = dist(mouseX, mouseY, this.ex, this.y);
    // if the distance is less than the circle's radius
    if(distance2 < this.indr && mousePressed)
    {
      isOverInput = true;
      console.log("Input", this.name);
      set(x2 = this.ex, y2 = this.y);
      //set(x1 = undefined, y1 = undefined);
    //  patch_chord.push(new Patcher(this.ex,this.ey,maxobject2.ex,maxobject2.y));
  } else {
    isOverInput = false
    //console.log("away from Input");
    //set(x2 = undefined, y2 = undefined);
    //set(x1 = undefined, y2 = undefined);
    //console.log("out", this.name);
  }

    // Input patchpoint
    ellipseMode(CENTER);
    stroke(0);
    strokeWeight(0);
    if(isOverInput == true)
    {
      fill(100);
      stroke("#E0ACA1");
      strokeWeight(4);
      cursor(HAND);
    } else {
      fill(200);
      cursor(ARROW);
    }
    ellipse(this.ex, this.y, this.indr, this.indr);

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

  move() {
    if (this.x1 == this.x2) {
      noStroke();
      console.log("RESET");
      this.x1 = undefined;
      this.x2 = undefined;
      this.y1 = undefined;
      this.y2 = undefined;
    }
  }
}
