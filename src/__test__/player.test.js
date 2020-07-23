import Player from "../js/player";
import { wait } from "@testing-library/react";

describe("Player", () => {
  let player;
  let moveRight;
  let moveLeft;


  beforeEach(() => {
    player = new Player(600, 800, 30)
    moveRight = ["player.moveRight()"]
    moveLeft = ["player.moveLeft()"]
  })

  wait((ms) => {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    ); 
  });

  test("test player construncts width and height", () => {
    expect(player.gameWidth).toEqual(800)
    expect(player.gameHeight).toEqual(600)
  } )

  test("player can move to the right", () => {
    player.moveRight()
    expect(player.vel.x).toEqual(10)
  } )

  test("player can move to the left", () => {
    player.moveLeft()
    expect(player.vel.x).toEqual(-10)
  } )

  test("player starts moving when passed moves", () => {
    player.start(moveRight)
    expect(player.vel.x).toEqual(10)
    player.start(moveLeft)
    expect(player.vel.x).toEqual(-10)
  } )



}) // describe

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Play!/i);
//   expect(linkElement).toBeInTheDocument();
// });
