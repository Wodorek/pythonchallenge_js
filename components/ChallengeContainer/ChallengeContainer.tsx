import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  number: number;
  hint: string;
  title: string;
  desc: string;
  code: string;
  solutionUrl: string;
}

const ChallengeContainer: React.FC<IProps> = (props) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [expanded]);

  return (
    <div className="w-4/5 flex flex-col items-center">
      <div className="relative flex w-full min-h-[8rem] h-32 border-2 border-blue-300 rounded-t-lg shadow-lg">
        <span className="w-min text-5xl text-blue-400 mr-5 ml-2 h-full">
          #{props.number}
        </span>
        <div className=" flex flex-col">
          <h3 className="text-3xl">{props.title}</h3>
          <div>Hint: {props.hint}</div>
        </div>
        <div
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
          className="cursor-pointer absolute bottom-0 w-full h-6 bg-gradient-to-b from-white to-blue-300 flex justify-center"
        >
          <svg
            className="icon icon-chevron-bottom"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <motion.path
              animate={{ rotate: expanded ? 180 : 0 }}
              d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
            />
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            transition={{ duration: 0.2 }}
            animate={{ scaleY: 1 }}
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            className="bg-blue-300 w-11/12 shadow-xl rounded-b-lg py-4 px-8"
            style={{ transformOrigin: 'top' }}
          >
            <p className="whitespace-pre-line w-full mb-4">{props.desc}</p>
            <div className="flex justify-center">
              <pre className="w-full p-1">
                <code className="language-ts">{props.code}</code>
              </pre>
            </div>
            <div className="mx-2">{props.children}</div>
            {/* <Spoiler>{props.solutionUrl}</Spoiler> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChallengeContainer;
