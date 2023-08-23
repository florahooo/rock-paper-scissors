function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    let index_number = Math.floor(Math.random() * choices.length);

    let computer_choice = choices[index_number];

    return computer_choice;
}

function playRound(playerSelection, computerSelection) {

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

game();