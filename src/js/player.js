export default class Player {
  constructor(gameHeight, gameWidth, gridSize) {
    // game area size
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    // grid size
    this.gridSize = gridSize;
    // methods for setting info about the image when creating the instance
    this._setSize()
    this._setImage()
    this._setFrames()
    // player position (px)
    this.position = {
      x: 0,
      y: this.gameHeight - this.gridSize,
    };
    // player position (tile)
    this.tilePosition = {
      x: Math.floor(this.position.x / this.gridSize),
      y: Math.floor(this.position.y / this.gridSize)
    }
    // player velocity
    this.vel = {
      x: 0,
      y: 0,
    };
    //movement value
    this.moveIncrement = {
      x: 10,
      y: 10,
    };
    // speed
    this.speed = 10;
    // friction
    this.friction = 1 - this.speed / this.moveIncrement.x;
  }

  draw(ctx) {
    // ctx.fillStyle = 'black'
    // this._setSides()
    return ctx.drawImage(this.image, 
      this.frameX * this.WIDTH,
      this.frameY * this.HEIGHT,
      this.WIDTH, 
      this.HEIGHT, 
      this.position.x,
      this.position.y,
      this.SCALED_WIDTH,
      this.SCALED_HEIGHT);
  }

  update(deltaTime) {
    if (!deltaTime) return

    this._updatePosition()
    this._applyFriction()
  }


  async moveRight() {
    this.frameY = 11
    this.vel.x = this.speed;
    this.animateSprite()
    await this._wait(200)
  }

  async moveLeft() {
    this.frameY = 9
    this.vel.x = -this.speed;
    this.animateSprite()
    await this._wait(200)
   
  }

  _wait(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async start(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      await this._stringToFunction(inputArray[i]);
    }
  }

  async _stringToFunction(input) {
    // eslint-disable-next-line default-case
    switch (input) {
      case "player.moveRight()":
        await this.moveRight();
        break;
      case "player.moveLeft()":
        await this.moveLeft();
        break;
    }
  }

  animateSprite(){
       this.frameX = this.CYCLE_LOOP[this.increment.toFixed(0)]
       this.increment > 4 ? (this.increment = 0) : (this.increment += 1)
   }
 

  _setImage(){
    this.image = new Image();
    this.image.src = "./assets/warrior.png"
  }

  _setSize(){
    this.SCALE = 0.46875;
    this.WIDTH = 64;
    this.HEIGHT = 64;
    this.SCALED_WIDTH = this.SCALE * this.WIDTH;
    this.SCALED_HEIGHT = this.SCALE * this.HEIGHT;
  }
  // 0.46875

  // _setSides(){
  //   this.top    = this.position.y
  //   this.bottom = this.position.y + this.SCALED_HEIGHT
  //   this.right  = this.position.x + this.SCALED_WIDTH - 20
  //   this.left   = this.position.x + 20
  // }

  _setFrames(){
    this.CYCLE_LOOP = [1, 2, 3, 4, 5, 6];
    this.increment = 0
    this.frameX = 0;
    this.frameY = 11;
    //this.score = 0;
  }

  // only for X axis 
  _updatePosition() {
    // update px x-position
    this.position.x += this.vel.x;
    // update tile x-position
    this.tilePosition.x = Math.floor(this.position.x / this.gridSize)
  }

  _applyFriction() {
    this.vel.x *= this.friction;
  }















// //x and y coordinates to render the sprite 
// var x=0;
// var y=0; 

// //x and y coordinates of the canvas to get the single frame 
// var srcX=0; 
// var srcY=0; 

// //tracking the movement left and write 
// var left = false;

//                   //Assuming that at start the character will move right side 
// var right = true;

// //Speed of the movement 
// var speed = 12; 

// //Getting the canvas 
// var canvas = document.getElementById('canvas');

// //setting width and height of the canvas 
// canvas.width = canvasWidth;
// canvas.height = canvasHeight; 

// //Establishing a context to the canvas 
// var ctx = canvas.getContext("2d");

// //Creating an Image object for our character 
// var character = new Image(); 

// //Setting the source to the image file 
// character.src = "character.png";


}
