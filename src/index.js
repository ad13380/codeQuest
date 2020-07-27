import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons"
import App from "./components/App";
import Player from "./js/player";
import Input from "./js/input";
import Map from './js/map'
import Collision from "./js/collision";
import Animation from "./js/animation"
import Frame from "./js/frame"
import levels from './levels'

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// define variables
let i = 0
let player;
let map;
let collision;
let input;
let animation;
let frameClass;

// define game area
const GRID_SIZE = 55;
const GAME_ROWS = 14;
const GAME_COLUMNS = 14;

//canvas
let canvas = document.getElementById("gameArea");
if (canvas !== null) {
  let ctx = canvas.getContext("2d");
  // increment level counter
  function nextLevel() {
    i++
  }
  function startGame() {
    // define objects
    player = new Player(GAME_ROWS, GAME_COLUMNS, GRID_SIZE)
    frameClass = Frame;
    animation = new Animation(player, frameClass)
    input = new Input(player)
    map = new Map(player, ctx, levels[i].map, GRID_SIZE, GAME_ROWS, GAME_COLUMNS, levels[i].winningTile)
    collision = new Collision(player, levels[i].map, GRID_SIZE, GAME_ROWS, GAME_COLUMNS)
    // event listener for play button
    input.listenForPlay()
    // event listener for reset button
    input.listenForReset()
    // start game loop
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
    map.clearMap()
    map.drawMap()
    player.update(deltaTime);
    collision.detect()
    //player.draw(ctx);

    animation.update(ctx)

    map.checkWin()
    if (!map.isLevelOver()) {
      requestAnimationFrame(gameLoop)
    } else {
      nextLevel()
      startGame()
      //clear text area on win
      input.clearTextarea()
    }
  }
  startGame()
}