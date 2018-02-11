# Mini_Ex1:
**Objective:**
The Objective with this mini_ex1 was to learn the basic setup for creative coding, including independent study of code syntax, uploading files to github, etc. In order to familiarize with the feedback process of the upcoming weekly mini exercises, and being able to reflect on the process of coding.

A screenshot about your program
A URL link to your program and run on a browser, see: https://rawgit.com/
Describe your first independent coding process (in relation to thinking, reading, copying, modifying, writing, uploading, sharing, commenting code)
How your coding process is differ or similar to reading and writing text? (You may also reflect upon Annette Vee's text on coding literacy)
What might be the potential and possibility of coding practice?
</br>
### FFT_Drawing.js
My code is concerned with the relation between 3D-Cones and the FFT-values coming from the music thats playing in the background. The ideer is to analyze the audio frequencies by utilizing the FFT.analyze(). This element computes the amplitude values and produces an array of the corresponding frequencies/ pitches, from the lowest to the highest that humans are able to hear. I am then using the FFT-values to manipulate the position, rotation and dimention of the Cones, thereby drawing patterns with the 3D objects in correlation to the audio playing. Further tweaking of different parameters such as the rotation framCounts, or just simply changing the audiofile, may result in a totally different pattern.
</br>
</br>
<a href="https://www.youtube.com/watch?v=B9p4LqZEwck" target="This is a Youtube video"><img src="https://github.com/Pacour/Aesthetic_Programming_2018/blob/master/Mini_Ex1/Screen-Shot-2018-02-09-at-17.30.32.gif" 
alt="Youtube video"/></a>
</br>
</br>
Press the [RawGit](https://cdn.rawgit.com/Pacour/f1c66d53ae297a19a74337c99abedbf6/raw/cd56d103030dd12663779da096d922459a47663d/sketch.js) to run my code.
</br>
I have had some trouble figuring out how RawGit works, so in the event that it doesnt work, i suggest clicking the .gif, which is a Youtube link.
</br>
</br>
**The Code:**
```javascript
var song, fft;
function setup() {
  createCanvas(1000,700, WEBGL);
  background(0)
  song = loadSound("La Cour - IAX_999992.mp3", loaded);
  fft = new p5.FFT(0.0001,16);
}

function loaded(){
    song.play();
    song.setVolume(0.4);
}

function draw() {
  //spectrum analyzer code
    var spectrum = fft.analyze();
      for (var i = 0; i< spectrum.length; i++){
        var x = map(i, 0, spectrum.lenth, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
    }
      //console.log used to see the array values,
      // from the soundfile "La Cour - IAX_999992"
        //console.log(spectrum.lenth);

  //3D-Shape: Cone, specified
    push();
      translate((x*rotateZ(random(frameCount * -0.01,frameCount * -0.0002)),
                (x, height, width / spectrum.length, h ) ),0);
      rotateY(frameCount * -0.01);
      rotateZ(frameCount * -0.01);
      //noStroke();
        var c = color(random(10,200), random(10,200), random(10, 200), 50);
        fill(c);
      cone(100,(x, height, width / spectrum.length, h ),
                2+(x, height, width / spectrum.length, h ),2);
        var value = alpha(c);
        fill(value)
        strokeWeight(0.5);
    pop();
}
```
### Reflecting on my first independent coding process using P5.js
Writing code using the P5.js library has been quite a nice and intuitive expreience. I have had some expreience with other types of coding-envoirments for visual programming before. I have however not had this pleasant experience of code, as being this exciting expressive tool. 
