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
let PlayerChoice = ()=> {
    let playerInput = prompt("enter the choice from Rock Paper Scissors")
    return playerInput.charAt(0).toUpperCase() + (playerInput.slice(1)).toLowerCase()

}