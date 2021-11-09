import solution17 from './solution17';

import compressjs from 'compressjs';

const solution17data = async () => {
  // let cookieInfo = await solution17(12345);

  // const cookieData: string[] = [];

  // while (cookieInfo.busynothing) {
  //   cookieData.push(cookieInfo.cookieInfo);
  //   cookieInfo = await solution17(cookieInfo.busynothing);
  // }

  // console.log(cookieData.join(''));

  //after decoding gives us this string:
  const str =
    'BZh91AY&SY\x94:\xe2I\x00\x00!\x19\x80P\x81\x11\x00\xafg\x9e\xa0 \x00hE=M\xb5#\xd0\xd4\xd1\xe2\x8d\x06\xa9\xfa&S\xd4\xd3!\xa1\xeai7h\x9b\x9a+\xbf`"\xc5WX\xe1\xadL\x80\xe8V<\xc6\xa8\xdbH&32\x18\xa8x\x01\x08!\x8dS\x0b\xc8\xaf\x96KO\xca2\xb0\xf1\xbd\x1du\xa0\x86\x05\x92s\xb0\x92\xc4Bc\xf1w$S\x85\t\tC\xae$\x90';

  fetch(`/api/solutions/forSolution17?decompress=1`, {
    method: 'POST',
    body: JSON.stringify(str),
  }).then((data) => {
    console.log(data);
  });
};

export default solution17data;
