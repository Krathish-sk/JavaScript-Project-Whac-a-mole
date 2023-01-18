let popUp = document.getElementById("popUp");

function openPopUp() {
  popUp.classList.add("open-popUp");
}

let startButton = document.querySelector("#startBtn");
addCssBtn();
function addCssBtn() {
  startButton.classList.add("#startGame");
}

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const finalScore = document.querySelector("#finalScore");

let result = 0;
let hitPosition;
let currentTime = 30;
timeLeft.textContent = currentTime + " sec";
let timerId = null;
let countDownTimerId;

//User adding extra 10seconds of time
let incTime = document.querySelector(".addTime");
incTime.addEventListener("click", addTime);
function addTime() {
  currentTime += 10;
  timeLeft.textContent = currentTime + " sec";
}

//User minusing extra 10seconds of time
let decTime = document.querySelector(".minusTime");
decTime.addEventListener("click", minusTime);
function minusTime() {
  if (currentTime > 10) {
    currentTime -= 10;
    timeLeft.textContent = currentTime + " sec";
  }
}

//Removing the mole, which means creatina new  grid without a mole
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

function countDown() {
  currentTime--;

  timeLeft.textContent = currentTime + " sec";

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    finalScore.textContent = result;
    openPopUp();
  }
}

startButton.addEventListener("click", functionCountDownTimerId);

function functionCountDownTimerId() {
  moveMole();
  countDownTimerId = setInterval(countDown, 1000);
}
