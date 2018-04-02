# Mini_Ex7:
**Objective:**
Design and implement an electronic literature that utilizes written text/audio text as the main medium.
further more this assignment focuses on concceptualizing code through a collaborative process, and to reflect upon the aesthetics of code and language.

### mini_ex7.js
**the collaborative process of working with e-lit:**

This mini_ex7 was really one of the harder ones in my opinion. I really enjoyed working with Mark on this excersise it was a lot of fun to work on code together, and I think that we made a great program together all things considered. I am looking forward to working with more people on code. The reason that I found this to be one of the harder ones is not at all in regards to the collaboration, even though we had to figure out the most effective way to work on code together which can be hard. I found that the hardest part of this project was working with this new concept of strings and text elements, it is not that part of the p5.js library that i have used the most and therefor I found it quite deficult to use, and even more so to imagine what was possible to create with it. This difficulty of the new syntax is also reflected in our work progress. So we had this initial idea of creating a program that would be very close to a snake game, but instead of a snake made out of boxes we wanted to make the snakes out of words which you could combine into sentences and then store them so that when you died you would have created part of a poem in the end. While the idea was brilliant it was quite hard to achieve it, mainly because we were tampering with a lot of relativly advanced code. We worked with this idea for about 5 hours, until we realized that we were not really getting any further, and so in a moment of pure frustration we took a break in which Mark showed me the intro to the film ["Enter the Viod"](https://www.youtube.com/watch?v=wNtxgxYY7sI), we decided to try and replicate this intro through p5.js using the texts as objects with various properties text size, colour, x,y, pos. and further more to use the script from the actual movie as the data that we wanted to feed through the code. we chose to use .txt instead of .JSON because we have had a lot of frustration because of JSON files and commands not behaving like they should, I do think that we need to work further on understanding how these JSON files work. so besides the text object we wanted to use the audio from the actual intro which is [LFO - Freak](https://www.youtube.com/watch?v=3og0oFiDO3U) to also control some parameters which ended up being the background colouring which when the audio peaks will have the background flash in a white colour.

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex7/Screen%20Shot%202018-04-02%20at%2020.33.53.png "AudioGEN.js")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/4ac32962/Mini_Ex7/Source/index_mini_ex7.html) I would once again strongly advice to use a set of headphones for a better experience of the audio.
</br>

**The Generative process and authorship:**
So for me the generative process when working with code is concered with heavy use of loops and conditional statements, and this mini_ex is no different. I have therefor programmed the ```rect();``` inside a nested loop, in order to code a grid, which I used in the beginning, however another very essential part and consequence of working with this level of autonomous processes is also to tinker with the variables in the different functions in order to create a pattern or constallation which you as the programmer is satisfied with. I find that one can often use far too much time on just changing the parameters over and over and over again and just constantly getting different results which are unique and intriging every time.this manipulation of parameters is also one of the reasons that the argument which states that generative art is made by a system and only a system is false. because that by changing around these parameters the programmer is expressing him/herself, which the system would never had done because it is not programmed to express itself, or is able to do so. however even though that we are great in comparison to machines, there are some things which machines handle a lot better and faster than we do, therefor I see generative art as this collaboration between the human and the system. it can of course also be view in terms of this idea of the programmer sort of having a dialog with the system.the programmer writes code, he/she then runs it, the result is delivered from the system, an answer or a response is portrayed, the programmer then interprets what is on the screen, and can then respond by in some way either manipulate the code, or write some new code which can then once again be interpretet by the system. Something that kind of did bother me a little with this mini_ex was that I already sort of had made a generative program in my mini_ex1, and that I had again used an FFT element from p5.sound in order to analyze the data from the audio, as an array of values that can be used to add some more variety to the otherwise very mechanical and boring structure of generative art.     

**The Code:**

