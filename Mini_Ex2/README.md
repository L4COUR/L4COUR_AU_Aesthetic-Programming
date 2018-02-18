# Mini_Ex2:
**Objective:**
To comprehend the the notion of fun through eksperimenting
with computational drawing possibilities, and Goriunova's text.

### FUN.js
This might sound weird but i found that this mini_ex2 was actually quite hard to do, 
compared with my previous mini_ex1. I think that one of the reasons why is that I have been sick, 
and i have therefore strugled with finding my inner humoristic programmer. I have during the past week had the sensation of having a head filled with this slippery aqueous secretion substanse, whos only way of escaping was through my nose. This has led to my nose feeling sort of disemboidiet with the rest of my face. So in my struggle to be fun and creative, I then started out with looking at the word "fun", and I tried to perceive the word fun as an abriviation for something else. So FUN stands for Fundamentally Uncontrollable Nose, which sort of tells my story of being sick and needing to constantly blow my nose. When i finally had figured out what my story was I then developed this image in my mind of how i wanted it to look. So my idea was to see this head from the side and then having the nose just be a very simple triangle and then perhaps using the ```random()``` to make the nose jitter along the X-axis. I also thought that having the angle from the side, rather than a more front-face angle would help put more emphasis on the uncontrollable grownth of the nose.
</br>
</br>
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
</br>
Press the [RawGit](https://cdn.rawgit.com/Pacour/Aesthetic_Programming_2018/38f3ec68/Mini_Ex1/empty-example/index.html) to run my code.
</br>
</br>
**The Code:**
```javascript
/* This is Mini_Ex2, where I explore FUN in programming
using only simple shapes and functions from the p5 library
*/
var s = 'F-undamentally U-ncontrollable N-ose'

function setup() {
  createCanvas(600, 600);
}

function draw() {
  strokeWeight(2)
  background('#f0f0f')
  frameRate(10)
    fill(50);
      text(s, 10, 10, 70, 80);
    fill('rgb(255, 206, 206)')
      ellipse(width/1,width/2, 300,350)
    fill(0)
      ellipse(width/1.2,width/2.4, 10,15)
      ellipse(width/1.2,width/1.5, 50,40)
    fill('rgb(255, 206, 220)')
      triangle(width/1.3, width/2, random(0,450), width/2.3, width/1.3, width/2.5);
}
```

  
