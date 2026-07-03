// Functions
// sayHello("Harshith");
// multiply(10, 20); // ReferenceError: Cannot access 'multiply' before initialization

// Function statement - Hoisting
function sayHello(name) {
  console.log("Hello " + name);
}

//  Call/ Invoke
sayHello("Hritik");

// Global variable
let greeter = "Hello";

function showmessage(username) {
  // local variable
  let message = `${greeter}, ${username}`;
  return message;
}

console.log(showmessage("Tejaswi"));

// console.log(message); // ReferenceError: message is not defined

//  Function Expression

// let multiply = function product(x, y) {
//   return x * y;
// };

// Anonymous function
let multiply = function (x, y) {
  return x * y;
};

console.log(multiply(2, 3));

// Arow function

// () => {}

// Shorter hnd - Remove function, curly braces , return keyword

let sum = (a, b) => a + b;

// function add(a, b) {
//   return a + b;
// }

console.log(sum(10, 20));

//  Multiple line sof code - remove function keyword

let add = (a, b) => {
  console.log("Multiple lines of code");
  return a + b;
};

console.log(add(5, 15));

// address
//  street, city, postal code
// pass default value to a function
function address(city, pCode = 500017) {
  console.log(`${city}, ${pCode}`);
}

address("Hyderabad", 500008);
address("Hyderabad");

// callback functions
// pass one function as an argument to another function
// Function as first class citiezns

function prajwal(callback) {
  console.log("Planned the trip and prajwal is coming ");

  console.log("Checking with friends whether everyone is coming ");

  setTimeout(() => {
    callback();
  }, 5000);

  console.log("All the other friends have confirmed for the trip");
}

function lohith() {
  console.log("Will call back to confirm on the trip");
}

prajwal(lohith);

// Returning another function
function createMultipkier(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = createMultipkier(2);
console.log(double(5));
 