const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
    gameStatus.textContent = "";
    

  colorOptions.innerHTML = "";
    colors.forEach(color => {
        const button = document.createElement("button");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.addEventListener("click", () => checkGuess(color));
        colorOptions.appendChild(button);
    });
}


function checkGuess(color) {
    if (color === targetColor) {
        score++;
        scoreDisplay.textContent = score;
        gameStatus.textContent = "Correct! you are a genius 🎉";
        gameStatus.style.color = "green";
        setTimeout(startGame, 1000); // Automatically start a new round
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
    }
}


newGameButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
});

startGame();
