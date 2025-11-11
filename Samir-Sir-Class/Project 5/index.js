// writing backend for a typing speed game 
// DOM ELEMENTS NEEDED 

const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// text content to show on the html

const testTexts = [
    "The quick brown fox jumps over the lazy dog as the bright sun shines. We must all try our best to get better at typing every day",
    "Learning to type correctly using all ten fingers is the most effective way to increase your speed and accuracy over a period of time.",
    "Scientists have discovered thousands of exoplanets in recent years, working to understand their properties and potential to support life in space.",
    "A bird in the hand is worth two in the bush, so always remember to be grateful for the good things you already have.",
    "Max Joykner sneakily drove his car around every corner looking for his lost dog. He was very sad and hoped to find him soon",
    "The drops of water are too small to see. They have turned into a gas called water vapor. The air gets cooler as it rises higher.",
    "Practice makes perfect in typing. The more you work on your skills, the faster you will become. Consistency and patience are very important here."
];


//variables


let currentText = '';
let timeLeft = 60;
let timeInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

function webLoad(){
    onLoad();
    displayContent();
}
function onLoad(){
    var temp = sessionStorage.getItem('previouswpm');
    if(temp!=null){
        bestWPM = parseInt(temp);
    } else {
        bestWPM = 0;
    }
}
function displayContent(){
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}
webLoad();
function endGame(){
    clearInterval(timeInterval);
    startBtn.disabled = false;
    timeLeft = 60;
    displayContent();
}

function startGame(){
    timeLeft = 60;
    startBtn.disabled = true;
    currentText = testTexts[Math.floor(Math.random()*testTexts.length)];
    textDisplay.textContent = currentText; // reflects it in html elemetn
    // update time content every second  - > by default 60 , decrement 1 by every second => setInterval -> returns id
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder','Now You Are Able To Type Here');

    timeInterval = setInterval(function(){
        timeLeft--;
        if(timeLeft<=0){
            endGame();
        }
        displayContent();
    },1000);

}
function updateStatus(){
    var textContent = typingArea.value;
    const word = textContent.trim().split(/\s+/).filter(w => w.length > 0);
    // console.log(word);
    const elapsedTime = (Date.now() - startTime)/1000/60;
    // for wpm we need it to be in minutes
    const wpm = elapsedTime > 0 ? Math.floor(word.length/elapsedTime) : 0;
    wpmDisplay.textContent = wpm;
    // check the ternary operation and also how we converted with elapsed time 
    
}
function wordType(){
    if(startTime == null){
        startTime = Date.now();
    }
    updateStatus();
}
startBtn.addEventListener('click',startGame);
typingArea.addEventListener('input',wordType);