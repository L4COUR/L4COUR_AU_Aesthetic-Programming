// drawing a line between two points
var x1,y1,x2,y2;

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
stroke(0);
strokeWeight(10);
point(200,200);

point(600,200);

point(500,300);


line(x1,y1,x2,y2);
}

function mousePressed() {
 set(x1 = mouseX);
 set(y1 = mouseY);

 set(x2 = mouseX);
 set(y2 = mouseY);



console.log("pressed",mouseX,mouseY);
}

function mouseReleased() {
   set(x2 = mouseX);
   set(y2 = mouseY);

  console.log("released",mouseX,mouseY);

}
