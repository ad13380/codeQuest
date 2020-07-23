import React from "react";
import "../App.css";

function App() {
  return (
    <div className="App">
      <canvas id="gameArea"></canvas>
      <br />
      <textarea id="userInput" name="name" rows="20" cols="40"></textarea>
      <br />
      <button id="play" type="submit">
        Play!
      </button>
    </div>
  );
}

export default App;
