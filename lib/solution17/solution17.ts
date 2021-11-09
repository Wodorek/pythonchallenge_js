const solution17 = async (busynothing: number) => {
  const cookieInfo = await fetch(
    `/api/solutions/forSolution17?busynothing=${busynothing}`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return { cookieInfo: data.cookieInfo, busynothing: data.busynothing };
    });

  return cookieInfo;
};

export default solution17;
