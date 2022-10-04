/*
Реализуйте функцию, которая параметром принимает объект. Выведите сформированную строку для браузера ('https://underscorejs.org') с параметрами. Например, { a: 4, b: 8 } => "https://underscorejs.org?a=4&b=8".
Input: ( "https://docs.google.com", { id: "terdh673bb8", limit: 5, offset: 0 } )
Output: "https://docs.google.com?id=terdh673bb8&limit=5&offset=0"
*/

const string = "https://docs.google.com";
const parameters = { id: "terdh673bb8", limit: 5, offset: 0 };

const returnGeneratedLink = (urlString, parameterObject) => {
  let link = `${urlString}?`;

  for (let key in parameterObject) {
    link += `${key}=${parameterObject[key]}&`;
  }
  let finalLink = link.slice(0, link.length - 1);

  return finalLink;
};

console.log(returnGeneratedLink(string, parameters));
