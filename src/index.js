import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Player from "./js/player";
import Input from "./js/input";
import Map from './js/map'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// define grid size
const GRID_SIZE = 30;

// define game area size
const GAME_HEIGHT = 9 * GRID_SIZE;
const GAME_WIDTH = 16 * GRID_SIZE;

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

const collisionObject =  { 
  2:function(object, row, column) {
    //if (this.topCollision(object, row)) { return; }
    this.leftCollision(object, column);
  },

  leftCollision(object, column) {
    if (object.vel.x > 0) {// If the object is moving right
      var leftSide = column * GRID_SIZE;// calculate the left side of the collision tile
      if (object.x + object.width * 0.5 > leftSide && object.oldPosition.x <= leftSide) {
        object.vel.x = 0;// Stop moving
        object.x = object.oldPosition.x = leftSide - object.width * 0.5 - 0.01;
        return true;
      }
    }
    return false;
  }
}


console.log(collisionObject.leftCollision)





// placeholder for the winning tile
let winningTile = {
  x: 5,
  y: 8
}

// define canvas
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
// player instance
let player = new Player(GAME_HEIGHT, GAME_WIDTH, GRID_SIZE);
// input instance
let input = new Input(player);
let map = new Map(player, ctx, gridMap, GRID_SIZE, GAME_WIDTH, GAME_HEIGHT, winningTile);

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;


// game loop
let lastTime = 0;
function gameLoop(timestamp) {
  console.log(player.tilePosition.x, player.position.x)

  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  // map.checkWin()
  map.clearMap()
  map.drawMap()
  player.update(deltaTime);
  map.isWithinX()



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
