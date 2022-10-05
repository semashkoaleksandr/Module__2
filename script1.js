/*
Напишите функцию, которая добавит в первый массив только те значения, которые присутствуют во втором, но нет в первом
Input: ( [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2], [8, 5, 7, -3, 6, 3, 1, 4, 2] )
Output: [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2, 6, 1, 4]
*/

const arr1 = [5, 8, -3, 7, 3, 7, 3, 8, 9, 2, 8, -2];
const arr2 = [8, 5, 7, -3, 6, 3, 1, 4, 2];

const addUniqueElementsToArray = (firstArray, secondArray) => {
  for (let elem of secondArray) {
    let counter = 0;

    for (let item of firstArray) {
      if (elem === item) {
        break;
      } else {
        counter++;
      }
      if (counter === firstArray.length) {
        firstArray.push(elem);
      }
    }
  }

  return firstArray;
};

console.log(addUniqueElementsToArray(arr1, arr2));
