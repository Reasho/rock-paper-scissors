//Create the Score variables
let humanScore = 0, computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");

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

//Play a round
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        results.textContent = `It's a draw! You both chose ${humanChoice}`
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    results.textContent += `\nScore: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5) {
        results.textContent = "You win the game!";
    } else if (computerScore === 5){
        results.textContent = "You lose the game!";
    }
};

//Get Human Choice
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    });
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    });
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    });