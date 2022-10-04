/*
Напишите функцию, которая сгруппирует объекты заказов по имени.
Input: [
   {name: "test", price: 200},
   {name: "test1", price: 300},
   {name: "test", price: 100},
   {name: "test", price: 600}
]
Output: [
   {name: "test", price: 900},
   {name: "test1", price: 300}
]
*/
const arr = [
  { name: "test", price: 200 },
  { name: "test1", price: 300 },
  { name: "test", price: 100 },
  { name: "test", price: 600 },
];

const groupObjects = (array) => {
  const resultObject = {};

  for (let item of array) {
    const resultValue = resultObject[item.name];
    if (resultValue) {
      resultValue.price += item.price;
    } else {
      resultObject[item.name] = { ...item };
    }
  }
  const resultArray = Object.values(resultObject);

  return resultArray;
};

console.log(groupObjects(arr));
