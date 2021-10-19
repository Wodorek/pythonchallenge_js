import compressjs from 'compressjs';
import { NextApiRequest, NextApiResponse } from 'next';

const forSolution8 = async (req: NextApiRequest, res: NextApiResponse) => {
  const un =
    'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084';
  const pw =
    'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08';

  const algorithm = compressjs.Bzip2;

  const unBuffer = Buffer.from(un, 'ascii');
  const pwBuffer = Buffer.from(pw, 'ascii');

  //decompress and convert buffer to utf-8 string
  const decompressedUn = Buffer.from(
    algorithm.decompressFile(unBuffer)
  ).toString('utf-8');
  const decompressedPw = Buffer.from(
    algorithm.decompressFile(pwBuffer)
  ).toString('utf-8');

  return res.status(200).json({ decompressedUn, decompressedPw });
};

export default forSolution8;
