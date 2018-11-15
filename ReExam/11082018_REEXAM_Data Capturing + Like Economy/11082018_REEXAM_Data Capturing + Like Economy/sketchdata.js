var video;
var vScale = 20;

// var slider;

var cols = 25;
var rows = 20;

// var boxes = [];

var img;

function preload(){
  img = loadImage('Like.png');
}

function setup() {
  createCanvas(400,350);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();

//  for (var y = 0; y < rows; y++) {
//    for (var x = 0; x < cols; x++) {
//      var box = createCheckbox('');
//      box.parent('matrix');
//      boxes.push(box);
//      box.addClass('checkBox');
//    }
//    var linebreak = createSpan('<br/>');
//    linebreak.parent('matrix');
    //work out how the lines are supposed to be check in this video https://www.youtube.com/watch?v=m1G6WBvrOBE&index=5&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig
//  }
// removeElements();
}

function draw() {
  background(999);
  video.loadPixels();
  //loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0]; //  Red
      var g = video.pixels[index+1]; //  Green
      var b = video.pixels[index+2]; //  Blue
      var a = video.pixels[index+3]; //  Alpha
/*instead of drawing pixels, we can draw
rectangels with the corresponding brightness values */
      //pixels[index+0] = r
      //pixels[index+1] = g
      //pixels[index+2] = b
      //pixels[index+3] = a

//console.log(r,g,b,a);
      var bright = (r+g+b)/3;

      var threshold = 64;

      var checkIndex = x + y * cols;


      if (bright > threshold) {
//      boxes[checkIndex].checked(false);
//      fill(255);
        tint(255,bright)
      } else {
//      boxes[checkIndex].checked(true);
//      fill(255);
        tint(255,0)
        console.log('$',x+random(1,1000),'Like');
        //number of likes contributing to the Like economy
      }


      //var w = map(bright, 0, 255, 0, vScale);

      //rectMode(CENTER);
      //noStroke();
      //rect(x*vScale, y*vScale, vScale, vScale)

      image(img,x*vScale, y*vScale, vScale, vScale);
      imageMode(CENTER);
      // Like button

      //noLoop();
  //clear();
  //updatePixels();
    }
  }
}

//rect(r + width/2,g/2,r,b);
