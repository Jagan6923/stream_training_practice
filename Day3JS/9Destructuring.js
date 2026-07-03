// Arrays
let fruits = ["Apple", "Kiwi", "Orange", "Guava"];
 
console.log(fruits[0], fruits[1]);
 
// Destructuring - unpack the values from the array and we append/ assign them to distinct variables
 
// let [a, b] = fruits;
 
// console.log(a, b);
 
let [, , third] = fruits;
console.log(third);
 
// function showFruits([, , , fruit4]) {
//   console.log(fruit4);
// }
 
// showFruits(fruits);
 
// objects
let product = {
  pNmae: "Air Cooler",
  pPrice: 95000,
  pColor: "White",
};
 
console.log(product.pNmae, product.pColor);
 
let { pNmae, pColor } = product;
 
console.log(pNmae, pColor);
 
// Destructuring - unpck the properties from the object & assign them to the variables
 
let product1 = {
  pNmae: "TV",
  pPrice: 85000,
  pColor: "Black",
};
 
// Aliasing
let { pNmae: prodName, pColor: prodColor } = product1;
 
console.log(prodName, prodColor);



///////////////////////////////////////////////


let players = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Haaland"];


let [p1, p2] = players;
console.log("Goat:", p1, p2);


let [, , thirdPlayer] = players;
console.log("Skip:", thirdPlayer);


let [first, , , fourth] = players;
console.log("Specific:", first, fourth);


let [captain, viceCaptain, ...others] = players;
console.log("Rest:", captain, viceCaptain);
console.log("Others:", others);



// 8. Function parameter destructuring
function showLastPlayer([, , , , last]) {
  console.log("Function:", last);
}

showLastPlayer(players);


///////////////////////////////////////////


let employee = {
  empName: "Jagan",
  empAge: 22,
  empRole: "Developer",
  empLocation: "Chennai",
  empSkills: ["HTML", "CSS", "JavaScript"]
};

let { empName, empRole } = employee;
console.log("Basic:", empName, empRole);

let { empLocation: city } = employee;
console.log("Alias:", city);

let { empSalary = 25000 } = employee;
console.log("Default:", empSalary);

let { empAge, empSkills } = employee;
console.log("Multiple:", empAge, empSkills);

let {
  empSkills: [skill1, skill2]
} = employee;

console.log("Skills:", skill1, skill2);

let { empName: eName, ...remaining } = employee;

console.log("Rest Name:", eName);
console.log("Remaining:", remaining);

function showEmployee({ empName, empRole }) {
  console.log("Function:", empName, empRole);
}

showEmployee(employee);