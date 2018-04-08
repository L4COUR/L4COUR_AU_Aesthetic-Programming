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
