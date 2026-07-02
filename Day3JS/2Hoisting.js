// console.log("Hiiiii");

// var - Redeclaration is possible, Reassignment is also possible
//  var varname = value

var company = "Accenture Hyderabad";

console.log(company);

// 1000 lines of code

// var company = "Accenture Pune";
company = "Accenture Chennai";
console.log(company);

//  logic to save

//  let and const - 2015 - ES6

// let - Redeclration is not possible but reassignment is possible
let mobile = "Iphone 17";

console.log(mobile);

// 1000

// let mobile = "One plus";

// console.log(mobile); //syntax error: mobile has already been declared

mobile = "Samsung";

console.log(mobile);

//  const - Redeclaration & Reassignment  is not possible

const uname = "Prajwal";

console.log(uname);

// const uname = "Chetan";

// console.log(uname); // synatx error

// uname = "Nikita";

// console.log(uname); // Typeerror: Assignment

// Priority
//  const , let and var

// block scoped - const
let phone = "Iphone 16";

{
  let phone = "Iphone 17";
  console.log("Line no 57 ", phone);
}

console.log("Line no 60 ", phone);

//  var
var phone1 = "Iphone 16";

{
  var phone1 = "Iphone 17";
  console.log("Line no 67 ", phone1);
}

console.log("Line no 70 ", phone1);

//Hoisting - access the variable before initialisation

// var x ----- undefined
// let y, const - Temporal Dead zone

// console.log(x, y, z);
// console.log(x, z);
console.log(x);

//  ReferenceError: Cannot access 'y' before initialization
// ReferenceError: Cannot access 'z' before initialization
var x = 10;
let y = 20;
const z = 30;
 