// Find the letter

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at ", i);
    }
  }
}

letterFinder("test", "t");

var decimal = Math.random();
console.log(decimal);
console.log(decimal * 10);
console.log(Math.ceil(decimal * 10));

var clothes = [];
clothes.push("1");
clothes.push("2");
clothes.push("3");
clothes.push("4");
clothes.push("5");

clothes.pop();

console.log(clothes[2]);

var favCar = {};
favCar.color = "Black";
favCar.convertible = true;
console.log(favCar);

console.log(typeof favCar);
console.log(typeof 15);
console.log(typeof true);
