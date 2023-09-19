console.log("Welcome to TicTacToe");
let music = new Audio("assets/game_music.mp3");
let gameTurn = new Audio("assets/tick.wav");
let gameover = new Audio("assets/game_over.mp3");
let isgameover = false;
let turn = "X";

//function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//function for game win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[1]].innerText + " has Won";
      gameover.play();
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "220px";
    }
  });
};

//function for game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      gameTurn.play();
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        document.querySelector(".info").textContent = "Turn for " + turn;
      }
    }
  });
});

//for reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".info").textContent = "Start with " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});

btn_m.addEventListener("click", (toggle) => {
  if (btn_m.textContent.includes("ON")) {
    btn_m.textContent = "Music : OFF";
    music.pause();
    btn_m.style.backgroundColor = "rgb(255, 81, 81)";
  } else {
    btn_m.textContent = "Music : ON";
    music.play();
    btn_m.style.backgroundColor = "green";
  }
});
