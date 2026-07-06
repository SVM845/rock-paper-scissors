//write a function that returns one of the "rock", "paper", "scissors" strings randomly
// use math.random to generate a number between 1 to 12
//    IF number is from 1 to 4 return => rock
//    IF number is from 5 to 8 return => paper
//    IF number is from 9 to 12 return => scissors 
//write a function to get the human choice
//  USE prompt and store it in a variable

let option1 = "rock";
let option2 = "paper";
let option3 = "scissors";

function getComputerChoice() {
    let number = (Math.floor(Math.random() * 10) + 3);
    console.log(number);
    if (number == 1 || number == 2 || number == 3 || number == 4) { return option1 }
    else if (number == 5 || number == 6 || number == 7 || number == 8) { return option2 }
    else if (number == 9 || number == 10 || number == 11 || number == 12) { return option3 }
}

function getHumanChoice() {
    let choice = prompt("ROCK? PAPER? SCISSORS?");
    if (choice == "rock") { return option1 }
    else if (choice == "paper") { return option2 }
    else if (choice == "scissors") { return option3 }
}

console.log(getHumanChoice());