//prompt user input
//select random for computer
//comapre and print + update score
//repeat for 5 times
//end print the winner
//everything in a function playGame() except winner print
//playGame() in for loop
// score is global

let humanScore=0;
let computerScore=0;

playGame();

function playGame()
{
    let humanChoice;
    let computerChoice;

    for(i=1;i<6;i++)
        {
            humanChoice=getHumanChoice();
            computerChoice=getComputerChoice();
            playRound(humanChoice,computerChoice);
        }


    function getHumanChoice()
    {
        let choice = prompt("Choose Rock ,Paper or Scissors");
        let caseInChoice = choice.toLowerCase();
        return caseInChoice;
    }  //function to prompt user input and is stored in humanChoice variable

    function getComputerChoice()
    {
        let choices = ["rock","paper","scissors"];
        let randomChoice = choices[Math.floor(Math.random()*choices.length)];
        return randomChoice;
    } //fuunction to randomly select options for the computer

    function playRound(human_Choice,computer_Choice)
    {
        if(human_Choice == computer_Choice)
            {
                console.log("TIE!");
            }
        else if(human_Choice == "rock")
            {
                if(computer_Choice == "paper")
                    {
                        console.log("You lost dumbass!! , Paper beats Rock.");
                        computerScore++;
                    }
                else
                {
                    console.log("Damn!! you win ,Rock beats scissors");
                    humanScore++;
                }
            }
            else if(human_Choice == "paper")
                {
                    if(computer_Choice == "scissors")
                        {
                            console.log("You lost dumbass!! , Scissors beats paper.");
                            computerScore++;
                        }
                    else
                    {
                        console.log("Damn!! you win ,Paper beats rock");
                        humanScore++;
                    }
                }
                else if(human_Choice == "scissors")
                    {
                        if(computer_Choice == "rock")
                            {
                                console.log("You lost dumbass!! , rock beats scissors.");
                                computerScore++;
                            }
                        else
                        {
                            console.log("Damn!! you win ,scissors beats paper");
                            humanScore++;
                        }
                    }
                else
                {
                    console.log("Wrong input");
                }
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`My score: ${computerScore}`);

    if(humanScore>computerScore)
        {
            console.log("YOU WIN.");
        }
    else if(humanScore<computerScore)
        {
            console.log("YAH, I WIN.");
        }
    else
    {
        console.log("IT'S A TIE.");
    }

}