// color guessing game
// guess from rgb values to colors
// easy
// difficult
// two levels -> more harder the more buttons in options
// check our css

//step -> 1 Get All The Needed Elements From The HTML
// to use from
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const currentStreakDisplay = document.querySelector("#currentStreak");
const bestStreakDisplay = document.querySelector("#bestStreak");

const colorBoxes = document.querySelectorAll(".color-box");
// will import alll the divs containing the class color-box
// console.log(colorBoxes) will print the array containing all the boxes
const newRoundBtn = document.querySelector("#newRoundBtr");

const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const resetStreakBtn = document.querySelector("#resetStreakBtn");
const btnTrack = document.querySelector(".color-box-container");

// step -> 2 variables For Score And Max Score
var currentStreak = 0; // user track
var bestStreak = 0; // previous data fetch
var color = []; // empty array for colors
var num = 6; // how many colors to show depneding on game difficulty
var pickCorrectColor = 0; // picks correct color for the answer(

// step -> loading process
function webLoad() {
  onLoad();
  displayContent();
  setGame();
}
// execute whenever loading website and resetting website
function onLoad() {
  var temp = localStorage.getItem("highBestStreak"); // -- > here the localstorage contains the data so it will return the data not null.
  if (temp != null) {
    bestStreak = parseInt(temp);
  } else {
    bestStreak = 0; // -- > if there is no data in localstorage so it wwill return null instead of number.
  }
}
// here we will define the display content message in a function format

function displayContent() {
  currentStreakDisplay.textContent = currentStreak;
  bestStreakDisplay.textContent = bestStreak;
}
function changeColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return (rgbColor = `rgb(${red}, ${green}, ${blue})`);
  // document.body.style.backgroundColor = rgbColor; to change color of body
}

function genrateColor(num) {
  const arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(changeColor()); // push random color to an array
  }
  return arr; // we must return to store the array in color array
}
function pickGenrator() {
  const math = Math.floor(Math.random() * color.length);
  return color[math];
}
function setGame() {
  color = genrateColor(num); // color => empty array -> to store the total 6 rgb colors >> ek esa function jis jab call kare tab actual kaam karna
  pickCorrectColor = pickGenrator(); // to genrate a correct color randomly from color array and show with the next step
  colorDisplay.textContent = pickCorrectColor; // display the correct color on the screen
  for (var j = 0; j < color.length; j++) {
    colorBoxes[j].style.backgroundColor = color[j]; // for coloring the boxes from color array
    // color boxes has the array imported from html which will contain all the 6 boxes from html
    // and by using this loop we color those boxes
  }
}

webLoad();
// fetch the parent and adding event listener by using for each method
/// fetched parent on code line : 23
// for each button we need to color the boxes and then also genrate a random rgb

function trackBtn(event) {
    // event.style.border = "10px solid gold";
  var element = event.target;
  if (!element.classList.contains("color-box")) return; // Only trigger if a color box
  var rgb = element.style.backgroundColor;

  if (pickCorrectColor === rgb) {
    messageDisplay.textContent = "You Win Bro!";
    currentStreak++;
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
      localStorage.setItem("bestStreak", bestStreak); // Save best streak persistently
    }
    displayContent();
    setGame();
  } else {
    messageDisplay.textContent = "Try Again Bruh";
    currentStreak = 0;
    displayContent(); 
  }
}

btnTrack.addEventListener("click", trackBtn);
// we must not call the function here so we can track all the 6
