import type { NextPage } from 'next';
import ChallengeContainer from '../obsolete/ChallengeContainer/ChallengeContainer';

const Home: NextPage = () => {
  return (
    <div>
      <ChallengeContainer
        number={0}
        hint={'Choose the solution you want to see, from the list on the left'}
        title={'Pythonchallenge with solutions using JS'}
        desc={
          "Welcome to the list of http://www.pythonchallenge.com/ solutions, written in a superior language, Typescript!\r\n\r\nIn this block of text, a description of the code solving the challenge level, will be provided. It will include a description of the puzzle itself, as well as explanation of the functions used to solve it.\r\n\r\nFollowing that, will be a block of code, with, depending of what was required to solve the challenge, frontend functions, backend functions in Node, React componets, or combination of any of the above. Next you can find links to any npm packages that were used to solve each level.\r\n\r\nFinally, below that, for people that can't be bothered with going trough the code, a link that will take you to the pythonchallange website containing next level puzzle.\r\n\r\nNote: The functions might not be 110% efficient, and contain too many lines of code, as I tried to emphasise readability."
        }
        code={
          "const example = () => {\r\n  const example = 'Hi, I am an example function';\r\n  const final = 'The actual solution code, will be found here';\r\n};\r\n//check out the project's github below\r\n"
        }
        solutionUrl={'https://github.com/Wodorek/pythonchallenge_js'}
      />
    </div>
  );
};

export default Home;
