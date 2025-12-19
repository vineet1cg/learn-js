const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');


//game config

const rows = 3;
const cols = 6;
const totalPairs = 9;
const initialTime = 60;

// state

let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeLeft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;

// checking for bestPair in loclal storage
function onLoad(){
    var temp = localStorage.getItem('bestPair');
    //  get the best score from the local storage if available
    //  if it is empty temp will have value null
    if(temp!=null){
        bestScore = parseInt(temp);
        // we check if the value is not null then set it as bestScore
    } else {
        bestScore = 0;
        // else we display it as 0
    }
};

function displayContent(){
    timeEl.textContent = timeLeft;
    bestScoreEl.textContent = bestScore;
    // display both the content on the html

}
onLoad(); 
displayContent();
//  we call both the functions to do what we intend


// 6*3 grid for the play area of the user and we also need to add eventListener
// we will do it below ;>

// create box

var num1 = [1,2,3,4,5,6,7,8,9];
function shuffle(num2){
    // console.log(num2);
    for(let i = num2.length-1 ; i>0 ; i--){
        var j = Math.floor(Math.random()*(i+1));

        [num2[i],num2[j]] = [num2[j],num2[i]];
        // to shuffle => we re assigned values ;>
    }
    return num2;
}
function createCard(value){
    const card = document.createElement('div');
    // created html element and we will add class and also append childs inside that div
    // it is an empty div
    card.classList.add('card');

    // for inner 
    const inner = document.createElement('div');
    inner.classList.add('inner');

    // for front inside of the inner
    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = '';

    // for back inside of the inner 
    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = value;
    // value is from the for each loop running and also in the arguement of the function

    inner.appendChild(front);
    inner.appendChild(back);
    
    card.appendChild(inner);
    // structure
    // card => inner -> {front,back};
    return card;
}
function displayValue(){
    
}
function createBoxGame(){
    const reshuffleNumber = shuffle([...num1,...num1]);
    console.log(reshuffleNumber);
    reshuffleNumber.forEach(value=>{
    const card = createCard(value);
    board.appendChild(card);
    card.addEventListener('click',()=>{
        displayValue(card);
    });
    
});

}


createBoxGame();


