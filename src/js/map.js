export default class Map {
  constructor(player, ctx, gridMap, gridSize, gameWidth, gameHeight, winningTile) {
    this.player = player
    this.ctx = ctx
    this.gridMap = gridMap
    this.GRID_SIZE = gridSize
    this.GAME_WIDTH = gameWidth
    this.GAME_HEIGHT = gameHeight
    this.winningTile = winningTile
  }

  isWithinX() {
    if (this.player.position.x < 0) this.player.position.x = 0;
    if (this.player.position.x + this.player.width > this.player.gameWidth)
      this.player.position.x = this.player.gameWidth - this.player.width;
  }

  drawMap() {
    for (let index = 0; index < this.gridMap.length; index++) {
      this._selectGridStyle(index)
      this.ctx.fillRect((index % 16) * this.GRID_SIZE, Math.floor(index / 16) * this.GRID_SIZE, this.GRID_SIZE, this.GRID_SIZE);
    }
  }

  // checkWin() {
  //   let xCheck = this.winningTile.x === Math.floor(this.player.position.x / this.GRID_SIZE);
  //   let yCheck = this.winningTile.y === Math.floor(this.player.position.y / this.GRID_SIZE);
  //   let playerVel = this.player.vel.x === 0 && this.player.vel.y === 0
  //   if (xCheck && yCheck && playerVel) alert('Win')
  // }

  clearMap() {
    this.ctx.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);
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
    }
  }
}
