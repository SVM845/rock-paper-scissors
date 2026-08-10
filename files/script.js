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
const buttons = [btn1, btn2, btn3];
const buttonContainer = document.createElement("div");
const resultContainer = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

let option1 = "rock";
let option2 = "paper";
let option3 = "scissors";
let humanScore = 0;
let computerScore = 0;
buttonContainer.appendChild(btn1);
buttonContainer.appendChild(btn2);
buttonContainer.appendChild(btn3);
btn1.textContent = "Rock";
btn2.textContent = "Paper";
btn3.textContent = "Scissors";
buttonContainer.classList.add('buttonContainer');
resultContainer.classList.add('resultContainer');
// resultContainer.appendChild()
main.appendChild(resultContainer);
main.appendChild(buttonContainer);



buttons.forEach(button => {
    button.classList.add("button")

    button.addEventListener("click", (e) => {
        switch (e.currentTarget) {
            case btn1:
                playRound(option1, getComputerChoice())
                break;
            case btn2:
                playRound(option2, getComputerChoice())
                break;
            case btn3:
                playRound(option3, getComputerChoice())
                break;
        }

    })
})



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
    if (humanChoice == computerChoice) { p2.textContent = "Draw! " }
    else if (humanChoice == option1 && computerChoice == option2) {
        computerScore += 1;
        p3.textContent = "Computer Won! Paper Beats Rock";
    } else if (humanChoice == option2 && computerChoice == option1) {
        humanScore += 1;
        p3.textContent = "Human Won! Paper Beats Rock";
    } else if (humanChoice == option1 && computerChoice == option3) {
        humanScore += 1;
        p3.textContent = "Human Won! Rock Beats Scissors";
    } else if (humanChoice == option3 && computerChoice == option1) {
        computerScore += 1;
        p3.textContent = "Computer Won! Rock Beats Scissors";
    } else if (humanChoice == option2 && computerChoice == option3) {
        computerScore += 1;
        p3.textContent = "Computer Won! Scissor Beats Paper";
    } else if (humanChoice == option3 && computerChoice == option2) {
        humanScore += 1;
        p3.textContent = "Human Won! Scissor Beats Paper";
    }

    p1.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`
    resultContainer.appendChild(p1);
    p2.textContent = `Human choice:  ${humanChoice} | Computer choice:   ${computerChoice}`;
    resultContainer.appendChild(p2);
    resultContainer.appendChild(p3);
    getWinner(humanScore, computerScore);


}


function playGame() {
    getWinner(humanScore, computerScore);
}

function getWinner(HS, CS) {
    if (HS == 5) {
        resultContainer.removeChild(p1);
        resultContainer.removeChild(p2);
        p3.textContent = "Human Won The Game";
    }
    else if (CS == 5) {
        resultContainer.removeChild(p1);
        resultContainer.removeChild(p2);
    }
}

playGame();


