var backgroundColor;
var isOverCircle;
var dim = 20;

var dragX;
var dragY;

function setup()
{
  // set canvas size
  createCanvas(400, 400);

  // default background color
  backgroundColor = color(255, 255, 255);
}

function draw()
{
  background(backgroundColor);

  // get distance between mouse and circle
  var distance = dist(mouseX, mouseY, 200, 200);

  // if the distance is less than the circle's radius
  if(distance < dim)
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
    stroke("#ffff00");
    strokeWeight(4);
    cursor(HAND);
  } else {
    fill(200);
    cursor(ARROW);
  }
  ellipse(200, 200, dim, dim);

}

var mouseDragged = function() { // Move black circle
	  dragX = mouseX;
	  dragY = mouseY;
};

function mousePressed()
{
  if(isOverCircle == true)
  {
    backgroundColor = color(random(255), random(255), random(255));
    line(200,200,dragX,dragY);
  }
}
