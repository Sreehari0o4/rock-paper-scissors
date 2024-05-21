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
        let choice = prompt("Choose Rock ,Paper or Scissor");
        let caseInChoice = choice.toLowerCase();
        return caseInChoice;
    }  //function to prompt user input and is stored in humanChoice variable

    function getComputerChoice()
    {
        let choices = ["rock","paper","scissor"];
        let randomChoice = choices[Math.floor(Math.random()*3)];
        return randomChoice;
    } //fuunction to randomly select options for the computer

    function playRound(human_Choice,computer_Choice)
    {
        
    }
}