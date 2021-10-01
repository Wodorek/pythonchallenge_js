import solution0 from './solution0';

it('raises to positive power correctly', () => {
  expect(solution0(10, 5)).toBe(100000);
});

it('raises to negative power correctly', () => {
  expect(solution0(10, -5)).toBeCloseTo(0.00001);
});
