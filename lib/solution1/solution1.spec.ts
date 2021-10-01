import solution1 from './solution1';

it('shifts characters excluding end of the alphabet', () => {
  expect(solution1('abc', 2)).toBe('cde');
  expect(solution1('aaa', 10)).toBe('kkk');
});

it('shifts characters including end of the alphabet', () => {
  expect(solution1('xyz', 2)).toBe('zab');
  expect(solution1('zyx', 10)).toBe('jih');
});

it('actually solves the challenge', () => {
  expect(
    solution1(
      `g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.`,
      2
    )
  ).toBe(
    `i hope you didnt translate it by hand. thats what computers are for. doing it in by hand is inefficient and that's why this text is so long. using string.maketrans() is recommended. now apply on the url.`
  );
});
