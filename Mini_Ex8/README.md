# Mini_Ex8:
*Mark Staun Poulsen, Frederik la Cour and Martin Hansen*  
Written by La Cour.

**Objective:**
To design and implement a program that utilizes web API(s), and to learn how to code and conceptualize a program in a collaborative envoirment. furthermore to reflect upon the processes of data parsing via API, paying attention to registration, availablity/ selection/manipulation of data.

### mini_ex8.js
**The Collaborative Process of Working with API's:**

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex8/Screen%20Shot%202018-04-08%20at%2015.32.37.png "mini_ex8.js")
</br>
[RawGit](https://cdn.rawgit.com/Mmarksp/Aesthetic_Programming_2018/fc238976/mini_exercises/mini_ex8/index_mini_ex8.html).

This program is utilizing Giphy's API in order to gain access to this huge database of gif-files. The JSON-file provided by giphy enables us to gain access to specific gifs, depeding on certain keywords. We thought it would be interesting to search for encouraging words, and so we created an encouraging_words.json file containing as many positive words that we could think of and find throughout the web. We then used the encouraging_words.json file as our search query for the Giphy API. The results that we got was quite interesting. The gif's and the words would ocasionaly be match each other in meaning, however sometimes the gif's would have a totally different meaning in relation to the word and may even be outright silly or horrible. It is certainly interesting how this program can either be this sort of translation of words to gif's or on the other hand have this rather preposterous nature in relation to the translation. with that in mind I will try to explain how the code works. So when the user initiates the program the .json file is loaded providing the Giphy API, with a set of six randomly picked words from the encouraging_words.json file. These words will then act as a search on Giphy which will then find the retrieve six corresponding gif's to the words submittet. The six gif's are then portrayed on a straight line on the canvas along with the six encouraging words picked randomly from the json file, the process then repeats every 15 secoonds, thus giving the user a little time to look at the relations between the words and the gif's.
</br>
It should be mentioned that prior to this finished program, a lot of experimentation was carried out, which is revealed in the code as the last out-commented bits. 

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
**Sources:**
https://github.com/Mmarksp/Aesthetic_Programming_2018/tree/master/mini_exercises/mini_ex8
