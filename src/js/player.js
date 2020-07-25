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
    // ground speed (horizontal speed while on ground)
    this.groundSpeed = 8;
    // air speed (horizontal speed while jumping)
    this.airSpeed = 3; // do not change
    // jump speed (vertical speed while jumping)
    this.jumpSpeed = 10; // do not change
    // jumping?
    this.isJumping = false;
    // ground friction (horizontal friction while on ground)
    this.groundFriction = 1 - this.groundSpeed / this.gridSize;
    // gravity
    this.gravity = 0.7; // do not change
    // target x-position of jump
    this.jumpDestination = null;
  }

  draw(ctx) {
    ctx.fillStyle = 'black'
    return ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return

    this._updatePosition()
    this._limitJumpDistance()
    this._applyFriction()
    this._applyGravity()
  }

  async moveRight() {
    this.vel.x = this.groundSpeed;
    this._addOffset(1)
    await this._wait(700)
  }

  async moveLeft() {
    this.vel.x = -this.groundSpeed;
    this._addOffset(-1)
    await this._wait(700)
  }

  async jumpRight() {
    this.isJumping = true;
    this.jumpDistance = this.position.x + this.gridSize * 2
    this.vel.y = - this.jumpSpeed;
    this.vel.x = this.airSpeed;
    await this._wait(700)
  }

  async jumpLeft() {
    this.isJumping = true;
    this.jumpDistance = this.position.x - this.gridSize * 2
    this.vel.y = - this.jumpSpeed;
    this.vel.x = - this.airSpeed;
    await this._wait(700)
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

  _wait(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
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
    if (!this.isJumping) {
      this.vel.x *= this.groundFriction;
    }
  }

  _applyGravity() {
    this.vel.y += this.gravity;
  }

  _limitJumpDistance() {
    if (this.isJumping) {
      if (this.position.x > this.oldPosition.x && this.position.x >= this.jumpDistance) {
        this.vel.x = 0;
      }
      if (this.position.x < this.oldPosition.x && this.position.x <= this.jumpDistance) {
        this.vel.x = 0;
      }
    }
  }

  _addOffset(sign) {
    this.position.x += 0.05 * sign
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
