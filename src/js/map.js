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
    this._setTileset()
    this._setBackgroundImage()
  }

  drawMap() {
    this.ctx.drawImage(this.backgroundImage, 0, 0, this.GRID_SIZE * this.GAME_COLUMNS, this.GRID_SIZE * this.GAME_ROWS)

    for (let index = 0; index < this.gridMap.length; index++) {
      // this._selectGridStyle(index)
      // this.ctx.fillRect((index % this.GAME_COLUMNS) * this.GRID_SIZE, Math.floor(index / this.GAME_COLUMNS) * this.GRID_SIZE, this.GRID_SIZE, this.GRID_SIZE);

      let source_x = this.tileStyle[this.gridMap[index]][0] * this.tileSize;
      let source_y = this.tileStyle[this.gridMap[index]][1] * this.tileSize;

      this.ctx.drawImage(this.sheetImage, source_x ,  source_y, this.tileSize, this.tileSize, 
                        (index % this.GAME_COLUMNS) * this.GRID_SIZE, 
                        Math.floor(index / this.GAME_COLUMNS) * this.GRID_SIZE, 
                        this.GRID_SIZE, this.GRID_SIZE)
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

  get tileStyle() {
    return {
      0: [0, 0], 1: [3, 6], 2: [5, 4], 3: [3, 10], 4: [3, 6], 5: [9, 10],
      6: [1, 4],
      // floor
      11: [3, 6], 12: [5, 6], 13: [7, 6],
      // platform
      21: [1, 10], // scaffold
      22: [3, 10], // plat w/ scaffold
      23: [5, 10], // plat w/o scaffold
      // obstacle
      31: [5, 4], // obstacle w/ scaffold
      32: [7, 4], // obstacle brick left
      33: [9, 4], // obstacle brick 
      34: [1, 6], // obstacle brick right
      35: [9, 6], // ground obstacle - 2
      36: [1, 8], // ground obstacle - 2
      37: [3, 8], // ground obstacle - 3
      38: [5, 8], // ground obstacle - 4      
      39: [7, 8], // ground obstacle - 5
      40: [9, 8], // ground obstacle - 6
      // dark
      51: [1, 2], // dark - 1
      52: [3, 2], // dark - 1
      53: [5, 2], // dark - 1
      // construction
      61: [7, 2],
      62: [9, 2],
      63: [1, 4],
      64: [3, 4],

      // winning tile (to change)
      99: [1, 4]
    }
  }

  _setTileset() {
    this.sheetImage = new Image();
    this.sheetImage.src = "./assets/tile-sprite.png";
    this.tileSize = 48;
  }

  _setBackgroundImage() {
    this.backgroundImage = new Image();
    this.backgroundImage.src = './assets/canvas-background.png'
  }
}
