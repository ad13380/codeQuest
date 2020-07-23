export default class Map {
  constructor(player, ctx, gridMap, gridSize, gameWidth, gameHeight) {
    this.player = player
    this.ctx = ctx
    this.gridMap = gridMap
    this.GRID_SIZE = gridSize
    this.GAME_WIDTH = gameWidth
    this.GAME_HEIGHT = gameHeight
  }

  isWithinX() {
    if (this.player.position.x < 0) this.player.position.x = 0;
    if (this.player.position.x + this.player.width > this.player.gameWidth)
      this.player.position.x = this.player.gameWidth - this.player.width;
  }

   drawMap() {
    for (let index = 0; index < this.gridMap.length; index++) {
      this.ctx.fillStyle = (this.gridMap[index] === 1) ? "#B7DFE1" : "#CCF2F4";
      this.ctx.fillRect((index % 16) * this.GRID_SIZE, Math.floor(index / 16) * this.GRID_SIZE, this.GRID_SIZE, this.GRID_SIZE);
    }
  }


  clearMap(){
    this.ctx.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);
  }

}
