import React from "react";

function Instructions() {
  return (
    <div className='center mw5 mw7-ns pa3'>
      <div className='tc ba b--dashed bw3 pa3'>
        <p>Instructions<br /><br />
        As you read before our hero is a touch stubborn and loves to be a little different, in order to get them to move
        we need to use methods. <br />
        What are methods you ask? well, just picture them as 'things the hero can do', they belong to the hero and only the hero
        because of this we cant just type random commands and hope something works!<br /><br />
        Our hero has 4 methods they know how to use<br />
        hero.moveRight()<br />
        hero.moveLeft()<br />
        hero.jumpRight()<br />
        hero.jumpLeft()<br /><br />
        Now you are probably thinking, why do I need to type hero before the command?? Well how else will the hero know you want them to use there method??<br /><br />
        You'll notice that there's a reset button on the play screen, this will move your hero back to the start of the level.
        The idea is to move your hero from the starting position to the goal with one set of commands, so after each time you press play
        we want you to work out what your next move will be, reset and then add your next command. Don't worry it's not a memory game
        so your commands will stay with you until you reach the goal.<br /><br />
        I think that about wraps it up for instructions, when you are ready click the Play text to get started!
        </p>
      </div>
    </div>
  )
}

export default Instructions;