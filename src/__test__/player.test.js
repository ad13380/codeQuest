import Player from "../js/player";

describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player(600, 800)
  })

  test("test player construncts width and height", () => {
    expect(player.gameWidth).toEqual(800)
    expect(player.gameHeight).toEqual(600)
  } )

}) // describe

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Play!/i);
//   expect(linkElement).toBeInTheDocument();
// });
