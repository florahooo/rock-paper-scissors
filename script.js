function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    let index_number = Math.floor(Math.random() * 4);

    let computer_choice = choices[index_number];

    console.log(computer_choice);
    return computer_choice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection.toLowerCase();

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "Paper destroys rock, you win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors destroys paper, you win!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Rock destroys scissors, you win!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Paper destroys rock, you lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Scissors destroys paper, you lose!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Rock destroys scissors, you lose!";
    }

}

function game(){

}

getComputerChoice();