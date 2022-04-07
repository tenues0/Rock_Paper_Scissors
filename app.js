const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
// const varibles cannot be reassigned.

const possibleChoices = document.querySelectorAll("button");

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult() ;
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);  // or can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    } else if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")
    ) {
        result = "You win!";
    } else {
        result = "You lost!";
    }
    resultDisplay.innerHTML = result;
}