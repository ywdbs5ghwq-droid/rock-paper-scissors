function getCpuChoice() {
    let choice = Math.floor(Math.random() * 100);
    choice = choice <= 33 ? "rock" :
    choice <= 66 ? "paper" :
    "scissors";
    alert("CPU chose "+choice+"."); // returns the choice in a neat way...
    return choice.slice(0,1).toLowerCase(); // then converts "choice" into something workable.
}

function getPlayerChoice() {
    let choice = prompt("(R)ock, (p)aper, or (s)cissors?").slice(0, 1).toLowerCase();
    return choice;
}

let playerScore = 0;
let cpuScore = 0;

function playRound(player, cpu) {
    if (player == "r" && cpu == "s") {
        playerScore ++;
        return "Player wins! Rock beats scissors!";
    }
    else if (player == "p" && cpu == "r") {
        playerScore ++;
        return "Player wins! Paper beats rock!";
    }
    else if (player == "s" && cpu == "p") {
        playerScore ++;
        return "Player wins! Scissors beats paper!";
    }
    
    else if (cpu == "r" && player == "s") {
        cpuScore ++;
        return "CPU wins! Rock beats scissors.";
    }
    else if (cpu == "p" && player == "r") {
        cpuScore ++;
        return "CPU wins! Paper beats rock.";
    }
    else if (cpu == "s" && player == "p") {
        cpuScore ++;
        return "CPU wins! Scissors beats paper.";
    }

    else {
        return "It was a draw.";
    }
}


function playGame() {
    for (let i=0; i < 5; i++) {
        alert( playRound( getPlayerChoice(), getCpuChoice() ) );
    }

}

playGame();
let winner = (playerScore > cpuScore) ? "Player wins overall!" : (cpuScore > playerScore) ? "CPU wins overall." : "It was a draw."; // compares scores to decide the winner and assigns it to "winner"
alert("The game is over! Final scores are:\nPlayer - "+playerScore+"\nCPU - "+cpuScore+"\n"+winner);