// Decision making constructs

let age = 20;

if (age >= 18) {
  console.log("You can vote ");
}

// if else
let temperature = 15;

if (temperature > 20) {
  console.log("It is wwarm outside ");
} else {
  console.log("Its cold outside ");
}

//  if else if
let score = 55;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("F");
}

// switch
let selection = 2; // user selects 2

let food;

switch (selection) {
  case 1:
    food = "Pasta";
    break;
  case 2:
    food = "Pizza";
    break;
  case 3:
    food = "Burger";
    break;
  case 4:
    food = "Biryani";
    break;
  case 5:
    food = "Noodles";
    break;
  default:
    food = "Invalid selection";
}

console.log(`You have selceted ${food}`);

//  loops
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

let count = 0;

while (count < 3) {
  console.log(`Count ${count}`);
  count++;
}

//  Do while - Execute code atleast once
let number = 0;
do {
  console.log(`Number ${number}`);
  number++;
} while (number < 0);

// for ... in
let employee = {
  empId: 101,
  empName: "Virat",
  empLoc: "Bangalore",
  empSalary: 123456,
};

for (let val in employee) {
  console.log(`${val} : ${employee[val]}`);
}

let str = "Deepika";

for (let x of str) {
  console.log(x.toUpperCase());
}

let num = [1, 2, 3, 4, 5];

for (let n of num) {
  console.log(n ** 2);
}

num.forEach(function (item) {
  console.log(item ** 3);
});

//  control flow
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break; // exit the loop when i is 5
  }
  console.log(`Iteration ${i}`);
}

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(`Iteration ${i}`);
}
 