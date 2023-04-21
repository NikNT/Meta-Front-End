class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

class Worker extends Person {
  constructor(
    name,
    age,
    energy,
    xp = 0,
    hourlyWage = 10,
    sleep,
    doSomethingFun
  ) {
    super(name, age, energy, sleep, doSomethingFun);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

function intern() {
  const intern1 = new Worker("Bob", 21, 110, 0, 10);
  intern1.goToWork();
  return intern1;
}

function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

// console.log(intern(), manager());
