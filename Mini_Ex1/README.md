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
Writing code using the P5.js library has been quite a nice and intuitive expreience. I have had some expreience with other types of coding-envoirments for visual programming before. I have however not had this pleasant experience of code, as being this intuitive expressive tool. My initial ideer for this first mini_ex was to make a 3D-shape and then manipulate it using audio. in order for that to be accomplished i had to figure out a number of things. First i had to figure out the syntax of the 3D object that i wanted to draw. Then i explored the different possibilities of how to change certain aspects of the object like it's colour and stroke size, through the ```color()``` and ```strokeWeight()``` syntax.

  Then i had to figure out how to load audio into my code so i went into the p5.sound reference where i found a syntax called ```loadSound()``` which would enable me to load in any .mp3 formatet audio. in the example used by p5.sounds reference i would need to construct a funtion called ```preload()``` which would load in the audio before moving on to the setup function. The implications of doing it through the preload function is that because the sound has to load before everything else, you wont be able to see your canvas until it has loaded, and instead the sketch starts out with just a text saying "loading" when you run the code. In order to bypass this problem i chose not to use the ```preload()``` and I therefor had to put my ```loadSound()``` in the ```setup()``` and then utilize it's callback parameter so i created a new function ```loaded()``` which would run after my audio had loaded.
  
  I could now focus on the ```fft.analyze()``` syntax. This step required a lot more research and experimentation with the different parameters in the syntax. I read the description for the ```analyze()``` syntax, and using my already exstensive knowledge on audio-processing, I was able to understand most of the theory concerning this syntax, I also watch a video on the subject where i could see how the code was used in a context, and i was then able to copy that to my own code and then further modify the parameters to fit my already existing code and audio. In order to see if the fft element worked in my code, i used the ```console.log(spectrum.length)``` to see if I where receiving any frequency data from the audio i had loaded.
  
  With these three elements done i now had to just explore the code that i had made, use the different varibles from the different syntaxes to perform different manipulations of each other. One example of that would be how I made the position of the 3D obj. rely on two different varibles. in order to move a 3D obj, you need to use the ```translate(x,y,[z])```. for the x - value i used the ```rotateZ()``` in conjuction with the ```random()``` in order to give the ```rotateZ()``` a random framCount between -0.01 and -0.0002 and then i multiplied the ```rotateZ()``` with the x value. the y-value consists of variables from the fft element, and the z-value was 0. This combination of varibles from the fft and the random values made the 3D obj. appear multiple different and random places around the center(0,0,0).
  
  The process of sharing my code afterwards and actually writing about my process, has given me a great inside as to what it means to code in a more creative context, and also how to study the syntax of different functions and variables. this concept of reflecting upon ones process after it has been performed is something that i feel that i learn a lot from doing, but I also feel as if the nature of coding sort of invites the programmer to reflect on the actions he is programming in that particular moment. because the language is so formalized. so reflecting on what varibles to use or how you want a given shape to be manipulated is what I would call a highly reflective process. I also find that commenting on others code, and experiencing how they have managed the task through their creative and reflective thinking, also is something that I as a programmer can benefit from.

***Programming as part of modern literacy:***
This ability to being able to read and write code, is something that is becoming an increasingly more and more important part of living in a western modernized society, where the development of new technologi and automation plays a big part in our lives in everything from educational, political or economical sektors. This development of technology has led to a shift in the perception of what we as a society see as literacy. Classifing programming as a literacy is to put it on the same level of importance as reading and writing natural language, and by further making this "(...)rhetorical connection to national economic development and personal success" (A. Vee, 2017, p. 45), it then changes our ideological perception of what literacy is. This capitalistic view on literacy as a collection of skills made to empower citizens in order for them to get a job where they can practice their limited pragmatic insights of programming, in order for them to make money in a system concerned with efficiancy, production and manipulating information in order to maximaize income.

The way that programming is a part of this understanding of literacy as a selection of abilities that citizens need to have or aquire in order to function properly in a highly modernized society, builds on a pragmatic understanding of programming as a tool made for utilitarian purposes only, and not as a way of performing experimental thinking or expressing one self through creative coding. This other nature of code as a practice of knowledge rather than a tool, where programs can be dysfuntional and focus on other things than efficiancy, is more concerned with seeing literacy as something having to do with "access to information"(A. Vee, 2017, p. 47), which is exactly what programs like p5.js, processing, python, raspberry Pi and many other software developers are concerned with. This idear of a closed world where there is unlimited access to information and resources to carry out experimentation and programming dysfunctional programs, that we then as a community can critique and reflect upon, is exactly what literacy is about. Literacy is about critical thought towards the ideology that changes the values of literacy and the ability to accuire reflective knowledge and use that knowledge in a space that does not require it to function properly. 
