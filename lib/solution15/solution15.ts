const solution15 = () => {
  //we know the year is between 1006 and 1996
  //first leap year in this range is 1016.

  //knowing that, loop over the range, checking for years that have Jan 26th as monday

  const mondays = [];

  //i+=20 since leap years ending in 6 come every 20 years
  for (let i = 1036; i < 1996; i += 20) {
    if (new Date(`${i}-1-26`).getDay() === 1) {
      mondays.push(i);
    }
  }

  //log second to last monday, aka "second youngest"
  console.log(mondays[mondays.length - 2]);
};

export default solution15;
