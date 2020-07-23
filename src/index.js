import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Player from "./js/player";
import Input from "./js/input"
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// let userInput = document.getElementById("userInput");
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");


// define game area size
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;

let player = new Player(GAME_HEIGHT, GAME_WIDTH);
let input = new Input(player);

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
input.listenForPlay()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
