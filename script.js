console.log("Hello World")

// Get the computer's choice 
function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <0.33) {
        return "Rock";
    } else if (randomNum < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice())

//Get the human's choice 
function getHumanChoice() {
    let humanChoice = prompt("Please input Rock, Paper, or Scissors");
    return humanChoice;
}

//Create the Score variables
let humanScore = 0, computerScore = 0;

