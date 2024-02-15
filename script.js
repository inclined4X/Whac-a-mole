// getting the elements

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId;

function randomSquare() {
  //removing the mole for a clean slate
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  // using a random number to place the mole
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  // add a mole in random
  randomSquare.classList.add("mole");

  //
  hitPosition = randomSquare.id;
}
randomSquare();

// anything we hit a mole we have to get some points
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// timing for the mole to move
function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
