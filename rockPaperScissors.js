const ROCK = 1,
    PAPER = 2;
SCISSORS = 3;

let playerSelection,
    computerSelection,
    winner = [],
    roundNumber = 0;

/*playerSelection = String.prototype.toLowerCase(prompt("Player choice", playerSelection));*/
computerSelection = getComputerChoice();

console.log(winner,computerSelection);

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return;
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("You have not entered a correct option");
        playerSelection = String.prototype.toLowerCase(prompt("Player choice", playerSelection));
        playRound(playerSelection, computerSelection);
    } else {

        if (playerSelection.localCompare(computerSelection) != 0) {
            if (playerSelection === "rock") {
                switch (computerSelection) {
                    case "paper":
                        console.log("You loose this round");
                        winner[roundNumber] = "Computer";
                        break;
                    case "scissors":
                        console.log("You win this round");
                        winner[roundNumber] = "Player";
                        break;
                }
            } else if (playerSelection === "paper") {
                switch (computerSelection) {
                    case "scissors":
                        console.log("You loose this round");
                        winner[roundNumber] = "Computer";
                        break;
                    case "rock":
                        console.log("You win this round");
                        winner[roundNumber] = "Player";
                        break;
                }
            } if (playerSelection === "scissors") {
                switch (computerSelection) {
                    case "rock":
                        console.log("You loose this round");
                        winner[roundNumber] = "Computer";
                        break;
                    case "paper":
                        console.log("You win this round");
                        winner[roundNumber] = "Player";
                        break;
                }
            }
            roundNumber++;
        } else {
            console.log("Its a tie");
        }
    }
}