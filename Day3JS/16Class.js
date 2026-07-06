class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, My name is ${this.name} and I am ${this.age} years old `
    );
  }
}

let person1 = new Person("Sharan", 20);
let person2 = new Person("Chaitanya", 21);

person1.greet();
person2.greet();

// Inheritance

// parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes noise`);
  }
}

//  child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor with the name
    this.breed = breed;
  }

  //   METHOD OVERLOADING
  speak() {
    console.log(`${this.name} barks`);
  }

  getBreed() {
    return this.breed;
  }
}

let myDog = new Dog("Leo", "German Shepherd");
console.log("Breed ", myDog.getBreed());
myDog.speak();

// private
class Car {
  #vinNumber; // Private

  constructor(make, vinNumber) {
    this.make = make;
    this.#vinNumber = vinNumber; // Assigning the private field
  }

  getDetails() {
    return `${this.make}`;
  }

  #getVinNumber() {
    //Private
    return `${this.#vinNumber}`;
  }

  showvinNumber() {
    console.log(this.#getVinNumber());
  }
}

let myCar = new Car("Tesle", "123ACD345");

console.log(myCar.getDetails());
myCar.showvinNumber();

// console.log(myCar.#getVinNumber()); // SyntaxError: Private field '#getVinNumber' must be declared in an enclosing class

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtils.add(3, 2));
 