function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    // return a random choice
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let result;

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
}

let playerScore, computerScore;

initGame();
