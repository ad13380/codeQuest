import Player from "../js/player";

describe("Player", () => {
  let player;
  let initial_position;

  beforeEach(() => {
    player = new Player(9, 16, 30)
    initial_position = {
      x: player.position.x,
      y: player.position.y
    }
  })

  test("player can move to the right", () => {
    player.moveRight()
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x + player.speed )
  } )

  xtest("player can move to the left", () => {
    player.moveLeft()
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x - player.speed )
  } )

  xtest("player starts moving when passed a single moveRight", () => {
    player.start('player.moveRight()')
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x + player.speed )
  } )

  xtest("player starts moving when passed a single moveLeft", () => {
    player.start('player.moveLeft()')
    player.update('deltaTime')
    expect(player.position.x).toEqual(initial_position.x - player.speed )
  } )

  xtest("player is drawn on canvas", () => {
    let ctx = {
      fillStyle: '',
      fillRect:  function () { return 'changed' }
    }
    expect(player.draw(ctx)).toEqual('changed')
  })
}) // describe

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Play!/i);
//   expect(linkElement).toBeInTheDocument();
// });
