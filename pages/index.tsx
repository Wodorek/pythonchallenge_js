import type { NextPage } from 'next';
import ChallengesList from '../components/ChallengesList/ChallengesList';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="flex justify-center w-full my-5 text-5xl text-center">
        Pythonchallenge with solutions using JS
      </h1>
      <h2 className="flex justify-center w-full my-5 text-2xl border-t text-center">
        Click on the arrow to see the solution
      </h2>
      <ChallengesList />
    </div>
  );
};

export default Home;
