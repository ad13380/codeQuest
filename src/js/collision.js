export default class Collision {
  constructor(player, gridMap, gridSize, gameRows, gameColumns) {
    this.player = player;
    this.gridMap = gridMap;
    this.gridSize = gridSize;
    this.gameRows = gameRows
    this.gameColumns = gameColumns;
  }

  detect() {
    this.boundaryCollision();

    let tilePosition_x = Math.round(this.player.position.x / this.gridSize)
    let tilePosition_y = Math.ceil(this.player.position.y / this.gridSize)
    let value_at_index = this.gridMap[tilePosition_y * this.gameColumns + tilePosition_x]
    this._collisionObject[value_at_index]()
  }

  topCollision() {
    let tilePosition_y = Math.ceil(this.player.position.y / this.gridSize)
    let topSide = tilePosition_y * this.gridSize;
    if (this.player.vel.y > 0) { // moving down
      this.player.vel.y = 0;
      this.player.position.y = topSide - this.player.height;
      return true;
    }
    return false;
  }

  boundaryCollision() {
    // left right
    if (this.player.getLeft < 0) { 
      this.player.setLeft = 0;             
      this.player.vel.x = 0; 
    } else if (this.player.getRight > this.gridSize * this.gameColumns) { 
      this.player.setRight = this.gridSize * this.gameColumns;   
      this.player.vel.x = 0; 
    }
    // top bottom
    if (this.player.getTop < 0) { 
      this.player.setTop = 0;             
      this.player.vel.y = 0; 
    } else if (this.player.getBottom > this.gridSize * this.gameRows) { 
      this.player.setBottom = this.gridSize * this.gameRows;   
      this.player.vel.y = 0; 
    }
  }

  get _collisionObject() {
    return {
      0: () => {},
      1: () => { this.topCollision(); },
      2: () => { }
    }
  }
}