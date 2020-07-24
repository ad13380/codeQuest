import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons"
import App from "./components/App";
import Player from "./js/player";
import Input from "./js/input";
import Map from './js/map'
import Collision from "./js/collision";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// define game area
const GRID_SIZE = 30;
const GAME_ROWS = 9;
const GAME_COLUMNS = 16;

// placeholder level map
let gridMap =
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// placeholder for the winning tile
let winningTile = {
  x: 5,
  y: 8
}
//canvas
let canvas = document.getElementById("gameArea");
if (canvas !== null) {

  let ctx = canvas.getContext("2d");
  // instances
  let player = new Player(GAME_ROWS, GAME_COLUMNS, GRID_SIZE);
  let input = new Input(player);
  let map = new Map(player, ctx, gridMap, GRID_SIZE, GAME_ROWS, GAME_COLUMNS, winningTile);
  let collision = new Collision(player, gridMap, GRID_SIZE, GAME_ROWS, GAME_COLUMNS)

  // set canvas size
  canvas.height = GAME_ROWS * GRID_SIZE;
  canvas.width = GAME_COLUMNS * GRID_SIZE;

  // game loop
  let lastTime = 0;
  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    // map.checkWin()
    map.clearMap()
    map.drawMap()
    player.update(deltaTime);
    map.isWithinX()

    collision.detect() // this has been added

    player.draw(ctx);
    requestAnimationFrame(gameLoop);
  }
  gameLoop();

  // event listeners
  input.listenForPlay()
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
