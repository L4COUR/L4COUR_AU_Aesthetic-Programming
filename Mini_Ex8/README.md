# Mini_Ex8:
*Mark Staun Poulsen, Frederik la Cour and Martin Hansen*  
Written by La Cour.

**Objective:**
To design and implement a program that utilizes web API(s), and to learn how to code and conceptualize a program in a collaborative envoirment. furthermore to reflect upon the processes of data parsing via API, paying attention to registration, availablity/ selection/manipulation of data.

### mini_ex8.js
**The Collaborative Process of Programming with API's:**

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex8/Screen%20Shot%202018-04-08%20at%2015.32.37.png "mini_ex8.js")
</br>
[RawGit](https://cdn.rawgit.com/Mmarksp/Aesthetic_Programming_2018/fc238976/mini_exercises/mini_ex8/index_mini_ex8.html).

This program is utilizing Giphy's API in order to gain access to this huge database of gif-files. The JSON-file provided by giphy enables us to gain access to specific gifs, depeding on certain keywords. We thought it would be interesting to search for encouraging words, and so we created an encouraging_words.json file containing as many positive words that we could think of and find throughout the web. We then used the encouraging_words.json file as our search query for the Giphy API. The results that we got was quite interesting. The gif's and the words would ocasionaly be match each other in meaning, however sometimes the gif's would have a totally different meaning in relation to the word and may even be outright silly or horrible. It is certainly interesting how this program can either be this sort of translation of words to gif's or on the other hand have this rather preposterous nature in relation to the translation. with that in mind I will try to explain how the code works. So when the user initiates the program the .json file is loaded providing the Giphy API, with a set of six randomly picked words from the encouraging_words.json file. These words will then act as a search on Giphy which will then find the parse the six corresponding gif's to the submitted words. The six gif's are then portrayed on a straight line on the canvas along with the six encouraging words picked randomly from the json file, the process then repeats every 15 secoonds, thus giving the user a little time to look at the relations between the words and the gif's.
</br>

It should be mentioned that prior to this finished program, a lot of experimentation was carried out, which is revealed in out-commented section of the code. Our initial idea was to have the different gif's sort of glitch/blur together and creating gif's molded into each other, and we therefor thought of making a class called glitch, which would contain all the properties which would enable the gifs to blend together. these properties included alpha values, along with x,y, positioning via vectors. however we found out that we could'nt make the gif's work correctly if they were inside an object. we even tryed downloading a p5 library called p5.gif.js, however since the library had not been updated in two years, and this new form of object orientated programming had been added to p5.js for about a year ago, this made the two methods incompatible. we also tried to implement noise for controlling the x and y positioning in the object, but we had to discard that idea, we also found out that we could'nt get the gif files to be animated if we used the draw function. this meant that we were limited to only use the p5.dom to make this project.
</br>

Another thing a think is relevant to mention in this project is definaly how the collaboration worked out. Last week when it was just Mark and I, it really went well and so did the collaboration between Mark, Martin and I. Of course it can be quite difficult at times because there is also so many who can code at the same time, without the code getting totally out of control, however I think that being more people to inspire each other and discuss possible option for where the code should go next, or discuss what we are actually trying to show with this code is very nice. I also think it's very nice to get this more collaborative view on the mini_ex's it is certainly very different from when you are working on it yourself. However something that could be nice in regards to this collaborative work would be to perhaps introduce different work methods in regards to code. I think that quickly it becomes one person in the group who has to code everything, mainly because that person often is the one who know where they wonna go I guess. I think that in order to avoid that it might be useful to sort of really plan out how this code is going to be before starting to program anything, and then divide it into smalle task that can then later be combined. Or maybe even trying to utilize github more with pull-requests could be nice. thats just my thoughts on the subject of collaborative programming from my experiences with it so far.
</br>

**The Thing about API's:**
working with API's can be a lot of fun especially if you are able to find some really interesting ones, you might get a lot of ideas, just from scrolling through the huge amounts of them out there on the web. however besides being totally and utterly facinated of what data we are able to acumulate, there is also the matter of using an API, which involves a series of steps. This is initially what can make API's a little bit scary to work with, there is simply so many places were it could go wrong or you might forget to enter some specific details in an URL. I thought that I would just breifly write about this whole gaining access to API's because I think that is the core or understanding API's. of course there is also a matter of being able to interpret a JSON-file, I do however feel that it can be learned with in a matter of minuttes compared with this registration that you will sometimes have to do when you want to use an API. Some websites providing API's are definatly better at making it userfriendly to work with and understand, and some sites are just not that easy to wrap your head around.
So in order to use an API you will need to obtain the API-key, which is often provided from a developers section on the given site you want the data from. then it is a matter of parsing it into your code, and then getting to a point where you can piece together an API-adress so you can look at the json-file and read what it contains so you can figure out how to get to that part of the json file.

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
- https://github.com/Mmarksp/Aesthetic_Programming_2018/tree/master/mini_exercises/mini_ex8
- https://developers.giphy.com/explorer/
