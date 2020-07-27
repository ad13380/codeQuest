export default class Animation {
  constructor(player, frameClass) {
    this.player = player;
    this.frameClass = frameClass;
    this.thresh_y = 2 // this will need to be adjusted depending on grid size
    this.thresh_x = 0.7 // this will need to be adjusted depending on grid size
    this._setPlayerTileset()
    this._setFramesArray()
    this._setFrameSets()
    this._setInitialFrameSetAndValue()
  }

  update(ctx) {
    this._updateFrameSet()
    this._drawPlayer(ctx)
    this._updateFrameValue()

    // this._updateFrameValue()

    // update animation depending on player movement
    // run the loop (go to the next frame in the frame set)

    // draw
  }

  _drawPlayer(ctx) {
    let frame = this.frames[this.frameValue];

    ctx.drawImage(this.sheetImage,
      frame.x, 
      frame.y,
      this.tileSize,
      this.tileSize,
      this.player.position.x,
      this.player.position.y + frame.offset_y,
      this.player.width * 1.2,
      this.player.height,
      )
  }

  _updateFrameSet() {
    if(this.player.vel.y < -1 * this.thresh_y && this.player.isJumping) {
      if(this.player.x_direction > 0) { this._changeFrameSet('jump-right', 3) } 
      else { this._changeFrameSet('jump-left', 3) }

    } else if (this.player.vel.y > this.thresh_y) {
      if(this.player.x_direction > 0) { this._changeFrameSet('falling-right', 6) } 
      else { this._changeFrameSet('falling-left', 6) }

    } else if(this.player.x_direction > 0 && !this.player.isJumping) {
      if(this.player.vel.x > this.thresh_x ) { this._changeFrameSet('move-right', 5) } 
      else { this._changeFrameSet('idle-right', 10) }

    } else if(this.player.x_direction < 0 && !this.player.isJumping) {
      if(this.player.vel.x < -1 * this.thresh_x) { this._changeFrameSet('move-left', 5) } 
      else { this._changeFrameSet('idle-left', 10) }
    }
  }

  _updateFrameValue() {
    this.count ++;
    while(this.count > this.frameDelay) {
      this.count -= this.frameDelay;
      // this can be refactored
      this.frameIndex = (this.frameIndex < this.frameSet.length - 1) ? this.frameIndex += 1 : 0;
      this.frameValue = this.frameSet[this.frameIndex];
    }
  }

  _changeFrameSet(frameSet, frameDelay, frameIndex = 0) {
    if (this.frameSet === this.frameSets[frameSet]) { return; }

    this.count       = 0;
    this.frameDelay  = frameDelay;
    this.frameSet    = this.frameSets[frameSet];
    this.frameIndex  = frameIndex;
    this.frameValue  = this.frameSet[frameIndex];
  }

  _setPlayerTileset() {
    this.sheetImage = new Image();
    this.sheetImage.src = "./assets/adventurer-sprite.png";
    this.tileSize = 37;
  }

  _setFramesArray() {
    this.frames = [// idle-right
                   new this.frameClass(0, 0, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(1 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(2 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(3 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 2),
                   // move-right  
                   new this.frameClass(4 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 1),
                   new this.frameClass(5 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 1),
                   new this.frameClass(6 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 1),
                   new this.frameClass(7 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 1),
                   new this.frameClass(8 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 1),
                   new this.frameClass(9 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 1),
                   // jumping-right
                   new this.frameClass(10 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(11 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(12 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(13 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(14 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(15 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(16 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   // falling-right
                   new this.frameClass(17 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   new this.frameClass(18 * this.tileSize, 0, this.tileSize, this.tileSize, 0, 0),
                   // idle-left
                   new this.frameClass(18 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(17 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(16 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(15 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   // move-left 
                   new this.frameClass(14 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(13 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(12 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(11 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(10 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(9 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(8 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   // jumping-right
                   new this.frameClass(8 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(7 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(6 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(5 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(4 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(3 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(2 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   // falling-right
                   new this.frameClass(1 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                   new this.frameClass(0 * this.tileSize, 1 * this.tileSize, this.tileSize, this.tileSize, 0, 2),
                  ]
  }

  _setFrameSets() {
    this.frameSets  = {
      'idle-right'    : [0, 1, 2, 3],
      'move-right'    : [4, 5, 6, 7, 9], 
      'jump-right'    : [11, 12, 13, 14, 15, 16, 13, 13, 13, 13],
      'falling-right' : [17, 18],
      'idle-left'     : [19, 20, 21, 22],
      'move-left'     : [23, 24, 25, 26, 28], 
      'jump-left'     : [30, 31, 32, 33, 34, 35, 32, 32, 32, 32],
      'falling-left' : [37, 38],
    }
  }

  _setInitialFrameSetAndValue() { // initial animation condition / may not need if you have an idle/falling
    this.count       = 0;
    this.frameDelay  = 10; 
    this.frameSet    = this.frameSets['idle-right'];
    this.frameIndex = 0;
    this.frameValue = this.frameSet[this.frameIndex];
  }
}