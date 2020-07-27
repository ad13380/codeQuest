import React from "react";

function AboutUs() {
  return (
    <div className="tc">
    <h3> About us: </h3>

      <div>
        <img alt='bene' src="./assets/Bene.jpeg" width="200" height="200"/>
        <p> Benedetta Arinci
        </p>
        <a href ={'https://github.com/benearinci'}>Bene's GitHub</a>

      </div>

      <div>
      <img alt='anthony' src="./assets/Anthony.jpeg" width="200" height="200"/>
        <p> Anthony Donovan
        </p>
        <a href ={'https://github.com/ad13380'}>Anthony's GitHub</a>


      </div>

      <div>
        <img alt='chris' src="./assets/Chris.jpeg" width="200" height="200"/>
        <p> Chris Cooney
        </p>
        <a href ={'https://github.com/ChrisCooney05'}>Chris' GitHub</a>

      </div>

      <div>
      <img alt='ema' src="./assets/Ema.png" width="200" height="200"/>
        <p> Emanuele Pace
        </p>
        <a href ={'https://github.com/Emanuele-20'}>Emanuele's GitHub</a>

      </div>

    </div>


  )
}

export default AboutUs;
