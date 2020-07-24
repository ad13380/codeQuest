export default class Player {
  constructor(gameRows, gameColumns, gridSize) {
    // grid size
    this.gridSize = gridSize;
    // game area size
    this.gameHeight = this.gridSize * gameRows;
    this.gameWidth = this.gridSize * gameColumns;
    // player size
    this.height = 30;
    this.width = 30;
    // player position (px)
    this.position = {
      x: 0,
      y: this.gameHeight - this.height - 3 * this.gridSize,
    };
    // player position (tile)
    this.tilePosition = {
      x: Math.round(this.position.x / this.gridSize),
      y: Math.ceil(this.position.y / this.gridSize)
    }
    // player velocity
    this.vel = {
      x: 0,
      y: 0,
    };
    //movement value
    this.moveIncrement = {
      x: this.gridSize, 
      y: 0
    };
    // speed
    this.speed = 10;
    // jump speed
    this.jumpSpeed = 8;
    // friction
    this.friction = 1 - this.speed / this.moveIncrement.x;
    // gravity
    this.gravity = 0.5;
  }

  draw(ctx) {
    ctx.fillStyle = 'black'
    return ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return

    this._updatePosition()
    this._applyFriction()
    this._applyGravity()
  }

  async moveRight() {
    this.vel.x = this.speed;
    await this._wait(1000)
  }

  async moveLeft() {
    this.vel.x = -this.speed;
    await this._wait(1000)
  }

  async jumpRight() {
    this.vel.y -= this.jumpSpeed;
    this.vel.x = this.speed;
    await this._wait(1000)
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
      case "player.jumpRight()":
        await this.jumpRight();
        break;
      case "player.jumpLeft()":
        await this.jumpLeft();
        break;
    }
  }

  // only for X axis 
  _updatePosition() {
    // update px position
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;
    // update tile position
    this.tilePosition.x = Math.round(this.position.x / this.gridSize)
    this.tilePosition.y = Math.ceil(this.position.y / this.gridSize)
  }

  _applyFriction() {
    this.vel.x *= this.friction;
  }

  _applyGravity() {
    this.vel.y += this.gravity;
  }
}
