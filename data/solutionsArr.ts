import { ISolution } from '../interfaces';
import descStrings from './descStrings.json';
import codeStrings from './codeStrings.json';

const solutionsArr = <ISolution[]>[
  {
    id: 0,
    title: 'Warming up',
    hint: 'try to change the URL address.',
    desc: descStrings.desc0,
    code: codeStrings.solution0,
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/274877906944.html',
  },
  {
    id: 1,
    title: 'What about making trans?',
    hint: 'everybody thinks twice before solving this.',
    desc: descStrings.desc1,
    code: codeStrings.solution1,
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/ocr.html',
  },
  {
    id: 2,
    title: 'Ocr',
    hint: 'recognize the characters. maybe they are in the book, but MAYBE they are in the page source.',
    desc: descStrings.desc2,
    code: codeStrings.solution2,
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/equality.html',
  },
  {
    id: 3,
    title: 'Re',
    hint: 'One small letter, surrounded by EXACTLY three big bodyguards on each of its sides.',
    desc: descStrings.desc3,
    code: codeStrings.solution3,
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/linkedlist.html',
  },
  {
    id: 4,
    title: 'Follow the chain',
    hint: "DON'T TRY ALL NOTHINGS, since it will never end. 400 times is more than enough.",
    desc: descStrings.desc4,
    code: codeStrings.solution4,
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/peak.html',
  },
  {
    id: 5,
    title: 'Peak hell',
    hint: 'Pronounce it. Peak hell sounds familiar?',
    desc: descStrings.desc5,
    code: codeStrings.solution5,
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/channel.html',
  },
  {
    id: 6,
    title: 'Now there are pairs',
    hint: '<!-- <-- zip -->',
    desc: descStrings.desc6,
    code: codeStrings.solution6,
    packs: [
      {
        name: 'node-stream-zip',
        url: 'https://www.npmjs.com/package/node-stream-zip',
      },
    ],
    solutionUrl: 'http://www.pythonchallenge.com/pc/def/channel.html',
  },
  {
    id: 7,
    title: 'Smarty',
    hint: 'None',
    desc: descStrings.desc7,
    code: codeStrings.solution7,
    solutionUrl: 'https://www.pythonchallenge.com/pc/def/integrity.html',
  },
  {
    id: 8,
    title: 'Working hard?',
    hint: 'Where is the missing link',
    desc: descStrings.desc8,
    code: codeStrings.solution8,
    packs: [
      { name: 'compressjs', url: 'https://www.npmjs.com/package/compressjs' },
    ],
    solutionUrl: 'http://www.pythonchallenge.com/pc/return/good.html',
  },
  {
    id: 9,
    title: '',
    hint: '',
    desc: descStrings.desc9,
    code: codeStrings.solution9,
    solutionUrl: '',
  },
];

export default solutionsArr;
