
const findPrimeNumber = (number) => {
  let flag = false;

  for (let i = 2; i < 10; i++) {
    if (number % i === 0) {
      flag = true;
    }
  }

  return flag;
};

console.log(findPrimeNumber(3023));
