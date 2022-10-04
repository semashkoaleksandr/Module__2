/*
Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного. Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число, которое встречается нечетное количество раз.
Input: [5, 8, 2, 4, 5, 4, 2, 4, 2, 5, 2, 4, 5]
Output: 8
*/
const arr = [5, 8, 2, 4, 5, 4, 2, 4, 2, 5, 2, 4, 5];

const returnNumberOddNumberTimes = (array) => {
  const obj = {};

  for (let item of array) {
    obj[item] === undefined ? (obj[item] = 1) : obj[item]++;
  }

  for (let value in obj) {
    if (obj[value] % 2 !== 0) {
      return value;
    }
  }
};

console.log(returnNumberOddNumberTimes(arr));
