import React from "react";

function TextArea() {
  return (
    <div>
      <textarea id="userInput" name="name" rows="20" cols="40"></textarea>
      <br />
      <button id="play" type="submit">
        Play!
      </button>
    </div>
  );
}

export default TextArea;