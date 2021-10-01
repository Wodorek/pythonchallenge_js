import solution2 from './solution2';

it('returns correct string', () => {
  const string1 = 'aaabbb111222;;;|||.-';
  const string2 = 'abc123;[';
  const string3 = '';

  expect(solution2(string1)).toBe('.-');
  expect(solution2(string2)).toBe('123abc;[');
  expect(solution2(string3)).toBe('');
});
