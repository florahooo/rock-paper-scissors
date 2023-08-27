function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    let index_number = Math.floor(Math.random() * choices.length);

    let computer_choice = choices[index_number];

    return computer_choice;
}

/*function playRound(playerSelection, computerSelection) {

    let player_Selection = playerSelection.toLowerCase();

    if (player_Selection == "paper" && computerSelection == "rock") {
        return "Paper destroys rock, you win!";
    }
    else if (player_Selection == "scissors" && computerSelection == "paper") {
        return "Scissors destroys paper, you win!";
    }
    else if (player_Selection == "rock" && computerSelection == "scissors") {
        return "Rock destroys scissors, you win!";
    }
    else if (player_Selection == "rock" && computerSelection == "paper") {
        return "Paper destroys rock, you lose!";
    }
    else if (player_Selection == "paper" && computerSelection == "scissors") {
        return "Scissors destroys paper, you lose!";
    }
    else if (player_Selection == "scissors" && computerSelection == "rock") {
        return "Rock destroys scissors, you lose!";
    }

}

    function game(){

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Please pick your choice (rock, paper, scissors): ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }


}

game(); */

const container = document.querySelector('.container');

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

const statement = document.createElement('h3');
statement.classList.add('statement');

container.appendChild(statement);


rockButton.addEventListener("click", playRock);

function playRock() {

    const computerSelection = getComputerChoice();

    if (computerSelection == "scissors") {
        statement.textContent = 'Rock destroys scissors, you win!';
    }
    else if (computerSelection == "paper") {
        statement.textContent = "Paper destroys rock, you lose!";
    }
    else if (computerSelection == "rock") {
        statement.textContent = "You Tie!";
    }
    
}

