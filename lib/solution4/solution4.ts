const solution4 = async (nothing: number) => {
  fetch(`api/solutions/forSolution4?nothing=${nothing}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.matches) {
        solution4(data.matches);
      }
      if (data.halfWay) {
        solution4(16044 / 2);
      }
      if (data.finished) {
        return data.finished;
      }
    });
};

export default solution4;
