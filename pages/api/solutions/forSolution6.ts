import { NextApiRequest, NextApiResponse } from 'next';
import StreamZip from 'node-stream-zip';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const zip = new StreamZip.async({
    file: 'D:\\GitRepos\\pythonchallenge_js\\materials\\challenge6\\channel.zip',
  });

  const entries = await zip.entries();
  const initialBuffer = await zip.entryData('94191.txt');
  let fileText = initialBuffer.toString();

  const comments = [];

  while (fileText.match(/[0-9]+/g)) {
    const identifier = fileText.match(/[0-9]+/g);
    const newBuffer = await zip.entryData(`${identifier}.txt`);
    if (!identifier) {
      fileText = newBuffer.toString();
      comments.push(entries[`${identifier}.txt`].comment);
      break;
    }
    fileText = newBuffer.toString();
    comments.push(entries[`${identifier}.txt`].comment);
  }

  return res.status(200).json({ comments: comments });
};

export default handler;
