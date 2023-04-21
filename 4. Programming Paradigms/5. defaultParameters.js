// function noDefaultParams(number) {
//   let result = number * number;
//   console.log(`Squared of ${number} is ${result}`);
// }

// noDefaultParams();

function noDefaultParams(number = 10) {
  let result = number * number;
  console.log(`Square of ${number} is ${result}`);
}

noDefaultParams();
