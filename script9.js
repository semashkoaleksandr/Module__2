/*
Напишите функцию, которая удалит из первого массива все значения, которые указаны во втором массиве.
Input: ( [5, 7, 2, -1, 7, 8, 3, 6, 2, 9, 4, -7], [2, -1, 9] )
Output: [5, 7, 7, 8, 3, 6, 4, -7]
*/
const arr1 = [5, 7, 2, -1, 7, 8, 3, 6, 2, 9, 4, -7];
const arr2 = [2, -1, 9];

const returnModifiedArray = (firstArray, secondArray) => {
  const newArray = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let k = 0; k < secondArray.length; k++) {
      if (secondArray[k] === firstArray[i]) {
        delete firstArray[i];
      }
    }
    if (firstArray[i]) {
      newArray.push(firstArray[i]);
    }
  }

  return newArray;
};

console.log(returnModifiedArray(arr1, arr2));
