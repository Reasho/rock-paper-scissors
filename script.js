

// Get the computer's choice 
function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice())

//Get the human's choice 
function getHumanChoice() {
    let humanChoice = prompt("Please input Rock, Paper, or Scissors")
    const input = humanChoice.toLocaleLowerCase();
    return input;
}
console.log(getHumanChoice())

//Create the Score variables
let humanScore = 0, computerScore = 0;
let round = 5;

//Play a single round
function playRound (humanChoice, computerChoice) {
    
    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win!")
        humanScore++
        return
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose!")
        computerScore++
        return
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win!")
        humanScore++
        return
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose!")
        computerScore++
        return
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose!")
        computerScore++
        return
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win!")
        humanScore++
        return
    } else if (humanChoice == computerChoice){
        console.log("It is a draw!")
        return;
    } 
}

//Play the game for five rounds
function playGame(){
    while (round > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        round--;
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore, "Your Score");
    console.log(computerScore, "Computer\'s Score");
}

playGame()