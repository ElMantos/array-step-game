import generateRandomArray from './generateRandomArray';

const testCases = [
  [4, 12],
  [20, 24],
  [21, 7],
  [5, 45],
];

test.each(testCases)(
  'Should generate array of given legth with given maximum value',
  (length, max) => {
    const array = generateRandomArray(length, max);
    expect(array.length).toBe(length);
    expect(Math.max(...array)).toBeLessThanOrEqual(max);
  }
);
