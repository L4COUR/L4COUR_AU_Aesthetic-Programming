# Mini_Ex3:
**Objective:**
To reflect upon time and temporality in digital culture via the famous visual throbber icon, and to experiment with various computational effects of animation and transformation.

### ThrobberPhase.js
The whole concept sourrounding this Mini_Ex3 is the perception of time in coding, and how it might be used in coalation with animation and transformation in an experimental envoirment. The more pragmatic view of this assignment is about coding somthing corresponding to the idea of a throbber, which is this very iconic visual representation of waiting. An example of a throbber would be the round loading icon that appears if a Youtube video is buffering more content. In comparison to something like a file-transffering where the user often will recieve some form of feedback through the convinience of a progress-bar showing how many percent has been transfered giving the user a set time, a throbber doesnt have this determanistic concept of time. A throbber is instead this placeholder for missing content, and can sometimes come off as this unlimited and unknown time of waiting. the main purpose of this buffering icon is to show the user that something is happening, and attempts to have the user wait until the content has loaded. This is according to Myers, stated in the text "Fidget spinners - How buffer icons have shaped our sense of time", a better alternative than "a progress bar that had been moving smoothly only to stall at 99 percent (...)" (J. Farman, 2017).         
</br>
</br>
Press the [RawGit](https://cdn.rawgit.com/Pacour/Aesthetic_Programming_2018/45fd10a9/Mini_Ex3/Source/index.html) to run my code.
</br>
**The Code:**

```javascript
var left;
var right;
var reverb;
var filter;
var vol = 1;

function preload() {
  soundFormats('mp3');
  left = loadSound("89_59_metro.mp3");
  right = loadSound("89_59_metro.mp3");
    reverb = new p5.Reverb();
    lowpass = new p5.BandPass();
}

function setup(){
    //Canvas settings and Framerate
    createCanvas(800,400);
    background(10);
    frameRate(60);  //Initiation of the preloaded clips
    reverb.process(left, 3, 2);
      reverb.process(right, 3, 2);

    left.loop();
    left.setVolume(vol);
    left.pan(-1);
    left.rate(1);

      right.loop();
      right.setVolume(vol);
      right.pan(1);
      right.rate(0.985);
}

function draw(){
//drawing the two throbbers
  noStroke();
  fill(10,10);
  rect(0, 0, width, height);
  drawThrobber1(32); //left side.
  drawThrobber2(32.985); // right side slightly offset by 0.985.

  stroke(255)
  strokeWeight(0.5)
  fill(255);
  ellipse(width/3.03,height/2,16,16)
  ellipse(width/1.34,height/2,16,16)

}
var r = 0;
var t = 0;

function drawThrobber1(num) { //left
  push();
  r = (r+4.3985/2);  // r+4.5 = 89.59 BPM
  translate(width/1.5, height/2);
  rotate(radians(r));
  noStroke();
  fill(255,255,0);
  ellipse(64,0,16,16);
  pop();
}

function drawThrobber2(num) { //right
  push();
  t =t+4.455/2;
  translate(width/4, height/2);
  rotate(radians(t));
  noStroke();
  fill(255,40,210);
  ellipse(64,0,16,16);
  pop();
}
```
