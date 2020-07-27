import React from 'react';

function Header() {
  return (
    <div>
      <div>
        <h1 className='tc'>CodeQuest()</h1>
      </div>
      <div className='tc'>
        <a className='link dim black f6 f5-ns dib mr3' href="/">Home</a>
        <a className='link dim black f6 f5-ns dib mr3' href="/play">Play</a>
        <a className='link dim black f6 f5-ns dib mr3' href="/instructions">Instructions</a>
        <a className='link dim black f6 f5-ns dib mr3' href="/aboutus">About Us</a>
      </div>
      <br />
    </div>
  );
}

export default Header;