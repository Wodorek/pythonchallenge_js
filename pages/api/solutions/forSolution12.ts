import path from 'path';
import fs from 'fs';

const handler = async () => {
  const filepath = path.resolve('./public/solution12');

  const source = fs.readFileSync(`${filepath}/evil2.gfx`);

  //create array for "piles" of bytes
  const buffers: number[][] = [];

  //create piles
  for (let i = 0; i < 5; i++) {
    buffers.push([]);
  }

  //deal bytes into plies, one by one, like cards
  for (let i = 0; i < source.length; i += 5) {
    for (let j = 0; j < 5; j++) {
      buffers[j].push(source[i + j]);
    }
  }

  //create files from buffers
  for (let i = 0; i < 5; i++) {
    const file = fs.openSync(`${filepath}/${i}.jpg`, 'w');

    const buffer = Buffer.from(buffers[i]);

    fs.writeFileSync(file, buffer);
  }
};

export default handler;
