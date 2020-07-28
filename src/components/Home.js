import React from 'react';

function Home() {
  return (
    <div className='center mw5 mw7-ns pa3'>
      <div style={{color: '#B8860B' , backgroundColor: 'rgba(256, 256, 256, 0.3)'}} className='tc ba b--dashed bw3 pa3'>
        <p  style={{color: 'Black'}}>Welcome to CodeQuest(), a platformer with a difference! <br /><br />
          Unlike other heros, ours does not understand normal commands. To get them to move we need to use code!<br /><br />
          Your task is to help our hero make it across countless levels using very specific commands, do you thing you are up for the challenge?<br /><br />
          Before you start make sure to check out the instructions page so you know what you are doing! or you know, dive right in and play, who am I to judge!
        </p>
      </div>
    </div>
  )
}

export default Home;
