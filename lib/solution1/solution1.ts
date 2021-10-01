const solution1 = (string: string, shiftBy: number) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const splitString = string.split('');

  const shiftedString = splitString.map((char) => {
    const letterIdx = letters.findIndex((letter) => {
      return letter === char;
    });

    if (letterIdx === -1) {
      return char;
    }

    //wrapping around the letters arr
    if (letterIdx + shiftBy >= letters.length) {
      return letters[letterIdx + shiftBy - letters.length];
    }

    return letters[letterIdx + shiftBy];
  });

  return shiftedString.join('');
};

export default solution1;
