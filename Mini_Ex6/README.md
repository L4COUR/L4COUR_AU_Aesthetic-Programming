# Mini_Ex6:
**Objective:**
Implement a rule-based generative program, by using loops and conditional statements to strengthen computational comprehendsion. Further more to reflect upon the concept of generativity in a theoretical and practical sense, concerning subjects such as rules, temporality, authorship, emergence and processes.

### AudioGEN.js
**The generative art as a phenomenological concept:**

I have in this mini_ex6 tried to continue my notion of minimalism in code, from my previous mini_ex5. I see minimalism in this project as part of the rule based programming, in the sense that I am trying to code something using very few lines, in order to create a very complex result. That is the first rule of my program, the second rule is concerned with implementing some form of audio which can act as a form of noise in the visual expression. The third rule has to do with only using one shape and one form of movement, which in this case would by the ```rect();```and ```rotate();```. My initial idea concerning this mini_ex6 was to make an array of objects and then have the  different objects relate to each other via audio, however I ran out of time, and I werent able to combine the objects with array's in time. the reason that I wanted to have each rect() contained in an object was that I was very heavily inspirered by a lecture held by Rune Søchting, whom is and artist and curator from the danish royal art academie in Copenhagen, concerned with sound as a relational phenomenon. In the lecture Rune explained a philosophical concept by Maurice Merleau-Ponty who is famously focuses on existentialism through the notion of perception. In the lecture Pontys idea of perceiving was explained by drawing a distinction between the visible and the invisible. The visible, was determined as the cultivated perception concerned with sepperat objects which can be described as they are percieved, much like when we perform an object oriented programming, we also describe the attributes and then actions that it can make etc., however it still remains a sepperate objects that not dependend upon anything else, thus comes Pontys argument that nothing is objective, meaning that nobody can be certain that any given object exists. So if you see it as Ponty does, then there is no real visible objects, but we can look at it as an invisble object. invisible object, is determined as a wild form perception, rather than being concerned with what we can see, it is concerned with what we cannot see, therefor can an object be perceived as the relation between the object and what ever et touches. an example could be a table, so if we look at a table through a cultivated perception then we can describe the table as having four legs, being made of wood, the measurements are this width and this height and so forth. if we instead see it through the wild perception then we are concerned with the relation between the table and the ground it stands and, since the object no longer exists in this normal cultivated way it now only exists in a manner of force pressing downwards on the ground. The idea of this wild perception made me think about vectors and generative art, because that a vector is much like an object percived through wild perception a non-object but shows a relation between a start point and an end point, thus marking a certain direction. I also think that general art is not so much about seeing a confined object but about the relations between the objects that are displayed, and the code which conjours them. 
</br>
![alt text](https://github.com/L4COUR/Aesthetic_Programming_2018/blob/master/Mini_Ex6/Screen%20Shot%202018-03-20%20at%2001.08.40.png "AudioGEN.js")
</br>
Before pressing [RawGit](https://cdn.rawgit.com/L4COUR/Aesthetic_Programming_2018/f390cc2b/Mini_Ex5/Source/index.html) I would once again strongly advice to use a set of headphones for a better experience of the panned audio-signals.
</br>

**Object Orientation in digital Culture:**

I think that Object Oriented Programming (OOP) is a very powerful way of programming, in the sense that it makes it a lot easier to keep oversieht of all the different objects that are used in the code, and also manipulating them simultaniously through variables and so forth. However I also see it as a container, a way to keep your code organized, and while this is important, I also think that it is a part of a culture of programming thats more concerned with the notion of JIT and efficiancy which is exactly what p5.js is oposing. I find that the OOP way of programming is more difficult and a little less intuitive, but I think I will get the hang of it eventually. It is afterall a pretty big step from a classical paradigm to the object-oriented paradigm, changing a very fundamental way in how to code. This concept of modular programming can be hard to grasp at first, and really seeing the point in why you as an aestchetic programmer need to know about this particular way of programming. it is however a very usefull concept, and one that will make a lot of tediuos coding disapear, so you can spent the time programming something more interesting.   

**The Code:**

```javascript
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
```
**sources:**
- https://plato.stanford.edu/entries/merleau-ponty/

