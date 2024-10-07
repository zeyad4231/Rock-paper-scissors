function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 2);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const playerChoice = prompt("Type your choice");
    switch (playerChoice){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            console.log("Invalid input");
            return null;
        
    }
}

function playGame(){
    let humansScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice){
        if (!humanChoice){
            console.log('Invalid human choice!');
            return;
        }

        console.log('You chose: ${humanChoice}' );
        console.log('Computer chose: ${computerChoice}');

        if (humanChoice=== 'rock'){
            if (computerChoice=== 'paper'){
                console.log('You lost! Paper beats rock');
                computerScore++;
            } else if(computerChoice==='scissors'){
                console.log('You win,rock beats scissors');
                humansScore++;;
            } else{
                console.log('Its a tie');
            }
        

        } else if (humanChoice==='paper'){
            if(computerChoice==='rock'){
                console.log('You win, paper beats rock');
                humansScore++;
            
            } else if (computerChoice==='scissors') {
                console.log('You lose, scissors cuts paper');
                computerScore++;
            }else{
                console.log('Its a tie');
            }
        
            
        } else if (humanChoice==='scissors'){
            if (computerChoice==='paper'){
                console.log('You win, scissors cut paper');
                humansScore++;

            } else if(computerChoice==='rock'){
                console.log('You lose, rock beats scissors');
                computerScore++;

            } else{
                console.log('Its a tie');
            }
        
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("Round ", i + 1)
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humansScore > computerScore) {
        console.log("Human win!");
        console.log(humansScore, " > ", computerScore);
    } else if (computerScore > humansScore) {
        console.log("Computer win!");
        console.log(computerScore, " > ", humansScore);
    } else {
        console.log("I'ts a tie again...");
        console.log(humansScore, " = ", computerScore);
    }
}

playGame();