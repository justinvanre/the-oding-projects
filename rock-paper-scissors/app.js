const getRandomNum = range => Math.floor(Math.random() * range); 

function getUserChoice() {
    let choice = prompt('Pick either Rock Paper or Scissors');
    /*
        If the choice of the user is NOT either Rock Paper or Scissors
        rerun the function and ask for user input again.
    */
    if (!['Rock', 'Paper', 'Scissors'].includes(choice)) {
        alert('Please enter either rock paper or scissors');
        return getUserChoice();

    } else {
        return choice; 
        
    }
}

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

function playRound(playerSelection, computerSelection) {

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


function game(rounds) {
    let scoreCardUser = 0; 
    let scoreCardComputer = 0; 

    let userChoice;
    let winnerOfRound; 

    for (let i = 0; i < rounds; i++) 
    {
        userChoice = getUserChoice(); 

        winnerOfRound = playRound(userChoice, getComputerChoice(getRandomNum(3)));

        if (winnerOfRound.includes('tie')) {
            console.log(winnerOfRound);
            continue; 

        } else if (winnerOfRound.includes('You win!')) {
            console.log(winnerOfRound)
            scoreCardUser++;

        } else {
            console.log(winnerOfRound);
            scoreCardComputer++;

        }
    }

    if (scoreCardUser === scoreCardComputer) {
        return 'The game is a tie.'; 
    } else {
        return scoreCardUser > scoreCardComputer ? 'You win the game' : 'You lost the game'
    }
}

