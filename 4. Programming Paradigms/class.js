class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

const train1 = new Train("Blue", false);

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }

  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log(`High Speed Status : ${this.highSpeedOn}`);
  }

  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational!");
  }
}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights();
train5.lightsStatus();

highSpeed1.toggleLights();
highSpeed1.getPrototype();

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
