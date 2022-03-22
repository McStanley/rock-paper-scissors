function playerPlay(buttonID) {
    switch (buttonID) {
        case 'button-rock':
            return 'Rock';
        case 'button-paper':
            return 'Paper';
        case 'button-scissors':
            return 'Scissors';
    }
}

function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    // return a random choice
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    let result;
    const playerSelection = playerPlay(event.target.id);
    const computerSelection = computerPlay();

    if (playerSelection==='Rock') {
        if (computerSelection==='Rock') result = 'Draw';
        if (computerSelection==='Paper') result = 'Lose';
        if (computerSelection==='Scissors') result = 'Win';
    }
    if (playerSelection==='Paper') {
        if (computerSelection==='Rock') result = 'Win';
        if (computerSelection==='Paper') result = 'Draw';
        if (computerSelection==='Scissors') result = 'Lose';
    }
    if (playerSelection==='Scissors') {
        if (computerSelection==='Rock') result = 'Lose';
        if (computerSelection==='Paper') result = 'Win';
        if (computerSelection==='Scissors') result = 'Draw';
    }
    
    switch (result) {
        case 'Win':
            playerScore++;
            resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 'Lose':
            computerScore++;
            resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case 'Draw':
            resultText.textContent = `It's a ${playerSelection} draw!`;
            break;

    }

    scorePlayer.textContent = `You: ${playerScore}`;
    scoreComputer.textContent = `CPU: ${computerScore}`;
}

function initGame() {
    playerScore = 0;
    computerScore = 0;

    scorePlayer.textContent = `You: ${playerScore}`;
    scoreComputer.textContent = `CPU: ${computerScore}`;
    resultText.textContent = '';

    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    });
}

const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');
const buttons = document.querySelectorAll('.btn');
const resultText = document.querySelector('#result-text');

let playerScore, computerScore;

initGame();
