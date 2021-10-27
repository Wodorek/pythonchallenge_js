/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import xmlrpc from 'davexmlrpc';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'http://www.pythonchallenge.com/pc/phonebook.php';
  const format = 'xml';

  //check for available methods
  xmlrpc.client(
    url,
    'system.listMethods',
    [],
    format,
    (err: any, data: any) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(data);
    }
  );

  //find out what the method does, requires and returns
  xmlrpc.client(
    url,
    'system.methodHelp',
    ['phone'],
    format,
    (err: any, data: any) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(data);
    }
  );

  xmlrpc.client(
    url,
    'system.methodSignature',
    ['phone'],
    format,
    (err: any, data: any) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(data);
    }
  );

  //call the phone method for the solution
  xmlrpc.client(url, 'phone', ['Bert'], format, (err: any, data: any) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(data);
  });

  return res.status(200);
};
export default handler;
