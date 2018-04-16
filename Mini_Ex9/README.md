# Mini_Ex9:

**Objective:**
Acquiring the skill of decomposing a computer program into definable parts, and organize this decomposition using a flowchart. further more to understand a flowchart as a means for communication and planning, and being able to comprehend the concept of algorithms from the perspectives of both computer science and cultural understanding. 

### Obfuscated_FB_Non-human.js as a flowchart
**De-composition of my Mini_Ex4:**

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex9/Mini_ex09%20(3).png "mini_ex9_flowchart")
</br>
[Obfuscated_FB_Non-human.js](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/tree/master/Mini_Ex4).

This Mini_Ex is very different in comparison to the previous ones I have made, in the sense that it focuses more upon the understanding and de-composition of pre-existing code. I have chosen to decompose my Mini_Ex4 which is probably the most complicated p5.js program I have coded so far, and I thought that this would be a nice oppertunity to make it more clear what the rather complex code does exactly. I have drawed the flowchart above in a way which sort of creates 4 segments which are all interconnected with each other. So the first segment is where the program is initiated and the global varibles are being defined. the webcam is also being initiated here so that the video-feed can then later be tampered with. the second segment consists of the serial data from an arduino circuit with a light-dependent resistor which is channeled into the p5.js program via a ```p5.SerialPort()```, in order to be used as the variable ```inData```. this segment is mostly made up of a lot of console.log messages which is good to have when parsing this kind of data through, because it otherwise would be almost impossible to locate a potential error in this parsing. The third segment is where the initiation of the manipulated webcam feed is coded, along with a p5.dom button which is styled so it looks as close to a facebook "log in" button as possible. The important part here is the part which is contained in the code under the ```start()``` function. So if you press the button it will then trigger this function which will change the varible started from being false to being true. When ```started = true;```then two processes will be initiated, the first when will create a paragraph element containing the sentence "Human to non-human data transfer complete." The next process that is initiated is contained in the fourth and last segment of the flowchart. This part of the code is also placed under the ```draw()```function. This is the segment in which the webcam feed is manipulated into a mesh of pixels made up by rectangular shapes that are being distorted from the serial data. The complex part of this last segment is the nested for-loop which uses the height and width of the captured webcam feed in order to first create the colums of squares on the Y-axis and then from each of those colums add rows of rectangles along the x-axis, thus resulting in a mesh of rectangles covering the whole screen acting as distorted pixels repressenting the webcam overlaying the facebook log in page, as is illustrated in the .gif below.

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex4/La-Cour---Obfuscated_FB_Non-human.gif "mini_ex9_flowchart")

### Group work: final project
**An Idea for a potentially interesting game:**

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex9/Flowchart_of_PacMan.jpg "mini_ex9_flowchart")

**An Idea for a controversial use of Mugshot API's in a Fakebook context:**

![alt text](https://github.com/L4COUR/Aesthetic_Programming_Mini_Ex-s/blob/master/Mini_Ex9/Flowchart_of_Chicago_Police.jpg
 "mini_ex9_flowchart")

