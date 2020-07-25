export default class Map {
  constructor(player, ctx, gridMap, gridSize, gameRows, gameColumns, winningTile) {
    this.player = player;
    this.ctx = ctx;
    this.gridMap = gridMap;
    this.GRID_SIZE = gridSize;
    this.GAME_ROWS = gameRows;
    this.GAME_COLUMNS = gameColumns;
    this.winningTile = winningTile;
    this.gameOver = false
  }

  drawMap() {
    for (let index = 0; index < this.gridMap.length; index++) {
      this._selectGridStyle(index)
      this.ctx.fillRect((index % this.GAME_COLUMNS) * this.GRID_SIZE, Math.floor(index / this.GAME_COLUMNS) * this.GRID_SIZE, this.GRID_SIZE, this.GRID_SIZE);
    }
  }

  checkWin() {
    let xCheck = this.winningTile.x === Math.floor(this.player.position.x / this.GRID_SIZE);
    let yCheck = this.winningTile.y === Math.floor(this.player.position.y / this.GRID_SIZE);
    if (xCheck && yCheck) this.gameOver = true
  }

  clearMap() {
    this.ctx.clearRect(0, 0, this.gridSize * this.GAME_COLUMNS, this.gridSize * this.GAME_ROWS);
  }

  isLevelOver() {
    return this.gameOver
  }

  _selectGridStyle(index) {
    // eslint-disable-next-line default-case
    switch (this.gridMap[index]) {
      case 0:
        this.ctx.fillStyle = "#CCF2F4"
        break;
      case 1:
        this.ctx.fillStyle = "#B7DFE1"
        break;
      case 2:
        this.ctx.fillStyle = "#E1C0B7"
        break;
    }
  }
}
