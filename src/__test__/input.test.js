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
    expect(input.validInputs).toEqual(['player.moveRight()', 'player.moveLeft()', 'player.jumpRight()', 'player.jumpLeft()'])
  })

  test("if class has a empty input array", () => {
    expect(input.inputArray).toEqual([])
  })

  test('splits input with linebreaks into an array of inputs', () => {
    let string = ('test\ntest1   \n   \n   test2')
    input._stringToArray(string)
    expect(input.inputArray).toEqual(['test', 'test1', 'test2'])
  })

  test('_formatInput returns a trimmed string', () => {
    expect(input._formatInput('   trimMe   ')).toEqual('trimMe')
  })

  test('_isInputValid returns true when inputs are correct', () => {
    // let correctInput = 'player.moveRight()'
    // let wrongInput = 'fail me'
    // expect(input._isInputValid(correctInput)).toEqual(true)
    // expect(input._isInputValid(wrongInput)).toEqual(false)
    let correctString = ('player.moveRight()\nplayer.jumpRight()  \nplayer.jumpLeft()\nplayer.jumpRight()')
    input._stringToArray(correctString)
    expect(input._isInputValid()).toBe(true)

  })
  test('_isInputValid returns true when inputs are correct', () => {
    let correctString = ('player.moveRight()\nplayer.jumpRight()  \nplayer.jumpLeft()\nplayer.jumpRight()')
    input._stringToArray(correctString)
    expect(input._isInputValid()).toBe(true)

  })
  test('_isInputValid returns false when inputs are incorrect', () => {
    let incorrectString = ('player.moveRt()\nplayer.jumpRight()  \nplayer.jumpLeft()\nplayer.jumpRight()')
    input._stringToArray(incorrectString)
    expect(input._isInputValid()).toBe(false)
  })

})
