let computerChoice = ()=> {
    let choice = Math.floor(Math.random()*3)+1
    if (choice === 1) {
        return `Rock`
        
    }
    else if (choice === 2) {
        return `Paper`
    } else if (choice ===3){
        return `Scissors`
    }
}
//to check if function is working or not
// console.log(computerChoice());
let playerChoice = ()=> {
    let choice = prompt("choose from Rock, Paper, Scissors")
    let theChoice = (choice.charAt(0).toUpperCase() + (choice.slice(1)).toLowerCase());
    return theChoice
}
//to check the function
// console.log(playerChoice());
// the intial scores
let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
 console.log(decision(playerChoice(),computerChoice()))
    
}
function decision(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        return `Its a Draw, computer choose ${computerChoice} `
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors"){
    playerScore++;
    return `You Win! Rock beats Scissors`}
    else if (playerChoice === "Scissors" && computerChoice === "Paper"){
    playerScore++;
    return `You Win! Scissors beats Paper`}
    else if (playerChoice === "Paper" && computerChoice === "Rock"){
    playerScore++;
    return `You Win! Paper beats Rock`}
    else if (computerChoice === "Rock" && playerChoice === "Scissors"){
    computerScore++;
    return `You loose! Rock beats Scissors`}
    else if (computerChoice === "Scissors" && playerChoice === "Paper"){
    computerScore++;
    return `You loose! Scissors beats Paper`}
    else if (computerChoice === "Paper" && playerChoice === "Rock"){
    computerScore++;
    return `You loose! Paper beats Rock`}

}
console.log(`the Player Score : ${playerScore} and the Computer Score: ${computerScore} `);
let result= (playerScore,computerScore)=> {

    if (playerScore>computerScore) {
        return `Congo!, You beat the computer and your score is ${playerScore}  `
        
    }
    else if (computerScore>playerScore) {
        return `Oh!, Computer beated you with score of ${computerScore}`
    }
    else if (computerScore === playerScore) {
        return `The match is draw, Computer is a strong Competetor`
    }
}
console.log(result(playerScore,computerScore))