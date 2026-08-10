//write a function that returns one of the "rock", "paper", "scissors" strings randomly
// use math.random to generate a number between 1 to 12
//    IF number is from 1 to 4 return => rock
//    IF number is from 5 to 8 return => paper
//    IF number is from 9 to 12 return => scissors 
//write a function to get the human choice
//  USE prompt and store it in a variable
//write playRound function such that it gets the two parameter's from previous funcs, plays the game and shows the winner with a string value
// for buttons, HTMl is better
// I want to work with JS so im creating and editing them here

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const main = document.querySelector("#main");
const buttons = [btn1,btn2,btn3];
let option1 = "rock";
let option2 = "paper";
let option3 = "scissors";
let humanScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.classList.add("button")
})
btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";
main.appendChild(btn1);
main.appendChild(btn2);
main.appendChild(btn3);


function getComputerChoice() {
    let number = (Math.floor(Math.random() * 10) + 3);
    if (number == 1 || number == 2 || number == 3 || number == 4) { return option1 }
    else if (number == 5 || number == 6 || number == 7 || number == 8) { return option2 }
    else if (number == 9 || number == 10 || number == 11 || number == 12) { return option3 }
}

function getHumanChoice() {
    let choice = prompt("ROCK? PAPER? SCISSORS?");
    choice = choice.toLowerCase();
    if (choice == "rock") { return option1 }
    else if (choice == "paper") { return option2 }
    else if (choice == "scissors") { return option3 }
}

function playRound(humanChoice, computerChoice) {
    console.log("Human choice: ", humanChoice);
    console.log("Computer choice: ", computerChoice);

    if (humanChoice == computerChoice) { return "Draw! " }
    else if (humanChoice == option1 && computerChoice == option2) {
        computerScore = computerScore + 1;
        return "Computer Won! Paper Beats Rock";
    } else if (humanChoice == option2 && computerChoice == option1) {
        humanScore = humanScore + 1;
        return "Human Won! Paper Beats Rock";
    } else if (humanChoice == option1 && computerChoice == option3) {
        humanScore = humanScore + 1;
        return "Human Won! Rock Beats Scissors";
    } else if (humanChoice == option3 && computerChoice == option1) {
        computerScore = computerScore + 1;
        return "Computer Won! Rock Beats Scissors";
    } else if (humanChoice == option2 && computerChoice == option3) {
        computerScore = computerScore + 1;
        return "Computer Won! Scissor Beats Paper";
    } else if (humanChoice == option3 && computerChoice == option2) {
        humanScore = humanScore + 1;
        return "Human Won! Scissor Beats Paper";
    }
}

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         const hc = getHumanChoice();
//         const cc = getComputerChoice();
//         console.log("\n Round ", i);
//         console.log(playRound(hc, cc));
//     }
//     getWinner(humanScore, computerScore);
// }
function getWinner(humanScore, computerScore) {
    console.log("Human Score: " + humanScore + " | " + "Computer Score: " + computerScore);
    if (humanScore > computerScore) { console.log("Human Won The Game, Score:  " + humanScore) }
    else if (computerScore > humanScore) { console.log("Computer Won The Game, Score: " + computerScore) }
    else { console.log("Game Is A Draw!") }
}
// playGame();


