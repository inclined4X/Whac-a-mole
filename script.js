// getting the elements

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;

function randomSquare() {
  //removing the mole for a clean slate
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  // using a random number to place the mole
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
}

randomSquare();
