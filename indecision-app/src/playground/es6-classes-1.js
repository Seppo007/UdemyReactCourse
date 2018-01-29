// ES6 Class
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  };

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// Subclass
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` He studied ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {

  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }

}

const me = new Student('Sebastian Schalow', 29, 'Computer Science');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getGreeting());

const traveler = new Traveler('Sebastian Schalow', 29, 'Wolfsburg');
console.log(traveler.getGreeting());