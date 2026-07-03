let number = [10, 20, 30, 40, 50, 60];

// output - [20,40,60,80,100,120]

let mappedArray = number.map((val) => val * 2);

console.log(mappedArray);

//  output - [10,20,30, 40,60]

let itemToBeRemoved = 50;
let filteredArray = number.filter((item) => item != itemToBeRemoved);

console.log(filteredArray);
 