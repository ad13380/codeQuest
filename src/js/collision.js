export default class Collision {
  constructor(player, gridMap, gridSize, gameRows, gameColumns) {
    this.player = player;
    this.gridMap = gridMap;
    this.gridSize = gridSize;
    this.gameRows = gameRows
    this.gameColumns = gameColumns;
  }

  detect() {
    this.checkBoundaryCollision();
    this.checkTopLeftCorner();
    this.checkTopRightCorner();
    this.checkBottomLeftCorner();
    this.checkBottomRightCorner();
  }

  gridCollisionType(value, tile_x, tile_y) {
    // eslint-disable-next-line default-case
    switch(value) {
      case 0: break;
      case 1: this.collidePlatformTop(tile_y); break;
      case 2: this.allSidesCollision(tile_x, tile_y); break;
    }
  }

  allSidesCollision(tile_x, tile_y) {
    if (this.collidePlatformTop(tile_y)) return; 
    if (this.collidePlatformBottom(tile_y + this.gridSize)) return;
    if (this.collidePlatformLeft(tile_x)) return;
    this.collidePlatformRight(tile_x + this.gridSize); 
  }

  checkBoundaryCollision() {
    // left right
    if (this.player.getLeft < 0) { 
      this.player.setLeft = 0;             
      this.player.vel.x = 0; 
    } else if (this.player.getRight > this.gridSize * this.gameColumns) { 
      this.player.setRight = this.gridSize * this.gameColumns - 0.01;   
      this.player.vel.x = 0; 
    }
    // top bottom
    if (this.player.getTop < 0) { 
      this.player.setTop = 0;             
      this.player.vel.y = 0; 
    } else if (this.player.getBottom > this.gridSize * this.gameRows) { 
      this.player.setBottom = this.gridSize * this.gameRows - 0.01;   
      this.player.vel.y = 0; 
      this.player.isJumping = false; // added
    }
  }

  checkTopLeftCorner() {
    let top = Math.floor(this.player.getTop / this.gridSize);
    let left = Math.floor(this.player.getLeft / this.gridSize);
    let value  = this.gridMap[top * this.gameColumns + left];
    this.gridCollisionType(value, left * this.gridSize, top * this.gridSize);
  }

  checkTopRightCorner() {
    let top = Math.floor(this.player.getTop / this.gridSize);
    let right = Math.floor(this.player.getRight / this.gridSize);
    let value  = this.gridMap[top * this.gameColumns + right];
    this.gridCollisionType(value, right * this.gridSize, top * this.gridSize);
  }

  checkBottomLeftCorner() {
    let bottom = Math.floor(this.player.getBottom / this.gridSize);
    let left = Math.floor(this.player.getLeft / this.gridSize);
    let value  = this.gridMap[bottom * this.gameColumns + left];
    this.gridCollisionType(value, left * this.gridSize, bottom * this.gridSize);
  }

  checkBottomRightCorner() {
    let bottom = Math.floor(this.player.getBottom / this.gridSize);
    let right = Math.floor(this.player.getRight / this.gridSize);
    let value  = this.gridMap[bottom * this.gameColumns + right];
    this.gridCollisionType(value, right * this.gridSize, bottom * this.gridSize);
  }

  collidePlatformTop(tile_top) { 
    if (this.player.getBottom > tile_top && this.player.getOldBottom <= tile_top) {
      this.player.setBottom = tile_top - 0.01;
      this.player.vel.y  = 0;
      this.player.isJumping = false; // added
      return true;
    } 
    return false;
  }

  collidePlatformBottom(tile_bottom) {
    if (this.player.getTop < tile_bottom && this.player.getOldTop >= tile_bottom) {
      this.player.setTop = tile_bottom;
      this.player.vel.y  = 0;
      return true;
    } 
    return false;
  }

  collidePlatformLeft(tile_left) {
    if (this.player.getRight > tile_left && this.player.getOldRight <= tile_left) {
      this.player.setRight = tile_left - 0.01;
      this.player.vel.x = 0;
      return true;
    } 
    return false;
  }

  collidePlatformRight(tile_right) {
    if (this.player.getLeft < tile_right && this.player.getOldLeft >= tile_right) {
      this.player.setLeft = tile_right;
      this.player.vel.x = 0;
      return true;
    } 
    return false;
  }
}