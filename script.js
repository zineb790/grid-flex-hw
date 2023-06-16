let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener
  // Accessing DOM Elements (Querying)
  // Part 1
  let header = document.querySelector("#main-title");
  header.textContent = "DOM Toretto"

  // Part 2
  document.body.style.backgroundColor = "pink";

  // Part 3
  let favoriteList= document.querySelector("#favorite-things");
  let lastItem = favoriteList.lastElementChild;
favoriteList.removeChild(lastItem);

  // Part 4
let specialTitles = document.querySelectorAll(".special-title");
  for (i = 0; i< specialTitles.length; i++){
  specialTitles[i].style.fontSize = "2rem";
  };


  // Part 5
  
  let racePlaces = document.querySelector("#past-races");
  let notRacePlace = racePlaces.querySelector("li:nth-child(4)");
  racePlaces.removeChild(notRacePlace);
// Creating New DOM Elements

  // Part 6
  let newRacePlace = document.createElement("li");
  newRacePlace.textContent = "Casablanca";
  racePlaces.appendChild(newRacePlace);


  // Part 7
  let myDiv = document.createElement("div");
  myDiv.setAttribute("class", "blog-post");

  let myHeading = document.createElement("h1");
  myHeading.textContent = "Casa";
  let myParagraph = document.createElement("p");
  myParagraph.textContent = "here where i raced first you all!";
  myDiv.appendChild(myHeading);
  myDiv.appendChild(myParagraph);
  console.log(myDiv);
  let mySection = document.querySelector(".main");
  mySection.appendChild(myDiv)


  

  // Part 8
  const quoteTitle =
    document.querySelector('#quote-title');
  quoteTitle.addEventListener("click", randomQuote)
  
  // Part 9
  //was challenging 
const speedRacerDiary = document.querySelectorAll(".blog-post");
  speedRacerDiary.forEach(function (post) {
    post.addEventListener("mouseenter", function () {
      post.classList.toggle("red");
    });
    post.addEventListener("mouseout", function () {
      post.classList.toggle("purple");
    });
  });
});

