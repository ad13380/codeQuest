export default class Input {
  constructor(player) {
    this.player = player
    this.btnPlay = document.getElementById("play");
    //this.errorMessage = document.getElementById("error")
    this.validInputs = ['player.moveRight()', 'player.moveLeft()', 'player.jumpRight()', 'player.jumpLeft()']
    this.inputArray = []
    this.arrToCheckInput = []

  }

  listenForPlay() {
    this.btnPlay.addEventListener("click", () => {
      let inputString = document.getElementById("userInput").value
      this._stringToArray(inputString)
      this._isInputValid()
      this.player.start(this.inputArray);
      this.inputArray = []

      //document.getElementById("userInput").value = ""
    });
  }

  // listenForPlay() {
  //   this.btnPlay.addEventListener("click", () => {
  //     let inputString = document.getElementById("userInput").value
  //     this._stringToArray(inputString)
  //     if (!this._isInputValid()){
  //       this.errorMessage.innerHTML = "error"
  //     }
  //     else  {
  //       this.player.start(this.inputArray);
  //       this.inputArray = []
  //     } 
  //   });
  // }

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

  _isInputValid () {
    this.inputArray.forEach(input => {
      if (this.validInputs.includes(input)) {
        this.arrToCheckInput.push("true")
      } else {this.arrToCheckInput.push("false")}
    })
    return !this.arrToCheckInput.includes("false")
  }

}