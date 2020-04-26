const resolveArrayGame = (numbers, startIndex = 0, currentJumps = []) => {
  if (startIndex === numbers.length - 1) {
    return true;
  }

  const maxJumpLength = Math.min(numbers[startIndex], numbers.length - 1 - startIndex);

  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    const nextIndex = startIndex + jumpLength;
    currentJumps.push(nextIndex);

    const isJumpSuccessful = resolveArrayGame(numbers, nextIndex, currentJumps);

    if (isJumpSuccessful) {
      return true;
    }

    currentJumps.pop();
  }

  return false;
};

export default resolveArrayGame;
