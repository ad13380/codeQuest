import React from "react";

function TextArea() {
  return (
    <div className='fl w-third tc pa1' style = {{color: 'white'}}>
      <div >
        Make sure you are using the correct commands to move our hero!<br /><br />
        <div style = {{color: '#ffff66'}}>
        hero.moveRight()<br />
        hero.moveLeft()<br />
        hero.jumpRight()<br />
        hero.jumpLeft()<br />
        </div>
      </div>
      <br />
      <textarea id="userInput" name="name" rows="14" cols="30" style = {{backgroundColor: 'rgba(256, 256, 256, 0.3)', color: 'white'}}></textarea>
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