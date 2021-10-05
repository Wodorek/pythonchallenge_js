const solution6 = () => {
  fetch('./api/solutions/forSolution6')
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.comments.join());
    });
};

export default solution6;
