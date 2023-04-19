//Basic Example

// class Car {
//   constructor(color, speed) {
//     this.color = color;
//     this.speed = speed;
//   }

//   stats() {
//     console.log(`The car has ${this.color} color and ${this.speed} speed`);
//   }

//   turboOn() {
//     console.log("Turbo is On!");
//   }
// }

// const car1 = new Car("Blue", 120);
// car1.stats();

// Inheritance

// class Bird {
//   constructor(type, canFly) {
//     this.type = type;
//     this.canFly = canFly;
//   }

//   isABird() {
//     if (this.canFly) {
//       console.log(`${this.type} is a Bird`);
//     }
//   }
// }

// const eagle = new Bird("Eagle", true);
// eagle.isABird();

// class Eagle extends Bird {
//   constructor(isWild, whichBird, type) {
//     super(type);
//     this.isWild = isWild;
//     this.whichBird = whichBird;
//   }

//   livesIn() {
//     if (this.isWild && this.type) {
//       console.log(`${this.whichBird} lives in Jungle`);
//     }
//   }
// }

// const ostrich = new Eagle(true, "Ostrich", true);
// ostrich.livesIn();

//Polymorphism

// const bicycle = {
//   bell: function () {
//     return "Bicycle! Watch out, please!";
//   },
// };
// const door = {
//   bell: function () {
//     return "Door! Come here, please!";
//   },
// };

// function ringTheBell(thing) {
//   console.log(thing.bell());
// }

// ringTheBell(bicycle);
// ringTheBell(door);

// Poly - Example 2

// console.log("abc".concat("def"));
// console.log(["abc"].concat(["def"]));
// console.log(["abc"] + ["def"]);

// Poly - Example 3
class Bird {
  useWings() {
    console.log("Flying!");
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();
