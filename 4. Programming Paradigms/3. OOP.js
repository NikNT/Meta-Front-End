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
// class Bird {
//   useWings() {
//     console.log("Flying!");
//   }
// }
// class Eagle extends Bird {
//   useWings() {
//     super.useWings();
//     console.log("Barely flapping!");
//   }
// }
// class Penguin extends Bird {
//   useWings() {
//     console.log("Diving!");
//   }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings();
// kingPenguin.useWings();

// Class Example

// class Train {
//   constructor(color, lightsOn) {
//     this.color = color;
//     this.lightsOn = lightsOn;
//   }
// }

// const train1 = new Train("Blue", false);
// console.log(train1.color, train1.lightsOn);

// if (!train1.lightsOn) {
//   train1.lightsOn = true;
// }

// console.log(train1.lightsOn);

// class Train {
//   constructor(color, lightsOn) {
//     this.color = color;
//     this.lightsOn = lightsOn;
//   }
//   toggleLights() {
//     this.lightsOn = !this.lightsOn;
//   }
//   lightsStatus() {
//     console.log("Lights on?", this.lightsOn);
//   }
//   getSelf() {
//     console.log(this);
//   }
//   getPrototype() {
//     var proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

// const train1 = new Train("Blue", false);

// class HighSpeedTrain extends Train {
//   constructor(passengers, highSpeedOn, color, lightsOn) {
//     super(color, lightsOn);
//     this.passengers = passengers;
//     this.highSpeedOn = highSpeedOn;
//   }

//   toggleHighSpeed() {
//     this.highSpeedOn = !this.highSpeedOn;
//     console.log(`High Speed Status : ${this.highSpeedOn}`);
//   }

//   toggleLights() {
//     super.toggleLights();
//     super.lightsStatus();
//     console.log("Lights are 100% operational!");
//   }
// }

// var train5 = new Train("blue", false);
// var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

// train5.toggleLights();
// train5.lightsStatus();

// highSpeed1.toggleLights();
// highSpeed1.getPrototype();

class Family {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  getAge() {
    console.log(`${this.name} has ${this.age} age!`);
  }
}

const family1 = new Family("Nikhil", "Male", 25);

class Member extends Family {
  constructor(role, name, age, gender) {
    super(name, gender, age);
    this.role = role;
  }

  memberDescription() {
    console.log(
      `${this.name} is a ${this.gender} and ${this.role} of the house!`
    );
  }

  getAge() {
    this.memberDescription();
    console.log(`Age of Member : ${this.age}`);
  }
}

const member1 = new Member("Young Adult", "Nikhil", 25, "Male");
member1.getAge();
family1.getAge();
