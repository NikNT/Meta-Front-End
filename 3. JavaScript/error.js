// // Bug

function addTwo(num1, num2) {
  return num1 + num2;
}

let input = addTwo("1", 2);
console.log(input);

// // Error

console.log(c + d);
console.log("This line never runs");

// // Try Catch

console.log(a + b);
console.log("This line never runs");

// throw new ReferenceError();

try {
  console.log(a + b);
} catch (err) {
  // console.log(`The Error: ${err}`);
  console.log(err);
  console.log("There was an error");
}
console.log("Program Continues...");

function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("The First Arg is Not a Number");
    } else if (typeof b != "number") {
      throw new ReferenceError("The second Arg is Not a Number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(`Error! ${err}`);
  }
}

addTwoNums(5, "5");
console.log("It still works!");

function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;

  if (condition1 == true && condition2 == true) {
    for (i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

letterFinder("cat", "c");

throw new Error();
console.log("Hello");

try {
  throw new Error();
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

var result;
console.log(result);

var str = "Hello";
console.log(str.match("H"));

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}
