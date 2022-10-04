/*
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
Input: [ [1, 2, 3], [4, 5], [6] ]
Output: 21
*/

const arr = [[1, 2, 3], [4, 5], [6]];

const findSumArrayElements = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }

  return sum;
};

console.log(findSumArrayElements(arr));