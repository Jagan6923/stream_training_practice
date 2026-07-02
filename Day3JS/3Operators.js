// 1. Arithmetic operator
let a = 10;
let b = 3;

let addition = a + b;
let sub = a - b;
let product = a * b;
let divsion = a / b;

// Modulus (reminder)
let modulus = a % b;

//  Exponentiation
let exponentiation = a ** b; // 10 ** 3 = 1000

//  Increement
let increement = ++a; //11 // a = a + 1

// Decreement
let decreemnt = --b; //2

console.log("Arithemtic Operators ");

console.log("Addition ", addition);
console.log(`Subtraction ${sub}`);
console.log(`Product ${product}`);
console.log(`Division ${divsion}`);
console.log(`Modulus ${modulus}`);
console.log(`Exponentiation ${exponentiation}`);
console.log(`Increement ${increement}`);
console.log(`Decreement ${decreemnt}`);

//  Assignment operators
let x = 5;

// simple assignment
x = 10;

//  Addition assignment
x += 5; // x = x + 5

//  subtraction assignment
x -= 5; // x = x - 5

//  Multiplication
x *= 2;

x /= 4;

x %= 2;

x **= 3;

console.log("Assignment Operators ");
console.log(" Final value of X is ", x);

//  Comparision operators
let num1 = 7;
let num2 = "7";

console.log("Comparision Operators ");

// Equal to
console.log(num1 == num2); // value

// Strict equal to
console.log(num1 === num2); // value and type

//  Greater thn
console.log(num1 > 5); // true

// Less than
console.log(num1 < 10); // true

//  Greater than or eual to
console.log(num1 >= 7); // true

// Less than or equal to
console.log(num1 <= 6); // false

//  Logical operators
let trueVlaue = true;
let falseValue = false;

//  AND - both are true - true
//  OR - both are false - false

//  Logical AND

console.log(trueVlaue && falseValue);

console.log(num1 > 5 && num1 > 6);

//  Logical OR

console.log(trueVlaue || falseValue);

console.log(num1 > 8 || num1 > 10);

// Logical NOT

console.log(!trueVlaue);

//  Bitwise operators

let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary

console.log("Bitwise operators ");

// AND
console.log(bit1 & bit2); // 1

// OR
console.log(bit1 | bit2); // 7

//  Not
console.log(~bit1); // -6

// Left shift
console.log(bit1 << 1); // 10

//  right shift
console.log(bit1 >> 1); // 2

//  String operators & methods
let str1 = "Hello";
let str2 = "Khushi";

let greeting = str1 + " " + str2;

console.log(greeting);

//  Conditional operator
let age = 10;
let canVote = age >= 18 ? "Yes" : "No";

//  ?:

console.log("Can Vote ", canVote);

//  Type operator
console.log(typeof str1);

console.log(str1 instanceof String);

//  optional chaining
let user = {
  profile: {
    name: "Mayank",
  },
};

console.log(user.profile?.name); // access name safely
console.log(user.profile?.city); // undefined
 