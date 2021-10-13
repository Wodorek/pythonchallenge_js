import solutionsArr from '../data/solutionsArr';

const getAllSolutionsIds = () => {
  const ids = solutionsArr.map((solution) => {
    return {
      params: {
        solution: solution.id.toString(),
      },
    };
  });

  return ids;
};

export default getAllSolutionsIds;
