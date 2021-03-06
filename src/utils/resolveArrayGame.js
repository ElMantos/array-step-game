const resolveArrayGame = (numbers, startIndex = 0, currentJumps = []) => {
  if (startIndex === numbers.length - 1) {
    return [0, ...currentJumps];
  }

  const maxJumpLength = Math.min(numbers[startIndex], numbers.length - 1 - startIndex);

  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    const nextIndex = startIndex + jumpLength;
    currentJumps.push(nextIndex);

    const isJumpSuccessful = resolveArrayGame(numbers, nextIndex, currentJumps);

    if (isJumpSuccessful) {
      return [0, ...currentJumps];
    }

    currentJumps.pop();
  }

  return false;
};

export default resolveArrayGame;
