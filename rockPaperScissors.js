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
    for (let i = 0; i < 10; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
        console.log(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    }
    gameWinner();
}
function gameWinner() {
    let playerCount = winner.filter(x => x === "player").length,
        computerCount = winner.filter(x => x === "computer").length;
    console.log("\n***************************************************")
    if (playerCount > computerCount) {
        console.log("The player is the winner with " + playerCount + " wins");
    } else if (playerCount === computerCount) {
        console.log("Its a draw");
    } else {
        console.log("The computer is the winner with " + computerCount + " wins");
    }
}