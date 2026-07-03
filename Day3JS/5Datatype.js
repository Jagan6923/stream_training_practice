// Number - Int and floating points
let age = 25;

let temperature = 33.5;

let neagtive = -10;

let exp_val = 2.56e3;

let endless = 1 / 0;

let notANumber = "hello" / 2; //NaN

//  String
let fname = "Vaibhavi";

let template = `Hello ${fname}`;

let result = `result is ${1 + 2}`;

//  Boolean
let isAdult = true;
let HasPermission = false;

// undefined
let x;
console.log(x);

//  Null
let user = null;
console.log(user);

//  Object - real time entity
//  Key value pairs
//  Collection of properties

let person = {
  pName: "Pavani",
  pAge: 20,
  isEmployed: true,
};

console.log(person.pAge);

console.log(person["pName"]);

// Arrays - Collection of data items
// Indexing - starts with zero - n-1
let fruits = ["Apple", "Mango", "Kiwi"];

console.log(fruits[2]);

console.log(fruits.length);

//  Function - Block of code used to perform specific task
// function greet() {
//   return "Good Morning";
// }

// console.log(greet());

// parameters
function greet(user) {
  return "Good Morning" + user;
}

console.log(greet("Sweety")); // arguments

console.log(greet("Priya"));

//  Date
// Date()
let today = new Date();
console.log(today.getFullYear());

// Reg Exp
let pattern = /hello/i;
console.log(pattern.test("Hello Deepika"));

//  Type conversion
// Explicit - Manual
let str = "789";
let number = Number(str); // convert str to a number
console.log(typeof number);

// Implicit
let diff = "10" - 5;
console.log(diff);

let add = "10" + 5;
console.log(add);

//  BigInt
let num1 = 2133436543636341341346436313n;

console.log(num1);

//  BigInt(4313436434131313634)

let x1 = 10n;

console.log(typeof x1);

// Symbol

let id = Symbol();

console.log(id);

let id1 = Symbol("userid");

console.log(id1);

let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 == s2);



let name = null;
console.log(typeof name);



let idCard={
    name:"Jeyaraman",
    age:25,
    address:{
        city:"Chennai",
        state:"Tamilnadu"
    }
}


console.log(idCard.address["city"]);
console.log(idCard.address.state);
console.log(idCard["address"]["state"]);

