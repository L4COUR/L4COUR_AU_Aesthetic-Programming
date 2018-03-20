var kick, tech, fft; //Sound varibles

function preload(){
  kick = loadSound('La Cour - Inside Computers Minds (Original).mp3'); //loading a sample with 4/4 kick drum pattern
  fft = new p5.FFT(0.8,16);
}

function setup() {
createCanvas(600,600);
background(255);

kick.play();
kick.amp(1);

}

function draw() {
//background(255);
strokeWeight(1);
stroke(2);
//noFill();

//spectrum analyzer code
  var spectrum = fft.analyze();
    for (var i = 0; i< spectrum.length; i++){
      var x = map(i, 0, spectrum.length, 0, width);
      var h = -height + map(spectrum[i], 0, 255, height, 0);
  }

for (var x = 0; x <= width; x += 100) {
  for (var y = 0; y <= height; y += 20){
    //rect(x,y,5,5+h);
    push();
    rotate(-frameCount/ x*100)
     translate(random(0,width/2),height/2);
     rotate(frameCount/ x*10)
       push();
         rectMode(CENTER)
         rect(x,y, h/x*4, h/y*4);
         //rect(y/2,x/2, h/x, h/y);
       pop();
   pop();
  }
}

}
