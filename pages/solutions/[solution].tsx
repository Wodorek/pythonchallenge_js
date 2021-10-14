import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import ChallengeContainer from '../../components/ChallengeContainer/ChallengeContainer';
import { ISolution } from '../../interfaces';
import getAllSolutionsIds from '../../lib/getAllSolutionsIds';
import getSolutionData from '../../lib/getSolutionData';

interface IProps {
  solutionData: ISolution;
}

const Solution: React.FC<IProps> = ({ solutionData }) => {
  return (
    <div>
      <ChallengeContainer
        number={solutionData.id}
        hint={solutionData.hint}
        title={solutionData.title}
        desc={solutionData.desc}
        code={solutionData.code}
        solutionUrl={solutionData.solutionUrl}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSolutionsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const solutionData = getSolutionData(params?.solution);

  return {
    props: {
      solutionData,
    },
  };
};

export default Solution;