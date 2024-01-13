let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];    
};

const drawGame = () => {
    msg.innerText = "Game was  draw. Play again!";
    msg.style.backgroundColor = "rgb(111, 111, 226)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "orange";
    }
}

const playGame = (userChoice) => {
    // generate computer choice
        const compChoice = genCompChoice(); 

        if (userChoice === compChoice){
         drawGame();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner (userWin, userChoice, compChoice);
        }
    };


// Add a click event listener to each element in the 'choices' collection
choices.forEach((choice) => {
    // When a choice is clicked, execute the following function
    choice.addEventListener("click", () => {
        // Retrieve the 'id' attribute of the clicked choice, representing the user's selection
        const userChoice = choice.getAttribute("id");
        // Call the 'playGame' function with the user's choice as an argument
        playGame(userChoice);
    });
});
