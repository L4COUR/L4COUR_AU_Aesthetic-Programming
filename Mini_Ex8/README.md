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
/*
_____/\\\\\\\\\_____/\\\\\\\\\\\\\____/\\\\\\\\\\\_______________/\\\\\\\\\\\\__/\\\\\\\\\\\__/\\\\\\\\\\\\\\\_____/\\\\\\\\\\\___
 ___/\\\\\\\\\\\\\__\/\\\/////////\\\_\/////\\\///______________/\\\//////////__\/////\\\///__\/\\\///////////____/\\\/////////\\\_
  __/\\\/////////\\\_\/\\\_______\/\\\_____\/\\\________________/\\\_________________\/\\\_____\/\\\______________\//\\\______\///__
   _\/\\\_______\/\\\_\/\\\\\\\\\\\\\/______\/\\\_______________\/\\\____/\\\\\\\_____\/\\\_____\/\\\\\\\\\\\_______\////\\\_________
    _\/\\\\\\\\\\\\\\\_\/\\\/////////________\/\\\_______________\/\\\___\/////\\\_____\/\\\_____\/\\\///////___________\////\\\______
     _\/\\\/////////\\\_\/\\\_________________\/\\\_______________\/\\\_______\/\\\_____\/\\\_____\/\\\_____________________\////\\\___
      _\/\\\_______\/\\\_\/\\\_________________\/\\\_______________\/\\\_______\/\\\_____\/\\\_____\/\\\______________/\\\______\//\\\__
       _\/\\\_______\/\\\_\/\\\______________/\\\\\\\\\\\___________\//\\\\\\\\\\\\/___/\\\\\\\\\\\_\/\\\_____________\///\\\\\\\\\\\/___
        _\///________\///__\///______________\///////////_____________\////////////____\///////////__\///________________\///////////_____
*/


var data = [], words, //These two variables contain two JSON-files. One is an array, because it contains multiple instanses of the same set of strings (see line 45). Therefore it becomes an array containing arrays (since a JSON-file is an array once loaded).
word = [], //word is a single word from the variables words.
canvas;

function preload() {
  words = loadJSON("encouraging_words.json");
}

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/2);
  canvas.position(0,0);
  getRandom();    //These two functions are first called upon once during setup.
  askGiphy();

  setInterval(getRandom, 15000); //They are then called upon again every 15 seconds.
  setInterval(askGiphy, 15000);
}


function getRandom() {
  removeElements(); //Removes previous DOM-elements: gifs and text.
  for(let i = 0; i < 6; i++) {
    word[i] = random(words.encouraging_words); //Six random words are picked out from the JSON-file over this for-loop
    let ord = createP(word[i]);
    ord.position(50+ 200 * i, 350); //The words are positioned apart from one another using the i-value to multiply.
  }
}

function askGiphy() {
  for(i = 0; i < 6; i++) { //The six random words are then used here to get six completely different JSON-files.
    data[i] = loadJSON("http://api.giphy.com/v1/gifs/search?q=" + word[i] + "&api_key=dc6zaTOxFJmzC&limit=25", gotData); //The callback function makes it so that gotData will run for every iteration of the loop right after this line here.
  }
}

function gotData(data) {
  let number = floor(random(0, 25)); //The JSON-file contains 25 possible gifs. As one file is loaded, the program will use a random number to pick one gif out.
  createImg(data.data[number].images.fixed_width_downsampled.url); //The gif is then displayed. fixed_width_downsampled was the only option we deemed was workable for our program.
}



// var xoff = 0.0; noise variable

// function textDisplay() {
//     textSize(46);
//     text(word[i], pos.x, pos.y);
// }



// function draw() {
//   for(let i = 0; i < gifs.length; i++) {
//     xoff = xoff + 0.01;
//     let nX = noise(xoff)*width;
//     let nY = noise(xoff)*height;
//     gifs[i].position(nX, nY);
//   }
// }


//                    we have chosen not to use objects for this program,
//                      because it conflicted with the way gif function
// class glitch {
//   constructor(gif, x, y, alpha) {
//     this.gif = gif;
//     this.pos = new createVector(x, y)
//     this.alpha = alpha;
//   }
//
//   display() {
//     image(this.gif, this.pos.x, this.pos.y); //Erstat med Image
//   }
// }

```
**Sources:**
https://github.com/Mmarksp/Aesthetic_Programming_2018/tree/master/mini_exercises/mini_ex8
