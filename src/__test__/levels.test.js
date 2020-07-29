import levels from '../levels'

describe('Levels', () => {
  test('Levels is an object that contains map, winningTile and instructions', () => {
    expect(levels[0].map).toEqual(expect.arrayContaining([0, 0, 0]))
    expect(levels[0].winningTile).toBeInstanceOf(Object)
    expect(typeof levels[0].instructions).toEqual('string')
  })
})