import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ChallengeContainer from '../../components/ChallengeContainer';
import { ISolution } from '../../interfaces';
import getAllSolutionsIds from '../../lib/getAllSolutionsIds';
import getSolutionData from '../../lib/getSolutionData';

interface IProps {
  solutionData: ISolution;
}

const Solution: React.FC<IProps> = ({ solutionData }) => {
  return (
    <>
      <Head key="title">
        <title>{solutionData.title}</title>
      </Head>
      <ChallengeContainer
        number={solutionData.id}
        hint={solutionData.hint}
        title={solutionData.title}
        desc={solutionData.desc}
        code={solutionData.code}
        packs={solutionData.packs}
        solutionUrl={solutionData.solutionUrl}
      />
    </>
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
