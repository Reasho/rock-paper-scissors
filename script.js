console.log("Hello World")

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