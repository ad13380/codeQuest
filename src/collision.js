export default class Collision {
  constructor(player, gridMap, gridSize) {
    this.player = player;
    this.gridMap = gridMap;
    this.gridSize = gridSize;
  }

  get collisionObject() {
    return {
      0: () => {},
      2: () => { this.leftCollision(); }
    }
  }

  leftCollision() {
    let leftSide = this.player.tilePosition.x * this.gridSize;
    if (this.player.vel.x > 0 && this.player.position.x + this.player.width * 0.5 > leftSide) {
      this.player.position.x = leftSide - this.gridSize * 0.5;
      this._pushBack(- this.gridSize * 0.5)
      return true;
    }
    return false;
  }

  _pushBack(increment) {
    this.player.vel.x = increment * (1 - this.player.friction);
  }
}