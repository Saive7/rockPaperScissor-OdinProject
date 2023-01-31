console.log("Hello World");
//let 0 be rock , 1 be paper annd 2 be the scissor 
 let computerSelection = ()=> {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;
    if (ComputerChoice === 1) {
        return "Rock"
    }
    else if (ComputerChoice === 2){
        return  "Paper"
    }
    else {
        return "Scissors"
    }
}

    let playerInput = prompt("enter the choice from Rock Paper Scissors")
    let playerSelection = playerInput.charAt(0).toUpperCase() + (playerInput.slice(1)).toLowerCase()


let decision = (playerSelection,computerSelection)=> {
    if (playerSelection === computerSelection){
        return `Draw computer choosed ${computerSelection} `
    }
    else if (playerSelection=== "Rock" && computerSelection=== "Scissors"){
        return `You Win! ${playerSelection}  beats ${computerSelection} `
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return `You Win! ${playerSelection}  beats ${computerSelection} `
        }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return `You Win! ${playerSelection}  beats ${computerSelection} `
        }
    else if (computerSelection=== "Rock" && playerSelection=== "Scissors"){
        return `You Loose! ${computerSelection}  beats ${playerSelection} `
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        return `You Loose! ${computerSelection}  beats ${playerSelection} `
        }
    else if (computerSelection === "Paper" && playerSelection === "Rock"){
        return `You Loose! ${computerSelection}  beats ${playerSelection} `
        }

}
console.log(decision(playerSelection,computerSelection()))
function game() {
    decision()
}