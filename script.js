function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    let index_number = Math.floor(Math.random() * 4);

    let computer_choice = choices[index_number];

    console.log(computer_choice);
    return computer_choice;
}

function playRound(playerSelection, computerSelection) {

}

function game(){

}

getComputerChoice();