```javascript
var txt, data;      //variabler: txt bliver en array, words er objekter, j er increment og cycleNum er modolu
var two_alpha = true;
var fonts = [];
var words = [];
var j = 0;
var cycleNum = 8;

var freak, fft, peakDetect;

function preload() {
  txt = loadStrings("words.txt");

  fonts[0] = loadFont('fonts/Boulding Work St.ttf');
  fonts[1] = loadFont('fonts/Alien.ttf');
  fonts[2] = loadFont('fonts/ninjagarden.ttf');
  fonts[3] = loadFont('fonts/budmo.ttf');
  fonts[4] = loadFont('fonts/ka1.ttf');
  fonts[5] = loadFont('fonts/LLPIXEL3.ttf');
  fonts[6] = loadFont('fonts/distortion.ttf');
  fonts[7] = loadFont('fonts/04b_30.ttf');
  fonts[8] = loadFont('fonts/2025.ttf');
  fonts[9] = loadFont('fonts/JordanBoldGrunge.ttf');
  fonts[10] = loadFont('fonts/Quesat Regular Demo.otf');
  fonts[11] = loadFont('fonts/Prisma.ttf');
  fonts[12] = loadFont('fonts/odessa.ttf');
  fonts[13] = loadFont('fonts/insider.ttf');
  fonts[14] = loadFont('fonts/Khalijaka.ttf');
  fonts[15] = loadFont('fonts/pixelchunker.ttf');
  fonts[16] = loadFont('fonts/SPACEBOY.ttf');
  fonts[17] = loadFont('fonts/Robotica.ttf');
  fonts[18] = loadFont('fonts/GriddyBlocks.ttf');
  fonts[19] = loadFont('fonts/BLUEFISH STENCIL DEMO.otf');
  fonts[20] = loadFont('fonts/Forvertz.ttf');
  fonts[21] = loadFont('fonts/BitMap.ttf');
  fonts[22] = loadFont('fonts/InvertedStencil.ttf');
  fonts[23] = loadFont('fonts/Withheld Data.otf');
  fonts[24] = loadFont('fonts/Cuatra-Bold.ttf');
  fonts[25] = loadFont('fonts/Quick.ttf');
  fonts[26] = loadFont('fonts/Danger on the Motorway.otf');
  fonts[27] = loadFont('fonts/UrbanInline.ttf');
  fonts[28] = loadFont('fonts/Doctor Glitch.otf');
  fonts[29] = loadFont('fonts/Slope Opera.otf');
  fonts[30] = loadFont('fonts/Domotika-Regular-trial.ttf');
  fonts[31] = loadFont('fonts/Screwdriver.otf');
  fonts[32] = loadFont('fonts/MaroonBold.ttf');
  fonts[33] = loadFont('fonts/AtariBold.ttf');
  fonts[34] = loadFont('fonts/TronBoldInline.ttf');

  freak = loadSound('LFO-Freak.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  for(let i = 0; i < txt.length; i++) {
    let col = color(random(0, 255), random(0, 255), random(0, 255)); //startvaerdi for farve. Den aendrer sig laengere nede.
    words[i] = new ord(txt[i], 125, random(fonts), col, width/10, height/4);  // Det er width/2 og height/2 som skal indstilles til musikken
  } //Alle arrayenheder fra word.txt bliver transformeret til et objekt med argumenter for det enkelte objekt.

  fft = new p5.FFT(0.1,64);
  peakDetect = new p5.PeakDetect(120, 540, 0.1, 20);


  freak.setVolume(0.3);
  freak.play();
}

function draw() {
  //spectrum analyzer code
    var spectrum = fft.analyze();
      for (var i = 0; i< spectrum.length; i++){
        var x = map(i, 0, spectrum.length, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
    }

  words[j].display();
  words[j].fixTimeLoop(cycleNum); //Callback med variabel. FixTimeLoop er alle funktioner, der er afhaengige af modolu.
}



class ord {
  constructor(text, textSz, font, col, x, y) { //Vi lader alpha staa, hvis du vil bruge den til musikken. Ellers cutter vi den ud.
    this.pos = new createVector(x, y); //Har ikke nogen anden betydning. Huk at henvise med "this/word[i]".pos.x/y.
    this.text = text;
    this.textSz = textSz;
    this.font = font;
    this.col = col;
  }

  setPosition() {
    // position, numberOfTextElement       Denne skal nok henvises gennem draw
  }

  display() {
    var backcol = 0;
    fft.analyze();
    peakDetect.update(fft);
    if (peakDetect.isDetected) {
      backcol = 255;
    } else {
      backcol = 0;
    }

      background(backcol);
      if (two_alpha) {
        this.col.setAlpha(255);
        two_alpha = false
      } else if (!two_alpha) {
        this.col.setAlpha(100);
        two_alpha = true
      }
      fill(this.col);
      textAlign(CENTER, TOP)
      textSize(this.textSz);
      textFont(this.font);
      text(this.text, this.pos.x, this.pos.y, width/1.2, height/1.2);
  }

  fixTimeLoop(num) { //NO TOUCH. Aaah. Hvis du vil have noget slaaet sammen med oscillationen, saa put det ind her. Den koeres igennem draw.
    let n = frameCount*2 % num;
    if (n == 0) {
      j++ //Det er random tekst. Den koerer i raekkefoelge.
    }
  }
}

```
