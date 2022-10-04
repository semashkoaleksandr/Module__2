/*
Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
Input: 345
Output: 3
*/

const getSumNumbers = (number) => {
  let sum = 0;
  let arr = String(number).split("");

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }

  return sum > 9 ? getSumNumbers(sum) :  sum;
  
};

console.log(getSumNumbers(345));
