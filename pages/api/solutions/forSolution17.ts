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

  // the finished and decoded string from cookies looks like this:
  //   const str =
  //   'BZh91AY&SY\x94:\xe2I\x00\x00!\x19\x80P\x81\x11\x00\xafg\x9e\xa0 \x00hE=M\xb5#\xd0\xd4\xd1\xe2\x8d\x06\xa9\xfa&S\xd4\xd3!\xa1\xeai7h\x9b\x9a+\xbf`"\xc5WX\xe1\xadL\x80\xe8V<\xc6\xa8\xdbH&32\x18\xa8x\x01\x08!\x8dS\x0b\xc8\xaf\x96KO\xca2\xb0\xf1\xbd\x1du\xa0\x86\x05\x92s\xb0\x92\xc4Bc\xf1w$S\x85\t\tC\xae$\x90';

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
