import resolveArrayGame from './resolveArrayGame';

it('Should pass the game', () => {
  expect(resolveArrayGame([1, 1, 1, 0])).toEqual([0, 1, 2, 3]);
  expect(resolveArrayGame([2, 0, 3, 0, 0, 0])).toEqual([0, 2, 5]);
});

it('Should not pass the game', () => {
  expect(resolveArrayGame([0, 0])).toBeFalsy();
  expect(resolveArrayGame([1, 2, 0, 0, 0])).toBeFalsy();
});
