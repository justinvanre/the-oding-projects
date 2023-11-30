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


const btnChoices = document.querySelectorAll('button'); 

btnChoices.forEach(button => {
    button.addEventListener('click', () => {

        const scoreBoard = document.querySelector('.result');

        scoreBoard.textContent = playRound(button.value, getComputerChoice(getRandomNum(3)));
    });
})
