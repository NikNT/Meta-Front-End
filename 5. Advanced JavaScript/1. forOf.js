// const alphabets = ["a", "b", "c"];
// for (const alphabet of alphabets) {
//   console.log(alphabet);
// }

// const car = {
//   engine: "Shelby",
//   max: 200,
// };

// console.log(Object.keys(car));
// console.log(Object.entries(car));

// const person = {
//   name: "Nikhil",
//   age: 25,
//   skill: "ReactJS",
// };

// for (const key of Object.keys(person)) {
//   console.log(key, ":", person[key]);
// }

// const car = {
//   engine: true,
//   steering: true,
//   speed: "slow",
// };

// const sportsCar = Object.create(car);
// sportsCar.speed = "fast";
// console.log("The SportsCar object: ", sportsCar);

// for (prop in sportsCar) {
//   console.log(prop);
// }

const car = {
  engine: true,
};

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The SportsCar Object", sportsCar);

for (prop in sportsCar) {
  console.log(prop);
}

console.log("---------------------");

for (prop of Object.keys(sportsCar)) {
  console.log(sportsCar[prop]);
}
