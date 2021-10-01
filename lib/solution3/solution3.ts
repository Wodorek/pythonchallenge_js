const solution3 = (text: string) => {
  const matches = text.match(/[a-z][A-Z]{3}([a-z])[A-Z]{3}[a-z]/g);

  const letters = matches?.map((match: string) => {
    return match[4];
  });

  if (!matches) {
    return '';
  }

  return letters?.join('') as string;
};

export default solution3;
