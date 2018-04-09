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


