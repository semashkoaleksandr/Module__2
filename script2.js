/*
Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
Input: 31
Output: false
Input: 4
Output: true
*/
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
