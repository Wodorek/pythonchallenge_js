import http from 'http';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=${req.query.nothing}`;

  const regex = /nothing is [0-9]+/g;

  const request = http.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      const matches = data.match(regex);
      if (matches) {
        res.status(200).send({ matches: matches[0].substring(11) });
      } else if (data.includes('Yes')) {
        res.status(200).send({ halfWay: 'yes' });
      } else {
        res.status(200).send({ finished: data });
      }
    });
  });
  request.on('error', (err) => {
    console.log(err);
  });
};

export default handler;
