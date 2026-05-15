import { data } from "./data.js";
// console.log(data);
// task1

// let words = [
//   {
//     a: String,
//   },
//   {
//     b: "",
//   },
// ];
let a = "string";
let b = "";
// let "" = 0;

function getemptyornotempty(a = true, b = false) {
  //   let a = "string";
  //   let b = "";
  console.log(a);
}
getemptyornotempty();
// task2

let usd = 2.98;
let usdtogel = 0.28;
function getusdtogel(usd = 2.98, usdtogel = 0.28) {
  //   let usd, usdtogel;
  console.log("usd to gel :", usd * usdtogel);
}
getusdtogel();

// task3

const arrowcurrencycode = (
  USD = "United State",
  EUR = "European Union",
  GEL = "Georgia",
  RUB = "Unknow Currency",
) => {
  console.log(GEL, EUR, USD, RUB);
};
arrowcurrencycode();

// task4
const arrowguest = (
  uppercase = "MY NAME IS JANE",
  lovercase = " my name is jane",
) => {
  console.log(lovercase);
};
arrowguest();

// task5

// storageQuantity
// data.products();
// const callback = (storageQuantity) => {
//   console.log(storageQuantity);
// };

// data.products.forEach(callback);
data.products.forEach((products) => {
  if (products.storageQuantity > 100) console.log(products.storageQuantity);
});

// task6
data.products.forEach((products) => {
  if (products.price < 100) console.log(products.price);
  console.log(products.price < 1100);
});
const filterprices = data.products.filter((products) => {
  return products.price < 1100;
});
console.log(filterprices);

// task7

const onlyprices = data.products.find((el, index, array) => {
  return (el.id = 7440);
  //   return (, "HP Notebook 15/BL1K4EA");
});

console.log(onlyprices);

const onlyprices2 = data.products.find((el, index, array) => {
  //   return (el.id = 7440);
  // return (el."HP Notebook 15/BL1K4EA");
  return (el.name = "HP Notebook 15/BL1K4EA");
});
console.log(onlyprices2);

// data.products.forEach((products) => {
//   if (products) console.log(products);
// });
