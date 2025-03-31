function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (randomInt == 1)
        return "rock"
    else if (randomInt == 2)
        return "paper"
    else
        return "scissors"
}

function getHumanChoice() {
    let choice = prompt("Enter a choice: ")

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    
    if (humanChoice === computerChoice)
        return "Draw"
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            return "Computer wins! Paper beats rock"
        }
        else {
            humanScore++;
            return "You win! Rock beats scissors"
        }
    } 
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++
            return "You win! Paper beats rock"
        } else {
            computerScore++
            return "Computer wins! Scissors beat paper"
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            return "Computer wins! Rock beats scissors"
        } else {
            humanScore++
            return "You win! Scissors beats paper"
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log(playRound(humanSelection, computerSelection))
    }

    console.log("Your score: " + humanScore)
    console.log("Computer's score: " + computerScore)
}

playGame()



