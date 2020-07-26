import Player from "../js/player";

describe("Player", () => {
  let player;
  let moveRight;
  let moveLeft;
  let initial_position;

  beforeEach(() => {
    player = new Player(600, 800, 30)
    initial_position = {
      x: player.position.x,
      y: player.position.y
    }
    moveRight = ["player.moveRight()"]
    moveLeft = ["player.moveLeft()"]
  })

  test("test player construncts width and height", () => {
    expect(player.gameWidth).toEqual(800)
    expect(player.gameHeight).toEqual(600)
  } )

  test("player can move to the right", () => {
    player.moveRight()
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x + player.speed )
  } )

  test("player can move to the left", () => {
    player.moveLeft()
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x - player.speed )
  } )

  test("player starts moving when passed a single moveRight", () => {
    player.start(moveRight)
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x + player.speed )
  } )

  test("player starts moving when passed a single moveLeft", () => {
    player.start(moveLeft)
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x - player.speed )
  } )

  test("player is drawn on canvas", () => {
    let ctx = {
      fillStyle: '',
      drawImage:  function () { return 'changed' }
    }
    expect(player.draw(ctx)).toEqual('changed')
  })
}) // describe

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Play!/i);
//   expect(linkElement).toBeInTheDocument();
// });
