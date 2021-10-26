const solution10 = () => {
  //finds next number in the sequence
  const findNextTerm = (str: string) => {
    const matches = str.match(/(.)\1*/g);
    const nextTerm: string[] = [];
    matches?.forEach((match) => {
      nextTerm.push(`${match.length}${match[0]}`);
    });

    return nextTerm.join('');
  };

  //do 30 iterations of finding next term
  let currentTerm = '1';
  for (let i = 0; i < 30; i++) {
    const nextTerm = findNextTerm(currentTerm);
    currentTerm = nextTerm;
  }

  //logs 5808
  console.log(currentTerm.length);
};

export default solution10;
