export default class Input {
  constructor(player, sound) {
    this.player = player;
    this.sound = sound;
    this.btnPlay = document.getElementById("play");
    this.btnReset = document.getElementById("reset")
    this.errorMessage = document.getElementById("ErrorMessage")
    this.validInputs = ['hero.moveRight()', 'hero.moveLeft()', 'hero.jumpRight()', 'hero.jumpLeft()']
    this.arrToCheckInput = []
    this.inputArray = []
    this.errorText = "I am afraid there is an error in your code, please review it and press play again"

  }

  listenForPlay() {
    this.btnPlay.addEventListener("click", () => {
      let inputString = document.getElementById("userInput").value
      this._stringToArray(inputString)
      if (this._isInputValid()) {
        this.errorMessage.innerHTML = ""
        this.player.start(this.inputArray);
      } else {
        this.errorMessage.innerHTML = this.errorText
      }
      this.arrToCheckInput = []
      this.inputArray = []
    });
  }

  listenForReset() {
    this.btnReset.addEventListener("click", () => {
      this.player.resetPosition()
    });
  }

  listenForMute() {
    window.addEventListener("keydown", (event) => {
      if(event.keyCode === 88) { // press x for mute
        if (this.sound.isMuted) {
          this.sound.playMusic()
        } else {
          this.sound.muteMusic()
        }
      }
    });
  }

  _stringToArray(inputString) {
    inputString.split('\n').forEach(input => {
      if (this._formatInput(input) !== "") {
        this.inputArray.push(this._formatInput(input))
      }
    })
  }

  _formatInput(input) {
    return input.trimStart().trimEnd()
  }


  _isInputValid() {
    this.inputArray.forEach((input) => {
      if (this.validInputs.includes(input))
        this.arrToCheckInput.push("true")
      else { this.arrToCheckInput.push("false") }
    })
    return !this.arrToCheckInput.includes("false")
  };

  clearTextarea() {
    let inputString = document.getElementById("userInput")
    inputString.value = ""
    console.log(inputString.value)
  }
}



