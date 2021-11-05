import UploadForm from '../../components/UIElements/UploadForm';
import ChallengeContainer from '../../components/ChallengeContainer';
import solution2 from '../../lib/solution2/solution2';
import solution3 from '../../lib/solution3/solution3';
import solution5 from '../../lib/solution5/solution5';
import solution6 from '../../lib/solution6/solution6';
import Solution7 from '../../lib/solution7/solution7';
import codeStrings from '../../data/codeStrings.json';
import descStrings from '../../data/descStrings.json';
import Button from '../../components/UIElements/Button';

//DELETE
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
        desc={descStrings.desc3}
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
        solutionUrl="http://www.pythonchallenge.com/pc/def/peak.html"
      />
      <ChallengeContainer
        number={5}
        title="Peak hell"
        hint="Pronounce it. Peak hell sounds familiar?"
        desc={descStrings.desc5}
        code={codeStrings.solution5}
        solutionUrl="http://www.pythonchallenge.com/pc/def/channel.html"
      >
        <button onClick={() => solution5()}>asdasd</button>
      </ChallengeContainer>
      <ChallengeContainer
        number={6}
        title="Now there are pairs"
        hint="<!-- <-- zip -->"
        desc={descStrings.desc6}
        code={codeStrings.solution6}
        solutionUrl="http://www.pythonchallenge.com/pc/def/channel.html"
      >
        <Button onClick={() => solution6()}>Try me!</Button>
      </ChallengeContainer>
      <ChallengeContainer
        number={7}
        hint={'None'}
        title={'Smarty'}
        desc={descStrings.desc7}
        code={codeStrings.solution7}
        solutionUrl={'https://www.pythonchallenge.com/pc/def/integrity.html'}
      >
        <Solution7 />
      </ChallengeContainer>
      <ChallengeContainer
        number={8}
        hint={'Where is the missing link?'}
        title={'Working hard?'}
        desc={''}
        code={''}
        solutionUrl={''}
      />
    </div>
  );
};

export default ChallengesList;
