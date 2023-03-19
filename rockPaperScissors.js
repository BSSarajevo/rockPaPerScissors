const ROCK = 1,
    PAPER = 2;
SCISSORS = 3;

let playerSelection,
    computerSelection,
    winner = [],
    roundNumber = 0;





game();
function getComputerChoice() {
    let randomNumber
     = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            console.log("we are on rock");
            return "rock";
            break;
        case 1:
            console.log("we are on paper");
            return "paper";
            break;
        case 2:
            console.log("we are on scissors");
            return "scissors";
            break;
        default:
            return;
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt("Player choice, please enter the correct choice").toLowerCase();
        playRound(playerSelection, computerSelection);
    } else {
        if (playerSelection.localeCompare(computerSelection) != 0) {
            if (playerSelection === "rock") {
                if (computerSelection === "paper") {
                    winner[roundNumber] = "computer";
                } else {
                    winner[roundNumber] = "player";
                }
            } else if (playerSelection === "paper") {
                if (computerSelection === "scissors") {
                    winner[roundNumber] = "computer";
                } else {
                    winner[roundNumber] = "player";
                }
            } else {
                if (computerSelection === "rock") {
                    winner[roundNumber] = "computer";
                } else {
                    winner[roundNumber] = "player";
                }
            }
            console.log(winner[roundNumber] + " won this round");
        } else {
            winner[roundNumber] = "draw";
            console.log("its a draw");
        }
        roundNumber++;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection=getComputerChoice();
        playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
        console.log(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    }
}

function gameWinner(winner)
{
    
}