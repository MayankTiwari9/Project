const score = document.getElementById('score');
const timeLeft = document.getElementById('time-left');
const squares = document.querySelectorAll('.square');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const grid = document.getElementById('grid');

let moleInterval;
let scoreCounter = 0;
let gameTimer;
let gameTimeCount = 15;
let gameStarted = false;
const showMole = `<img src="mole.png" id="mole-img">`;

const rendomizeMole = ()=>{
    let mole = document.querySelector('.mole');
    mole.classList.remove('mole');
    mole.innerHTML = '';
    let rendomSquare = squares[Math.floor(Math.random()*squares.length)]
    rendomSquare.classList.add('mole');
    rendomSquare.innerHTML = showMole;
}

const startGame =()=>{
    if(!gameStarted){
        gameStarted = true;
        scoreCounter = 0;
        moleInterval = setInterval(_=>{
            rendomizeMole();
        },1000);
        gameTimer = setInterval(_=>{
            gameTimeCount--;
            timeLeft.innerHTML = gameTimeCount + "S";
            checkGameTimer();
        },1000)
    }
}

const checkGameTimer=()=>{
    if(gameTimeCount===0){
        clearInterval(gameTimer);
        clearInterval(moleInterval);
        gameStarted = false;
        gameTimeCount = 15;
    }
}
 
const countScore=()=>{
    if(gameStarted){
        scoreCounter++;
        score.innerHTML = scoreCounter;
    }
}

const resetGame=()=>{
    clearInterval(moleInterval);
    clearInterval(gameTimer);
    scoreCounter = 0;
    gameTimeCount = 15;
    timeLeft.innerHTML = gameTimeCount + "S";
    score.innerHTML = scoreCounter;
    gameStarted = false;
}

start.addEventListener('click', startGame);
grid.addEventListener('click',(e)=>{
    if(e.target.parentElement.classList.contains('mole'))
    countScore();
})
reset.addEventListener('click',resetGame);