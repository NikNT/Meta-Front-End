// Spread Operator
const listOfPlaces = ["A", "B", "C", "D"];
console.log(...listOfPlaces.forEach((place) => console.log(place)));

// Rest Operator
const myPlaces = ["A", "B", "C", "D", "E"];
const [] = top3;
const [first, second, third, ...restOfEm] = top3;
console.log(first);

const addTaxToPrices = (taxRate, ...itemsBought) => {
  return itemsBought.map((item) => taxRate * item);
};

let shoppingCart = addTaxToPrices(1.1, 2, 4, 6, 8);
console.log(shoppingCart);

// Spread Operator - ConCat Arr
const initial = ["a", "b", "c"];
const latter = ["d", "e", "f"];
const combination = [...initial, ...latter];
console.log(combination);

const flying = {
  wings: 2,
};

const car = {
  door: 4,
};

const flyingCar = { ...flying, ...car };
console.log(flyingCar);

const originalArr = [1, 2];
const modifiedArr = [...originalArr, 3, 4];
const modifiedArr2 = [3, ...originalArr, 4];
console.log(modifiedArr);
console.log(modifiedArr2);

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

const car1 = {
  speed: 200,
  color: "yellow",
};

const car2 = { ...car1 };
car2.speed = 210;
car2.color = "red";

console.log(`Car1 Object : ${car1}, car2`);
