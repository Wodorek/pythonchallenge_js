const solution13 = () => {
  fetch('./api/solutions/forSolution13')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export default solution13;
