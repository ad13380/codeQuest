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
    expect(player.position.x).toEqual(initial_position.x + player.groundSpeed + player.offSet)
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
    player.start(['player.moveRight()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x + player.groundSpeed + player.offSet)
  })

  test("player starts moving when passed a command to moveLeft()", () => {
    player.start(['player.moveLeft()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x - player.groundSpeed)
  })

  test("player starts moving when passed a command to jumpRight()", () => {
    player.start(['player.jumpRight()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x + player.airSpeed)
    expect(player.position.y).toEqual(initial_position.y - player.jumpSpeed)
  })

  test("player starts moving when passed a command to jumpLeft()", () => {
    player.start(['player.jumpLeft()'])
    player.update(0.1)
    expect(player.position.x).toEqual(initial_position.x - player.airSpeed)
    expect(player.position.y).toEqual(initial_position.y - player.jumpSpeed)
  })

  test("player is drawn on canvas", () => {
    let ctx = {
      fillStyle: '',
      fillRect:  function () { return 'changed' }
    }
    expect(player.draw(ctx)).toEqual('changed')
  })

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
}) 