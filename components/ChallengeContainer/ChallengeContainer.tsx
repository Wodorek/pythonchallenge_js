import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { useRouter } from 'next/dist/client/router';

interface IProps {
  number: number;
  hint: string;
  title: string;
  desc: string;
  code: string;
  solutionUrl: string;
}

const ChallengeContainer: React.FC<IProps> = (props) => {
  const router = useRouter();

  const currentSolution = router.query.solution;

  useEffect(() => {
    Prism.highlightAll();
  }, [currentSolution]);

  return (
    <div className=" shadow-md rounded-b-lg py-4 px-8 m-6">
      <div className="">
        <h2 className="text-4xl text-center mb-8">{props.title}</h2>
        <h3 className="text-xl mb-8 mb-12">Hint: {props.hint}</h3>
      </div>

      <p className="whitespace-pre-line w-full mb-4">{props.desc}</p>
      <div className="flex justify-center">
        <pre className="w-full p-1 rounded-xl">
          <code className="language-ts">{props.code}</code>
        </pre>
      </div>
      <div className="mx-2 flex justify-center mt-2">{props.children}</div>
      <div>
        Solution url:{' '}
        <span className="bg-black hover:bg-white">{props.solutionUrl}</span>
      </div>
    </div>
  );
};

export default ChallengeContainer;
