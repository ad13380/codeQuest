import React from "react";

function TextArea() {
  return (
    <div>
      {/* <span id = "error"></span> <br /> */}
      <textarea id="userInput" data-testid='testtextarea' name="name" rows="20" cols="40"></textarea>
      <br />
      <button id="play" type="submit">
        Play!
      </button>
    </div>
  );
}

export default TextArea;
