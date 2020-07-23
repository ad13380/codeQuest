import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Player from "./js/player";
import Input from "./js/input";
import Map from './js/map'
import Collision from "./collision";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// define grid size
const GRID_SIZE = 30;

// define game area rows and columns
const GAME_ROWS = 9;
const GAME_COLUMNS = 16;

// define game area size
const GAME_HEIGHT = GAME_ROWS * GRID_SIZE;
const GAME_WIDTH = GAME_COLUMNS * GRID_SIZE;

// placeholder level map
let gridMap =
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// placeholder for the winning tile
let winningTile = {
  x: 5,
  y: 8
}

// define canvas
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
// instances
let player = new Player(GAME_HEIGHT, GAME_WIDTH, GRID_SIZE);
let input = new Input(player);
let map = new Map(player, ctx, gridMap, GRID_SIZE, GAME_WIDTH, GAME_HEIGHT, winningTile);
let collision = new Collision(player, gridMap, GRID_SIZE)

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;

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

  let value_at_index = gridMap[player.tilePosition.y * 16 + player.tilePosition.x]
  collision.collisionObject[value_at_index](player)

  player.draw(ctx);
  requestAnimationFrame(gameLoop);
}
gameLoop();

// event listeners
input.listenForPlay()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
