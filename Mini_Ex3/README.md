# Mini_Ex3:
**Objective:**
To reflect upon time and temporality in digital culture via the famous visual throbber icon, and to experiment with various computational effects of animation and transformation.

### ThrobberPhase.js
**The Throbber:**

The whole concept sourrounding this Mini_Ex3 is the perception of time in coding, and how it might be used in coalation with animation and transformation in an experimental envoirment. The more pragmatic view of this assignment is about coding somthing corresponding to the idea of a throbber, which is this very iconic visual representation of waiting. An example of a throbber would be the round loading icon that appears if a Youtube video is buffering more content. In comparison to something like a file-transffering where the user often will recieve some form of feedback through the convinience of a progress-bar showing how many percent has been transfered giving the user a set time, a throbber doesnt have this determanistic concept of time. A throbber is instead this placeholder for missing content, and can sometimes come off as this unlimited and unknown time of waiting. the main purpose of this buffering icon is to show the user that something is happening, and attempts to have the user wait until the content has loaded. This is according to Myers, stated in the text "Fidget spinners - How buffer icons have shaped our sense of time", a better alternative than "a progress bar that had been moving smoothly only to stall at 99 percent (...)" (J. Farman, 2017).
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex3/Screen%20Shot%202018-02-26%20Use%20Headphones.png "Logo Title Text 1")
</br>
Before pressing [RawGit]() I strongly advice to use a set of headphones to get a better experience of the panned audio-signals.
</br>
**The Temporality of Phasing:**

I have in my mini_ex3 repurposed the concept of the trobber as something that repressents a loading time, to instead be sort of a progress bar which gives the user feedback on the current state of cycle of the looping audio-clip. By changing the means of this throbber I opened up for a new form of experimentation with temporalities evolving about the complex idea of phasing. 

**The Code:**

```javascript
var left;
var right;
var reverb;
var filter;
var vol = 0.8;

function preload() {
  soundFormats('mp3');
  left = loadSound("buffersize 134.15BPM.mp3");
  right = loadSound("buffersize 134.15BPM.mp3");
}

function setup(){
    //Canvas settings and Framerate
    createCanvas(800,400);
    background(10);
    frameRate(60);  //Initiation of the preloaded clips

    left.loop();
    left.setVolume(vol);
    left.pan(-1);
    left.rate(1);

      right.loop();
      right.setVolume(vol);
      right.pan(1);
      right.rate(0.995 );
}

function draw(){
//drawing the two throbbers
  noStroke();
  fill(10,1);
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
  r = (left.currentTime()*50);  // using currentTime i am able to use the exact timing of the buffered sound
  translate(width/1.5, height/2);
  rotate(radians(r));
  noStroke();
  fill(255,255,0);
  ellipse(64,0,16,16);
  pop();
}

function drawThrobber2(num) { //right
  push();
  t =right.currentTime()*50;
  translate(width/4, height/2);
  rotate(radians(t));
  noStroke();
  fill(255,40,210);
  ellipse(64,0,16,16);
  pop();
}

```
