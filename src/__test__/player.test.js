import Player from "../js/player";

describe("Player", () => {
  let player;
  let initial_position;

  beforeEach(() => {
    player = new Player(9, 16, 30)
    player.setTop = 0
    player.setLeft = 0
    initial_position = {
      x: player.position.x,
      y: player.position.y
    }
  })

  test("player can move to the right", () => {
    player.moveRight()
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x + player.groundSpeed)
  })

  test("player can move to the left", () => {
    player.moveLeft()
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x - player.groundSpeed)
  })

  test("player can jump to the right", () => {
    player.jumpRight()
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x + player.airSpeed)
    expect(player.position.y).toEqual(initial_position.y - player.jumpSpeed)
  })

  test("jump distance target is set jumpRight()", () => {
    player.jumpRight()
    expect(player.jumpDistance).toEqual(initial_position.x + 3 * 30)
  })

  test("jump distance target is set jumpLeft()", () => {
    player.jumpLeft()
    expect(player.jumpDistance).toEqual(initial_position.x - 3 * 30)
  })

  test("player can jump to the left", () => {
    player.jumpLeft()
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x - player.airSpeed)
    expect(player.position.y).toEqual(initial_position.y - player.jumpSpeed)
  })

  test("player starts moving when passed a command to moveRight()", () => {
    player.start(['hero.moveRight()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x + player.groundSpeed)
  })

  test("player starts moving when passed a command to moveLeft()", () => {
    player.start(['hero.moveLeft()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x - player.groundSpeed)
  })

  test("player starts moving when passed a command to jumpRight()", () => {
    player.start(['hero.jumpRight()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x + player.airSpeed)
    expect(player.position.y).toEqual(initial_position.y - player.jumpSpeed)
  })

  test("player starts moving when passed a command to jumpLeft()", () => {
    player.start(['hero.jumpLeft()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x - player.airSpeed)
    expect(player.position.y).toEqual(initial_position.y - player.jumpSpeed)
  })

  // test("player is drawn on canvas", () => {
  //   let ctx = {
  //     fillStyle: '',
  //     fillRect:  function () { return 'changed' }
  //   }
  //   expect(player.draw(ctx)).toEqual('changed')
  // })

  test("can get player side positions", () => {
    expect(player.getBottom).toEqual(initial_position.y + player.height)
    expect(player.getTop).toEqual(initial_position.y)
    expect(player.getLeft).toEqual(initial_position.x)
    expect(player.getRight).toEqual(initial_position.x + player.width)
  })

  test("can get old player side positions", () => {
    player.jumpRight()
    player.update(0.1)
    expect(player.getOldBottom).toEqual(initial_position.y + player.height)
    expect(player.getOldTop).toEqual(initial_position.y)
    expect(player.getOldLeft).toEqual(initial_position.x)
    expect(player.getOldRight).toEqual(initial_position.x + player.width)
  })

  test("can set player side positions", () => {
    player.setBottom = 2.34;
    expect(player.position.y).toEqual(initial_position.y - player.height + 2.34)
    player.setTop = 2.34;
    expect(player.position.y).toEqual(initial_position.y + 2.34)
    player.setLeft = 2.34;
    expect(player.position.x).toEqual(initial_position.x + 2.34)
    player.setRight = 2.34;
    expect(player.position.x).toEqual(initial_position.x - player.width + 2.34)
  })

  test("updating player", () => {
    player.update()
    expect(player.position.x).toEqual(player.vel.x)
  })

  test("limiting move distance", () => {
    player._limitMoveDistance()
    expect(player.vel.x).toEqual(0)
  })

  test("limit jump distance", () => {
    player.isJumping = true 
    player._limitJumpDistance()
    expect(player.vel.x).toEqual(0)
  })

  test("restarting position", () => {
    player.jumpRight()
    player.jumpRight()
    player.moveRight()
    player.jumpLeft()
    player.jumpRight()
    player.moveLeft()
    player.resetPosition()
    expect(player.position.x).toEqual(player.gridSize)
    expect(player.position.y).toEqual(player.gridSize * player.gameRows - player.height - 4 * player.gridSize,)
  })
}) 