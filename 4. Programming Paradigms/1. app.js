// Recursion

let counter = 3;
function repeatThree() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  repeatThree();
}

repeatThree();
