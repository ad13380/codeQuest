export default class Player {
  constructor(gameHeight, gameWidth, gridSize) {
    // game area size
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    // grid size
    this.gridSize = gridSize;
    // player size
    this.height = 30;
    this.width = 30;
    // player position (px)
    this.position = {
      x: 0,
      y: this.gameHeight - this.height,
    };
    // player position (tile)
    this.tilePosition = {
      x: Math.floor(this.position.x/this.gridSize),
      y: Math.floor(this.position.y/this.gridSize)
    }
    // player velocity
    this.vel = {
      x: 0,
      y: 0,
    };
    //movement value
    this.moveIncrement = {
      x: 30,
      y: 30,
    };
    // speed
    this.speed = 10;
    // friction
    this.friction = 1 - this.speed / this.moveIncrement.x;
  }

  draw(ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return

    this._updatePosition()
    this._applyFriction()

    // collision detection? 
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  } //these will add the collision for both the right and left boundary

  async moveRight() {
    this.vel.x = this.speed;
    await this.wait(1000)
  }

  async moveLeft() {
    this.vel.x = -this.speed;
    await this.wait(1000)
  }

  wait(ms) {
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

  // only for X axis 
  _updatePosition() {
    // update px x-position
    this.position.x += this.vel.x;
    // update tile x-position
    this.tilePosition.x =  Math.floor(this.position.x/this.gridSize)
  }

  _applyFriction() {
    this.vel.x *= this.friction;
  }
}
