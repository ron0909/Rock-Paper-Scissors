const buttons = document.querySelectorAll('.buttons');
const playAgainButton = document.querySelector('.play-again');

const playButton = document.querySelector('.play');
const playerCurrentScore = document.querySelector('#player-score');
const computerCurrentScore = document.querySelector('#computer-score');
const whoWon = document.querySelector('#who-won');
const output = document.querySelector('.output');

let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

function randomNumber() {
    return Math.floor(Math.random() * 3)
}


function playGame() {
    playButton.classList.add('invi');
    // buttonsDisabled(false);
    playerCurrentScore.textContent = playerScore;
    computerCurrentScore.textContent = computerScore;
    buttons.forEach(button => button.addEventListener('click', playRound))
    
    
}

function playRound() {
    console.log(this);
    const image = this.querySelector('img');
    playerChoice = image.alt.toLowerCase();
    computerChoice = choices[randomNumber()];

    roundWinner();

    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
};

function restartGame() {
    buttons.forEach(button => button.classList.toggle('disabled'));
    buttonsDisabled(false);
    playAgainButton.classList.toggle('invi'); // 3 5 
    playerScore = 0;
    computerScore = 0;
    output.textContent = '';
    whoWon.textContent = '';
    playGame();
}

function buttonsDisabled(bool) {
    buttons.forEach(button => button.disabled = bool);
}


function roundWinner() {
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        playerCurrentScore.textContent = playerScore;
        whoWon.textContent = 'You WON!'
        console.log(`Player score: ${playerScore} vs Computer score: ${computerScore}`);
    } else if((playerChoice === 'scissors' && computerChoice === 'rock') ||
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors')){
        computerScore++;
        computerCurrentScore.textContent = computerScore;
        whoWon.textContent = 'You LOSE!'
        console.log(`Player score: ${playerScore} vs Computer score: ${computerScore}`);
    } else {
        whoWon.textContent = "It's a TIE!"
    }
}

function declareWinner() {
    if (playerScore > computerScore) {
        output.textContent = "You're the first to score five, YOU WON!";
    } else {
        output.textContent = "Computer scored five, YOU LOSE!";

    }
    buttons.forEach(button => button.classList.toggle('disabled'));
    buttonsDisabled(true);
    playAgainButton.classList.toggle('invi'); // 2 4
    playAgainButton.addEventListener('click', restartGame)
}


playButton.addEventListener('click', playGame); // 1. Add eventlistener for the PLAY button









