/*
Дан массив строк. Написать функцию, которы упорядочит массив по длине строк.
Input: ["test", "education", "part", "2", "exceed.team"]
Output: ["2", "part", "test", "education", "exceed.team"]
*/

const arr = ["test", "education", "part", "2", "exceed.team"];

const sortArrayByStringLength = (array) => {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j].length < array[min].length) {
        min = j;
      }
    }
    let t = array[min];

    array[min] = array[i];
    arr[i] = t;
  }

  return array;
};

console.log(sortArrayByStringLength(arr));
