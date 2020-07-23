import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Player from "./js/player";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let userInput = document.getElementById("userInput");
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
let btnPlay = document.getElementById("play");

// define game area size
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;

let player = new Player(GAME_HEIGHT, GAME_WIDTH);
// let input = new Input();

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  player.update(deltaTime);
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();

// btnEnterMove.addEventListener("click", function(){
//
//   if (userInput.value === "player.moveRight()" || userInput.value === "player.moveLeft()") {
//     input.addInput(userInput.value)
//     var li = document.createElement("li")
//     li.appendChild(document.createTextNode(userInput.value))
//     list.appendChild(li)
//     console.log(input);
//     userInput.value = ""
//   } else {
//     alert("Wrong move, try again")
//     userInput.value = ""
//   }
// })

btnPlay.addEventListener("click", function () {
  let test = userInput.value.split("\n");
  // console.log(test);
  player.start(test);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
