const getRandomNum = range => Math.floor(Math.random() * range); 

function getComputerChoice(choice) {
    switch (choice) {
        case 0: 
            return 'Rock'; 
        case 1: 
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            console.log('this is not an option');
            break;
    }
}

function playRound() {

    if (playerSelection === computerSelection) {
        return 'The game is a tie.';

    } else if ( (playerSelection === 'Rock') && (computerSelection === 'Scissors') ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;

    } else if ( (playerSelection === 'Paper') && (computerSelection === 'Rock') ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;

    } else if ( (playerSelection === 'Scissors') && (computerSelection === 'Paper') ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;

    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

const playerSelection = 'Rock'; 

const computerSelection = getComputerChoice(getRandomNum(3));

console.log(playRound(playerSelection, computerSelection));