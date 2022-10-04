/*
Напишите функцию, которая находит наиболее часто встречаемый элемент массива.
Input: [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6]
Output: 6
*/
const arr = [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6];

const findFrequentArrayElement = (array) => {
  const obj = {};
  let counter = 1;

  for (let elem of array) {
    obj[elem] === undefined ? obj[elem] = counter : obj[elem] = counter++;
  }

  for (let item in obj) {
    if (obj[item] === counter - 1) {
      return item;
    }
  }
};

console.log(findFrequentArrayElement(arr));
