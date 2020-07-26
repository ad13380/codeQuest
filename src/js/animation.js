export default class Animation {
  constructor(player, frameClass) {
    this.player = player;
    this.frameClass = frameClass;
    this.thresh = 1 // this will need to be adjusted
    this._setPlayerTileset()
    this._setFramesArray()
    this._setFrameSets()
    this._setInitialAnimation()
  }

  update() {
    this._updateFrameSet()
    // update animation depending on player movement
    // run the loop (go to the next frame in the frame set)
    // this._updateFrame()
    // draw


  }

  _updateFrameSet() {
    if(this.player.vel.y < -1 * this.thresh && this.player.isJumping) {
      if(this.player.x_direction > 0) { console.log('jumping right') } 
      else { console.log('jumping left') }

    } else if (this.player.vel.y > this.thresh) {
      if(this.player.x_direction > 0) { console.log('falling right') } 
      else { console.log('falling left') }

    } else if(this.player.x_direction > 0 && !this.player.isJumping) {
      if(this.player.vel.x > this.thresh ) { console.log('moving right') } 
      else { console.log('idle right') }

    } else if(this.player.x_direction < 0 && !this.player.isJumping) {
      if(this.player.vel.x < -1 * this.thresh) { console.log('moving left') } 
      else { console.log('idle left') }
    }
  }

  _updateFrame() {
    this.count ++;
    while(this.count > this.delay) {
      this.count -= this.frameDelay;
      // this can be refactored
      this.frameIndex = (this.frameIndex < this.frameSet.length - 1) ? this.frameIndex + 1 : 0;
      this.frameValue = this.frameSet[this.frameIndex];
    }
  }

  _changeFrameSet(frameSet, mode, delay, frameIndex = 0) {
    if (this.frameSet === frameSet) { return; }

    this.count       = 0;
    this.frameDelay  = delay;
    this.frameSet   = frameSet;
    this.frameIndex = frameIndex;
    this.frameValue = frameSet[frameIndex];
    this.mode        = mode;
  }

  _setPlayerTileset() {
    this.playerSheetImage = new Image();
    this.playerSheetImage.src = "./assets/adventurer-sprite.png";
    this.playerTileSize = 37;
    this.playerSheetColumns = 19;
  }

  _setFramesArray() {
    this.frames = [// idle-right
                   new this.frameClass(0, 0, this.playerTileSize, this.playerTileSize, 0, 0),
                   new this.frameClass(1 * this.playerTileSize, 0, this.playerTileSize, this.playerTileSize, 0, 0),
                   new this.frameClass(2 * this.playerTileSize, 0, this.playerTileSize, this.playerTileSize, 0, 0),
                   new this.frameClass(3 * this.playerTileSize, 0, this.playerTileSize, this.playerTileSize, 0, 0),  
                  ]
  }

  _setFrameSets() {
    this.frameSets  = {
      "idle-right" : [0, 1, 2, 3]
    }
  }

  _setInitialAnimation(frameDelay = 5) { // initial animation condition / may not need if you have an idle/falling
    this.count       = 0;
    this.frameDelay  = 5; //(frameDelay >= 1) ? frameDelay : 1;
    this.frameSet    = this.frameSets["idle-right"];
    this.frameIndex = 0;
    this.frameValue = this.frameSet[this.frameIndex];
    this.mode        = "loop";
  }
}