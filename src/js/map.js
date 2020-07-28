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
    let xCheck = this.winningTile.x === Math.round(this.player.position.x / this.GRID_SIZE);
    let yCheck = this.winningTile.y === Math.round(this.player.position.y / this.GRID_SIZE);
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
      case 0: // free tile
        this.ctx.fillStyle = "#FFFFFF"
        break;
      case 1: // floor
        this.ctx.fillStyle = "#D8C1A4"
        break; 
      case 2: // obstacle
        this.ctx.fillStyle = "#B7E1D2"
        break;
      case 3: // platform
        this.ctx.fillStyle = "#B6D3DA" 
        break;
      case 4: // wall left
        this.ctx.fillStyle = "#DFB6DA"
        break;
      case 5: // wall right
        this.ctx.fillStyle = "#DFB6B6"
        break;
      case 6: // winning tile
        this.ctx.fillStyle = "#FFFF00"
        break;
    }
  }
}
