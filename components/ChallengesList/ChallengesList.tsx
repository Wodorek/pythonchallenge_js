import solution0 from '../../lib/solution0/solution0';
import UploadForm from '../UIElements/UploadForm';
import ChallengeContainer from '../ChallengeContainer/ChallengeContainer';
import solution1 from '../../lib/solution1/solution1';
import solution2 from '../../lib/solution2/solution2';
import solution3 from '../../lib/solution3/solution3';
import solution4 from '../../lib/solution4/solution4';
import codeStrings from '../../descriptions/codeStrings.json';
import descStrings from '../../descriptions/descStrings.json';

const ChallengesList = () => {
  const textFromFile = async (
    file: File,
    getter: (string: string) => string
  ) => {
    const text = await file.text();
    const str = getter(text);
    return str;
  };

  return (
    <div className="grid gap-y-2 justify-items-center my-2">
      <ChallengeContainer
        number={0}
        title="Warming up"
        hint="try to change the URL address."
        desc={descStrings.desc0}
        code={codeStrings.solution0}
        solutionUrl="http://www.pythonchallenge.com/pc/def/274877906944.html"
      />
      <ChallengeContainer
        number={1}
        title="What about making trans?"
        hint="everybody thinks twice before solving this."
        desc={descStrings.desc1}
        code={codeStrings.solution1}
        solutionUrl="http://www.pythonchallenge.com/pc/def/ocr.html"
      />
      <ChallengeContainer
        number={2}
        title="Ocr"
        hint="recognize the characters. maybe they are in the book,
              but MAYBE they are in the page source."
        desc={descStrings.desc2}
        code={codeStrings.solution2}
        solutionUrl="http://www.pythonchallenge.com/pc/def/equality.html"
      >
        <UploadForm
          challengeFunc={(file: File) => textFromFile(file, solution2)}
          initText={'upload a text file'}
        />
      </ChallengeContainer>
      <ChallengeContainer
        number={3}
        title="Re"
        hint="One small letter, surrounded by EXACTLY three big bodyguards on each of its sides."
        desc={JSON.stringify(descStrings.desc3)}
        code={codeStrings.solution3}
        solutionUrl="http://www.pythonchallenge.com/pc/def/linkedlist.html"
      >
        <UploadForm
          challengeFunc={(file: File) => textFromFile(file, solution3)}
          initText={''}
        />
      </ChallengeContainer>
      <ChallengeContainer
        number={4}
        title="Follow the chain"
        hint="DON'T TRY ALL NOTHINGS, since it will never 
        end. 400 times is more than enough."
        desc={descStrings.desc4}
        code={codeStrings.solution4}
        solutionUrl="TODO"
      />
      <ChallengeContainer
        number={4}
        title="Follow the chain"
        hint="DON'T TRY ALL NOTHINGS, since it will never 
        end. 400 times is more than enough."
        desc={descStrings.desc4}
        code={codeStrings.solution4}
        solutionUrl="http://www.pythonchallenge.com/pc/def/peak.html"
      />
    </div>
  );
};

export default ChallengesList;
