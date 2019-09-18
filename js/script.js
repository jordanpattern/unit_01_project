/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {quote: "There are a few things that are mine. I see this now. Like today, sitting in this diner. This time is mine. These thoughts are mine. Memories are mine. I don’t own much. It’s nice to know that there are some things that no one will be able to take from me.", 
source: 'Henry Rollins',
citation: 'Rollins, Henry. Get in the Van. Los Angeles, CA, 2.13.61 Publishing, 1994.',
year: 1994 },
{quote: "Every lyric I ever wrote, I stand behind. There’s nothing ironic about it. I can remember deliberately not putting Ronald Reagan’s name in any song because I didn’t want it to be dated. I was singing about being a kid, and I thought that was universal. Because it was really about the transition from being a child in your nuclear family or your biological family to your new family, which is tribal quite often, through punk or whatever form. When I was writing those songs, I was thinking for real from my heart about those experiences, and I was thinking, ‘This is not specific to 1981 or 1980. This is something that people go through.’ I didn’t want to ruin it by talking about something that was nailed down to those particular years.",
source: 'Ian MacKaye',
citation: 'Zorzi, M. (2019, March 14). Ian MacKaye on the Future of Minor Threat, Dischord, and His New Band. Retrieved from https://newnoisemagazine.com/ian-mackaye-on-the-future-of-minor-threat-dischord-and-his-new-band/ ',
year: 2019
},
{quote: "Yet you could feel a vibration in the air, a sense of hastening. It had started with the moon, inaccessible poem that it was. Now men had walked upon it, rubber treads on a pearl of the gods. Perhaps it was an awareness of time passing, the last summer of the decade. Sometimes I just wanted to raise my hands and stop. But stop what? Maybe just growing up.",
source: 'Patti Smith',
citation: 'Smith, Patti. Just Kids. New York, NY, Harper Collins Publishers, 2010.',
year: 2010
},
{quote: "When we play the song live, a lot of people who do not like how things are going are all in the same room, dancing and celebrating — just having that moment of possibility in such a bad time period. It's really important to celebrate how quickly things can change.",
source: 'Kathleen Hanna',
citation: 'Powers, A. (2019, August 12) Morning Edition (Radio program). Washington D.C.: National Public Radio',
year: 2019
},
{quote: "At the end of the day, women are expected to hold up the world, not annihilate it.",
source: 'Kim Gordon',
citation: 'Gordon, Kim, Girl in A Band.  New York, NY, Dey Street Books, 2015.',
year: 2015
},
{quote: "A band asked me to go on tour when I was 22 and asked me to play drums, and I taught myself so I could go on this trip with these people. The drums found me; I didn't find them. When I started playing, I realized how appropriate an instrument it was for me.",
source: 'Janet Weiss',
citation: 'Murphy, T. (2010, March 16). Q&A With Janet Weiss of Quasi. Retrieved from https://www.westword.com/music/qanda-with-janet-weiss-of-quasi-5693790.'
},
{quote: "I remember being really young—being 13 or 14—when I first was really excited about punk rock as an idea, and I was like, ‘Don’t ever not be punk. Don’t ever not be punk.’ Telling that to myself, I guess it was like self-defense against the scary world around me. Those initial feelings that really called to me have never gone away.",
source: 'Laura Jane Grace',
citation: 'Manno, L. (2018, November 14). Laura Jane Grace Cuts Through the Noise with Joy and Sarcasm. Retrieved from https://www.pastemagazine.com/articles/2018/11/laura-jane-grace-cuts-through-the-noise-with-joy-a.html.',
year: 2018
}
]
//This array of objects stores my quotes, along with their respective sources, citations, and years. 

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(quotes.length) {
 let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));
 return quotes[randomNumber];
 function printQuote(){
let printedQuote = getRandomQuote;
let HTML = '';
HTML += '<p>' + quotes[randomNumber].quote + '</p>' + '<p>' + quotes[randomNumber.source] + '<p>';
if (quotes[randomNumber].citation = true){
  HTML += quotes[randomNumber].citation;
};
if (quotes[randomNumber].year = true){
  HTML += quotes[randomNumber].year;
};
 }
};

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.