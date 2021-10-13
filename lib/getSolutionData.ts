import solutionsArr from '../data/solutionsArr';

const getSolutionData = (id: string | string[] | undefined) => {
  return solutionsArr[parseInt(id as string)];
};

export default getSolutionData;
