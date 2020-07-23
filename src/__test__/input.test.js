import Input from "../js/input";
import Player from "../js/player";

jest.mock("../js/player");

describe("Input", () => {
  let input;
  let player;

  beforeEach(() => {
    player = new Player()
    input = new Input(player)
    Player.mockClear()
  })

  test("if player is being stored correctly", () => {
    expect(input.player).toBeInstanceOf(Player)
  })

  test("if class has a list of valid input", () => {
    expect(input.validInputs).toEqual(['player.moveRight()', 'player.moveLeft()'])
  })

  test("if class has a empty input array", () => {
    expect(input.inputArray).toEqual([])
  })



})
