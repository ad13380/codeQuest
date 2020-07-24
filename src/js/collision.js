export default class Collision {
  constructor(player, gridMap, gridSize, gameRows, gameColumns) {
    this.player = player;
    this.gridMap = gridMap;
    this.gridSize = gridSize;
    this.gameRows = gameRows
    this.gameColumns = gameColumns;
  }

  detect() {
    let value_at_index = this.gridMap[this.player.tilePosition.y * this.gameColumns + this.player.tilePosition.x]
    this._collisionObject[value_at_index]()
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

  topCollision() {
    if (this.player.vel.y > 0) {

      var topSide = this.player.tilePosition.y * this.gridSize;

      if (this.player.position.y + this.player.height > topSide) {
        this.player.vel.y = 0;
        this.player.position.y = topSide - this.player.height;
        return true;
      }
    }
    return false;
  }

  get _collisionObject() {
    return {
      0: () => {},
      1: () => { this.topCollision(); },
      2: () => { this.leftCollision(); }
    }
  }

  _pushBack(increment) {
    this.player.vel.x = increment * (1 - this.player.friction);
  }
}