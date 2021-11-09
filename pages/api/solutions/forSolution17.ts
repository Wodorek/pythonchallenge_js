import http from 'http';
import compressjs from 'compressjs';
import xmlrpc from 'davexmlrpc';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  //regex for finding next number
  const regex = /busynothing is [0-9]+/g;

  let matches: RegExpMatchArray | null = [];

  const url = `http://www.pythonchallenge.com/pc/def/linkedlist.php?busynothing=${req.query.busynothing}`;

  if (req.query.busynothing) {
    http.get(url, (resp) => {
      //TS
      if (!resp.headers['set-cookie']) return;

      //read the cookie, to see what to do next
      const cookie = resp.headers['set-cookie'][0];

      //get the info part from the cookie
      //this is ugly, but saves using outside package
      const cookieInfo = cookie.split('=')[1].split(';')[0];

      let data = '';

      //read resp daat
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        matches = data.match(regex);

        if (matches) {
          return res
            .status(200)
            .json({ cookieInfo, busynothing: matches[0].substr(15) });
        } else {
          return res.status(200).json({ busynothing: null });
        }
      });
    });
  }

  const decompress = (string: string) => {
    const algorithm = compressjs.Bzip2;

    const cookieBuffer = Buffer.from(string, 'ascii');

    const decompressedCookie = Buffer.from(
      algorithm.decompressFile(cookieBuffer)
    ).toString('utf-8');

    return decompressedCookie;
  };

  if (req.query.decompress) {
    const body = JSON.parse(req.body);

    const decompressed = decompress(body);

    console.log(decompressed);

    //logs:
    //is it the 26th already? call his father and inform him that "the flowers are on their way". he'll understand.

    //So lets call Mozart's father, Leopold, and tell him about the flowers.
    const url = 'http://www.pythonchallenge.com/pc/phonebook.php';
    const format = 'xml';

    xmlrpc.client(url, 'phone', ['Leopold'], format, (err: any, data: any) => {
      if (err) {
        console.log(err);
        return;
      }

      // logs 555-violin
      console.log(data);
    });

    const leopoldUrl = 'http://www.pythonchallenge.com/pc/stuff/violin.php';

    //Now, lets set a cookie at the violin address, to tell Leopold about the flowers
    http.get(
      leopoldUrl,
      {
        headers: {
          cookie: 'info=the flowers are on their way',
        },
      },
      (resp) => {
        let data = '';

        console.log(resp.headers['set-cookie']);

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          //logs oh well, don't you dare to forget the balloons.
          console.log(data);
        });
      }
    );
  }
  res.status(200).send('ok');
};

export default handler;
