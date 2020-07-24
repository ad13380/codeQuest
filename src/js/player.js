export default class Player {
  constructor(gameRows, gameColumns, gridSize) {
    // grid size
    this.gridSize = gridSize;
    // game size
    this.gameRows = gameRows;
    this.gameColumns = gameColumns;
    // player size
    this.height = this.gridSize;
    this.width = this.gridSize;
    // player position
    this.position = {
      x: 0,
      y: this.gridSize * this.gameRows - this.height - 3 * this.gridSize,
    };
    // old player position
    this.oldPosition = {
      x: this.position.x,
      y: this.position.y,
    };
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
    this.vel.y = - this.jumpSpeed;
    this.vel.x = this.speed;
    await this._wait(1000)
  }

  async jumpLeft() {
    this.vel.y = - this.jumpSpeed;
    this.vel.x = - this.speed;
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
    this.oldPosition.x = this.position.x;
    this.oldPosition.y = this.position.y;
    this.position.x += this.vel.x;
    this.position.y += this.vel.y;
  }

  _applyFriction() {
    this.vel.x *= this.friction;
  }

  _applyGravity() {
    this.vel.y += this.gravity;
  }

  // collision methods
  get getBottom()     { return this.position.y + this.height;    }
  get getTop()        { return this.position.y;                  }
  get getLeft()       { return this.position.x;                  }
  get getRight()      { return this.position.x + this.width;     }
  get getOldBottom()  { return this.oldPosition.y + this.height; }
  get getOldTop()     { return this.oldPosition.y;               }
  get getOldLeft()    { return this.oldPosition.x;               }
  get getOldRight()   { return this.oldPosition.x + this.width;  }
  set setBottom(y)    { this.position.y = y - this.height;       }
  set setTop(y)       { this.position.y = y;                     }
  set setLeft(x)      { this.position.x = x;                     }
  set setRight(x)     { this.position.x = x - this.width;        }
}
