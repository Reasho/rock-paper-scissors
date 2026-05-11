

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

//Get the human's choice 
function getHumanChoice() {
    let humanChoice = prompt("Please input Rock, Paper, or Scissors")
    const input = humanChoice.toLocaleLowerCase();
    return input;
}

//Create the Score variables
let humanScore = 0, computerScore = 0;

//Play a single round
function playRound (humanChoice, computerChoice) {
    
    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("You Win!")
        humanScore++
        return
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("You Lose!")
        computerScore++
        return
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("You Win!")
        humanScore++
        return
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("You Lose!")
        computerScore++
        return
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("You Lose!")
        computerScore++
        return
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("You Win!")
        humanScore++
        return
    } else {
        console.log(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("It is a draw!")
        return;
    } 
}

//Play the game for five rounds
function playGame(){
    for (let i = 1; i < 6; i++) {
        alert(`Round ${i} Begins`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore, "Your Score");
    console.log(computerScore, "Computer\'s Score");

    if (humanScore > computerScore){
        console.log("You win the game!");
    } else if (computerScore > humanScore){
        console.log("You lose the game!")
    }
}

playGame()