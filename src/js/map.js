export default class Map {
  constructor(player, ctx) {
    this.player = player
  }

  isWithinX() {
    if (this.player.position.x < 0) this.player.position.x = 0;
    if (this.player.position.x + this.player.width > this.player.gameWidth)
      this.player.position.x = this.player.gameWidth - this.player.width;
  }
}