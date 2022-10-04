/*
На вход подается массив со значениями. Нужно вывести массив уникальных элементов (нет повторений в поданном массиве).
Input: [5, 7, 6, 2, 8, 3, 5, 6, 2, 98, 13]
Output: [7, 8, 3, 98, 13]
*/

const arr = [5, 7, 6, 2, 8, 3, 5, 6, 2, 98, 13];

const returnArrayUniqueElements = (array) => {
  const newArray = [];
  const obj = {};

  for (let item of array) {
    obj[item] === undefined ? (obj[item] = 1) : obj[item]++;
  }

  for (let value in obj) {
    if (obj[value] === 1) {
      newArray.push(+value);
    }
  }

  return newArray;
};

console.log(returnArrayUniqueElements(arr));
