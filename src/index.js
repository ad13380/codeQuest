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
import Sound from "./js/sound";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from "redux";

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const counter = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  counter
});

let store = createStore(rootReducer)

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App levels={levels} />
    </Provider>
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
let sound;

// define game area
const GRID_SIZE = 50;
const GAME_ROWS = 15;
const GAME_COLUMNS = 18;

//canvas
let canvas = document.getElementById("gameArea");
if (canvas !== null) {
  let ctx = canvas.getContext("2d");
  // define sound object (this has to be  outside of startGame() loop)
  sound = new Sound()
  // increment level counter
  function nextLevel() {
    i++
  }
  function startGame() {
    // define objects
    player = new Player(GAME_ROWS, GAME_COLUMNS, GRID_SIZE)
    frameClass = Frame;
    animation = new Animation(player, frameClass, levels[i].winningTile, GRID_SIZE)
    input = new Input(player, sound)
    map = new Map(player, ctx, levels[i].map, GRID_SIZE, GAME_ROWS, GAME_COLUMNS, levels[i].winningTile)
    collision = new Collision(player, levels[i].map, GRID_SIZE, GAME_ROWS, GAME_COLUMNS)
    // event listener for play button
    input.listenForPlay()
    // event listener for reset button
    input.listenForReset()
    // event listener for mute key press
    input.listenForMute()
    // play music
    sound.playMusic()
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
    animation.update(ctx)
    map.checkWin()
    if (!map.isLevelOver()) {
      requestAnimationFrame(gameLoop)
    } else {
      nextLevel()
      startGame()
      //clear text area on win
      input.clearTextarea()
      store.dispatch(increment())
    }
  }
  startGame()
}