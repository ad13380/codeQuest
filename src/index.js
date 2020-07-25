import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons"
import App from "./components/App";
import Player from "./js/player";
import Input from "./js/input";
import Map from './js/map'
import Collision from "./js/collision";
import levels from './levels'


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
let i = 0
let player;
let map;
let collision;
let input;

// // placeholder level map
// let gridMap =
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// // placeholder for the winning tile
// let winningTile = {
//   x: 5,
//   y: 8
// }
//canvas
let canvas = document.getElementById("gameArea");
if (canvas !== null) {

  let ctx = canvas.getContext("2d");
  // instances

  function nextLevel() {
    i++
  }
  function startGame() {
    player = new Player(GAME_ROWS, GAME_COLUMNS, GRID_SIZE, i)
    input = new Input(player)
    map = new Map(player, ctx, levels[i].map, GRID_SIZE, GAME_ROWS, GAME_COLUMNS, levels[i].winningTile)
    collision = new Collision(player, levels[i].map, GRID_SIZE, GAME_ROWS, GAME_COLUMNS)
    gameLoop()
  }

  // set canvas size
  canvas.height = GAME_ROWS * GRID_SIZE;
  canvas.width = GAME_COLUMNS * GRID_SIZE;

  // game loop
  let lastTime = 0;
  function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    input.listenForPlay()
    // map.checkWin()
    map.clearMap()
    map.drawMap()
    player.update(deltaTime);
    map.isWithinX()

    collision.detect() // this has been added

    player.draw(ctx);
    map.checkWin()
    if (!map.isLevelOver()) {
      requestAnimationFrame(gameLoop)
    } else {
      nextLevel()
      startGame()
    }
  }
  startGame()

  // event listeners
}
