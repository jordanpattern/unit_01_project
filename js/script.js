/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = [
  {quote: "There are a few things that are mine. I see this now. Like today, sitting in this diner. This time is mine. These thoughts are mine. Memories are mine. I don’t own much. It’s nice to know that there are some things that no one will be able to take from me.", 
source: 'Henry Rollins',
citation: 'Rollins, Henry. Get in the Van. Los Angeles, CA, 2.13.61 Publishing, 1994.',
year: 1994,
category: 'Punk rock silver fox' },
{quote: "Every lyric I ever wrote, I stand behind. There’s nothing ironic about it. I can remember deliberately not putting Ronald Reagan’s name in any song because I didn’t want it to be dated. I was singing about being a kid, and I thought that was universal. Because it was really about the transition from being a child in your nuclear family or your biological family to your new family, which is tribal quite often, through punk or whatever form. When I was writing those songs, I was thinking for real from my heart about those experiences, and I was thinking, ‘This is not specific to 1981 or 1980. This is something that people go through.’ I didn’t want to ruin it by talking about something that was nailed down to those particular years.",
source: 'Ian MacKaye',
citation: 'Zorzi, M. (2019, March 14). Ian MacKaye on the Future of Minor Threat, Dischord, and His New Band. Retrieved from https://newnoisemagazine.com/ian-mackaye-on-the-future-of-minor-threat-dischord-and-his-new-band/ ',
year: 2019,
location: 'Washington, DC'
},
{quote: "Yet you could feel a vibration in the air, a sense of hastening. It had started with the moon, inaccessible poem that it was. Now men had walked upon it, rubber treads on a pearl of the gods. Perhaps it was an awareness of time passing, the last summer of the decade. Sometimes I just wanted to raise my hands and stop. But stop what? Maybe just growing up.",
source: 'Patti Smith',
citation: 'Smith, Patti. Just Kids. New York, NY, Harper Collins Publishers, 2010.',
year: 2010,
category: 'People I want to be when I grow up'
},
{quote: "When we play the song live, a lot of people who do not like how things are going are all in the same room, dancing and celebrating — just having that moment of possibility in such a bad time period. It's really important to celebrate how quickly things can change.",
source: 'Kathleen Hanna',
citation: 'Powers, A. (2019, August 12) Morning Edition (Radio program). Washington D.C.: National Public Radio',
year: 2019,
location: 'Washington, DC',
},
{quote: "At the end of the day, women are expected to hold up the world, not annihilate it.",
source: 'Kim Gordon',
citation: 'Gordon, Kim, Girl in A Band.  New York, NY, Dey Street Books, 2015.',
year: 2015,
category: 'Truth'
},
{quote: "A band asked me to go on tour when I was 22 and asked me to play drums, and I taught myself so I could go on this trip with these people. The drums found me; I didn't find them. When I started playing, I realized how appropriate an instrument it was for me.",
source: 'Janet Weiss',
location: 'Portland, OR',
category: 'Greatest drummers of our generation'
},
{quote: "I remember being really young—being 13 or 14—when I first was really excited about punk rock as an idea, and I was like, ‘Don’t ever not be punk. Don’t ever not be punk.’ Telling that to myself, I guess it was like self-defense against the scary world around me. Those initial feelings that really called to me have never gone away.",
source: 'Laura Jane Grace',
citation: 'Manno, L. (2018, November 14). Laura Jane Grace Cuts Through the Noise with Joy and Sarcasm. Retrieved from https://www.pastemagazine.com/articles/2018/11/laura-jane-grace-cuts-through-the-noise-with-joy-a.html.',
year: 2018,
location: 'Austin, TX'
}
]

//This array of objects stores my quotes, along with their respective sources, citations, and years. I randomly left out some citations or years in order to demonstrate the conditional statement printing those properties only when they are present. 

function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));
 return quotes[randomNumber];
};

/// The function above first stores a random number between 0 and 6, corresponding with the index value of the seven quotes stored in the array above. It then returns the quote whose index value in the array corresponds with the random number generated previously in the function. 

function printQuote() {
  let printedQuote = getRandomQuote(quotes);
let HTML = '';
HTML += '<p class="quote">' + printedQuote.quote + '</p>' +
'<p class="source">' + printedQuote.source + ' ';
if (printedQuote.citation !== undefined) {
  HTML += '<span class="citation">' + printedQuote.citation + '</span>'
} 
if (printedQuote.year !== undefined) {
 HTML += '<span class="year">' + printedQuote.year +  ', </span>'
} 
if (printedQuote.location !== undefined) {
  HTML += '<span class="location">' + printedQuote.location + ', <span>'
} 
if (printedQuote.category !== undefined) {
  HTML += '<span class="category">' + printedQuote.category + ', <span>'
} 
  HTML += '</p>';
  document.getElementById('quote-box').innerHTML = HTML;
  
}
///The printQuote function first stores the quote selected by the getRandomQuote function in a new variable (printedQuote) and then stores concatenated quote properties and HTML tags in a new variable called HTML. There are two conditional statements that test whether citation and year properties exist for the selected quote, and if so, add them to the HTML string. Finally, it inserts the selected quote into the DOM, so the selected quote is displayed and formatted according to the attache HTML and CSS files. 

function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let rbgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  document.body.style.background = rbgColor;
  };

  ///The randomColor function generates a random color by generating three random numbers and adding them together. It then inserts the random color into the CSS. 

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", randomColor, false);

///This event listener was provided (thanks!). I added the second event listener to change the background color when the button is clicked by calling the randomColor function.

setInterval(function () 
{document.getElementById('loadQuote').click();}, 20000);

///The setInterval function automatically "clicks" the load new quote button every 20 seconds, triggering a new quote and background color to load. 

