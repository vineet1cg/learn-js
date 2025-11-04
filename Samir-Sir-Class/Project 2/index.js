// color guessing game
// guess from rgb values to colors
// easy
// difficult 
// two levels -> more harder the more buttons in options
// check our css
function changeColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColor = `RGB(${red}, ${green}, ${blue})`;
    document.querySelector('.color-display').textContent = rgbColor;
    // document.body.style.backgroundColor = rgbColor; to change color of body
};
//step -> 1 Get All The Needed Elements From The HTML
// to use from 
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
// will import alll the divs containing the class color-box
// console.log(colorBoxes) will print the array containing all the boxes
const newRoundBtn = document.querySelector('#newRoundBtr');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');


// step -> 2 variables For Score And Max Score 
var currentStreak = 0;
var bestStreak = 0;
// var correctColor = null;
var pickColor = 0;

// step -> loading process
// execute whenever loading website and resetting website 
function onLoad(){
    var temp = localStorage.getItem('highBestStreak'); // -- > here the localstorage contains the data so it will return the data not null.
    if(temp != null){
        bestStreak = parseInt(temp);
    } else{
        bestStreak = 0; // -- > if there is no data in localstorage so it wwill return null instead of number.
    }
}
// here we will define the display content message in a function format

function displayContent(){
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}



