import React from "react";

function TextArea() {
  return (
    <div>
      <div>
        <br />
        Make sure you are using the correct commands to move our hero!<br /><br />
        player.moveRight()<br />
        player.moveLeft()<br />
        player.jumpRight()<br />
        player.jumpLeft()<br />
      </div>
      <br />
      <textarea id="userInput" name="name" rows="15" cols="30"></textarea>
      <br />
      <button id="play" type="submit">
        Play!
      </button>
      <button id="reset" type="submit">
        Back to Start
      </button><br />
      <span id='ErrorMessage'></span>

    </div>
  );
}

export default TextArea;