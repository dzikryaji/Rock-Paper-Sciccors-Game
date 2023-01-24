const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn")

let player;
let computer;
let result;

choiceBtns.forEach((button) => button.addEventListener("click", () => {
    player = button.textContent;
    computer = computerChoice();
    result = checkWinner();

    playerText.textContent = player;
    computerText.textContent = computer;
    resultText.style.visibility = "visible";
    resultText.textContent = result;
}));

function computerChoice(){
    let randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function checkWinner(){
    if(computer == player){
        return "Draw!"
    } else if ( computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    } else if (computer == "PAPER"){
        return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    } else if (computer == "SCISSORS"){
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}