// Object literal
let person = {
  name: "Deepika",
  age: 26,
  isEmployed: true,
  greet: function () {
    console.log(`Hello, My name is ${this.name}`);
  },
};

// Access properties
console.log(person.name);
console.log(person["age"]);
console.log(person.greet());

///////////////////////////////////


// Modify properties
person.age = 27;
person["isEmployed"] = true;

console.log(person.isEmployed);
console.log(person["age"]);

// Add property
person.gender = "Female";
person["nationality"] = "Indian";

console.log(person);

// Delete
delete person.isEmployed;

console.log(person.isEmployed);

// Method
person.greet(); // they have their own this

// this === person

let student = {
  name: "Deepika",
  age: 26,
  isEmployed: true,
  greet: () => {
    console.log(`Hello, My name is ${this.name}`);
  },
};

console.log(student.greet());

// Arrow functions dont create their own this
//  They look for this from the surrounding scope
//  scope is global scope

// let Employee = {
//   name: "Kavya",
//   greet: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 2000);
//   },
// };

// console.log(Employee.greet());

let Employee = {
  name: "Divya",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

console.log(Employee.greet());

//  Nested objects
let studentInfo = {
  name: "Sai Kumar",
  age: 20,
  grades: {
    math: "A",
    Science: "A+",
  },
  getGrade: function (subject) {
    return this.grades[subject];
  },
};

// pass the parameter dynamically
console.log(studentInfo.grades.math);
console.log(studentInfo.getGrade("Science"));
 