/*
Написать функцию фильтрации коллекции, где у объекта есть свойство с конкретным значением.
Input: [
   {name: "test", age: 45, country: "RF", tel: "+79846466744"},
   {name: "test1", age: 23, country: "RF", tel: "+79464747484"},
   {name: "test2", age: 18, country: "RF", tel: "+376483876346"}
]
Отфильтровать значения, где age равен 23
Output: [
   {name: "test1", age: 23, country: "RF", tel: "+79464747484"}
]
*/
const arr = [
  { name: "test", age: 45, country: "RF", tel: "+79846466744" },
  { name: "test1", age: 23, country: "RF", tel: "+79464747484" },
  { name: "test2", age: 18, country: "RF", tel: "+376483876346" },
];

const returnObjectByValue = (array, value) => {
  const returnedObject = [];

  for (let elem of array) {
    for (let key in elem) {
      if (elem[key] === value) {
        returnedObject.push(elem);
      }
    }
  }

  return returnedObject;
};

console.log(returnObjectByValue(arr, 23));
