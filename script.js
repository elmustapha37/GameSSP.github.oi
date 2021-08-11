const game = () => {
var imgOne = document.querySelector("#imgOne");
var imgTwo = document.querySelector("#imgTwo");
var player = document.querySelector(".ply span");
var playerC = document.querySelector(".ply1 span");
var result = document.querySelector("#result");
let scoreP = 0;
let scoreC = 0;
  //Start the Game
var startPage = document.querySelector(".startPage");  
var sPage = document.getElementById("sPage");
var outPage = document.querySelector(".outPage");
var startPage = document.getElementById("starGame");  
startPage.addEventListener("click",function(){
    sPage.style.display="none";
    outPage.style.opacity="1";
    startPage.style.opacity="0";
    console.log("Welcome in the game !!!");
})

function playGame(){
    const options = document.querySelectorAll(".chose button");
    //Computer Options
    const computerOptions = ["stone", "paper", "scissors"];
    options.forEach(option => {
    option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
          //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            console.log(this.textContent);
          //Update Images
            imgOne.src = `./image/${this.textContent}.png`;
            imgTwo.src = `./image/${computerChoice}.png`;
        });
    });
}
const updateScore = () => {
    player.textContent = scoreP;
    playerC.textContent = scoreC;
};
const compareHands = (playerChoice, computerChoice) => {
  //Checking for a tie
    if (playerChoice === computerChoice) {
        result.textContent = "It is a tie";
        return;
    }
    //Check for stone
    if (playerChoice === "stone") {
    if (computerChoice === "scissors") {
        result.textContent = "Player Wins";
        scoreP++;
        updateScore();
        return;
    } else {
        result.textContent = "Computer Wins";
        scoreC++;
        updateScore();
        return;
    }
    }
    //Check for Paper
    if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
        result.textContent = "Computer Wins";
        scoreC++;
        updateScore();
        return;
    } else {
        result.textContent = "Player Wins";
        scoreP++;
        updateScore();
        return;
    }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
    if (computerChoice === "stone") {
        result.textContent = "Computer Wins";
        scoreC++;
        updateScore();
        return;
    } else {
        result.textContent = "Player Wins";
        scoreP++;
        updateScore();
        return;
        }
    }
};
playGame();
};
game();

var cp = new Audio();
cp.src="./sound/clicksoundeffect.mp3"
var cp1 = new Audio();
cp1.src="./sound/among.mp3"
