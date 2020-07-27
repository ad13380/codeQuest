import React from "react";

function TextArea() {
  return (
    <div>
      <span id='ErrorMessage'></span>
      <br />
      <textarea id="userInput" name="name" rows="15" cols="30"></textarea>
      <br />
      <button id="play" type="submit">
        Play!
      </button>
      <button id="reset" type="submit">
        Back to Start
      </button>
    </div>
  );
}

export default TextArea;