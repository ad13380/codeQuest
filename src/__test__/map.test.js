import Player from "../js/player";
import Map from "../js/map";

jest.mock("../js/player")

describe("Map", () => {
  let map;
  let player;

  beforeEach(() => {
    player = new Player()
    map = new Map(player, "ctx", "gridMap", "gridSize", "gameRows", "gameColumns", "winningTile")
    Player.mockClear()
  })

  test("if player is being stored correctly", () => {
    expect(map.player).toBeInstanceOf(Player)

  })

  test('Returns value of gameOver variable', () => {
    expect(map.isLevelOver()).toEqual(false)
  })

  test('Returns an object containing the tile styles for the map', () => {
    expect(map.tileStyle).toBeInstanceOf(Object)
  })


})
