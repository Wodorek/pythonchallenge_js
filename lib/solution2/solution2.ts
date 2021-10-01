const solution2 = (text: string) => {
  const counts: { [string: string]: number } = {};

  text.split('').forEach((el: string) => {
    if (!Object.keys(counts).includes(el)) {
      counts[el] = 1;
    } else {
      counts[el] += 1;
    }
  });

  Object.keys(counts).forEach((key) => {
    if (counts[key] > 1) {
      delete counts[key];
    }
  });

  return Object.keys(counts).join('');
};

export default solution2;
