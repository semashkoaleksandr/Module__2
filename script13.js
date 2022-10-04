/*
Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. Верните объект сгруппированных данных {"0": 10, "1": 5}
Input: [0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]
Output: {
  "0": 7,
  "1": 8
}
*/
const arr = [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1];

const returnGroupedDataObject = (array) => {
  let dataObject = {};

  for (let item of array) {
    dataObject[item] === undefined
      ? (dataObject[item] = 1)
      : dataObject[item]++;
  }

  return dataObject;
};

console.log(returnGroupedDataObject(arr));
