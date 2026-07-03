// Rest operator

// Array
let numbers = [1, 2, 3, 4, 5, 6];

let [a, ...new_arr] = numbers;

console.log(new_arr);

// function x(...args){}

// x(street)
// x(street, city)
// x(street, city, state)

// object
let product = {
  pNmae: "Air Cooler",
  pPrice: 95000,
  pColor: "White",
};

let { pPrice, ...new_obj } = product;

console.log(new_obj);

// Spread operator - Converse  of rest operator
// Expand the values

let num1 = [10, 20, 30, 40, 50];
let num2 = [60, 70, 80, 90];

let num3 = [100, 110, ...num1, 150, 160, ...num2];

console.log(num3);

//  Forms
// let user = {name: "",age:"", place : ""}

// let name ,
// let age --- {...user, age}
// let place ------ {...user, place}

// object
let person = {
  name: "Sindhu",
  age: 26,
};

let personAddresss = {
  city: "Mumbai",
  State: "Maharashtra",
};

let user = {
  name: "Pawan",
  ...person,
  ...personAddresss,
  contact: 9874563210,
};

console.log(user);
 


//////////////////////////////

let morningTasks = ["Wake up", "Brush"];
let workTasks = ["Code", "Meeting"];

let fullDay = [...morningTasks, ...workTasks];

let updatedDay = [...fullDay,"Gym",  "Sleep"];

console.log("Morning:", morningTasks);
console.log("Work:", workTasks);
console.log("Full Day:", fullDay);
console.log("Updated Day:", updatedDay);

//////////////////////////////

let basicInfo = {
  name: "Jagan",
  age: 22
};

let jobInfo = {
  role: "Developer",
  company: "Startup"
};

let profile = {
  ...basicInfo,
  ...jobInfo,
  location: "Chennai"
};

console.log("Basic:", basicInfo);
console.log("Job:", jobInfo);
console.log("Profile:", profile);

///////////////////////////////

let movies = ["Leo", "Vikram", "Master", "Kaithi", "Rolex"];

let [firstMovie, secondMovie, ...remainingMovies] = movies;

console.log("First:", firstMovie);
console.log("Second:", secondMovie);
console.log("Remaining:", remainingMovies);


///////////////////////////////

let student = {
  name: "Arun",
  age: 21,
  dept: "CSE",
  city: "Trichy"
};

let { name, ...otherDetails } = student;

console.log("Name:", name);
console.log("Other Details:", otherDetails);