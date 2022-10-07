/*
Напишите функцию, которая возвращает true, если в массиве есть все значения, которые указаны во втором.
Input: ( [4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [3, 7, -6] )
Output: true
Input: ( [4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4], [9, 7, -8] )
Output: false
*/

const arr1 = [4, 8, 1, 9, -3, 7, 2, 8, 4, -6, 3, 8, 4, 6, 1, 9, -4, 3, 3];
const arr2 = [-9, -7, 8];

const iterateThtoughArrayForMatches = (firstArray, secondArray) => {
  let count = 0;

  for (let elem of secondArray) {
    for (let item of firstArray) {
      if (elem === item) {
        count++;
        break;
      }
    }
  }

  return count === arr2.length;
};

console.log(iterateThtoughArrayForMatches(arr1, arr2));
