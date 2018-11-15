
var j = 0;
var cycleNum = 100;
var adverts = [];
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  for(let i = 0; i < random(0, 1000); i++) {
    adverts[i] = new Advert(random(0,1000),random(0,1000));  // Det er width/2 og height/2 som skal indstilles til musikken
  }
}

function draw() {
  adverts[j].display();
  adverts[j].fixTimeLoop(cycleNum); //Callback med variabel. FixTimeLoop er alle funktioner, der er afhaengige af modolu.
}



class Advert {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    rect(this.x,this.y, 50,50);
  }

  fixTimeLoop(num) { //NO TOUCH. Aaah. Hvis du vil have noget slaaet sammen med oscillationen, saa put det ind her. Den koeres igennem draw.
    let n = frameCount % num;
    if (n == 0) {
      j++ //Det er random tekst. Den koerer i raekkefoelge.
      console.log('adverts');
      adverts[i] = new Advert(random(0,1000),random(0,1000));
    }
  }
}
