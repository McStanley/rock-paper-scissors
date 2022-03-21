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
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case 'Lose':
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case 'Draw':
            return `It's a ${playerSelection} draw!`;
    }
}

function initGame() {
    playerScore = 0;
    computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', playRound);
    });
}

const buttons = document.querySelectorAll('.btn');

let playerScore, computerScore;

initGame();
