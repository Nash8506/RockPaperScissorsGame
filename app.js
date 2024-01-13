let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];    
};

const drawGame = () => {
    console.log("game was draw");
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate computer choice
        const compChoice = genCompChoice();
        console.log("comp choice = ", compChoice);  

        if (userChoice === compChoice){
         drawGame();
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
