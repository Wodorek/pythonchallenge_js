const solution8 = () => {
  fetch('api/solutions/forSolution8')
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export default solution8;
