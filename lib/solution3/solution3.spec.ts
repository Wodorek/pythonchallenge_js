import solution3 from './solution3';

it('returns correct string', () => {
  const string1 = 'AAAAAAAAAAaAAAAAAAAAaaaaAAAaAAAa';
  const string2 = 'aAAAtAAAzzAAAaAAAzzzAAAkAAAzzzzzzzzAAA';
  const string3 = '';

  expect(solution3(string1)).toBe('a');
  expect(solution3(string2)).toBe('tak');
  expect(solution3(string3)).toBe('');
});
