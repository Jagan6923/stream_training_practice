const numbers = [10, 15, 20, 25, 30, 35];

console.log("All Numbers:");
numbers.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});

const doubled = numbers.map((value) => value * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter((value) => value % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const oddNumbers = numbers.filter((value) => value % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

const total = numbers.reduce((acc, value) => acc + value, 0);
console.log("Total:", total);

const largest = numbers.reduce((acc, value) =>
  value > acc ? value : acc
);
console.log("Largest:", largest);

const smallest = numbers.reduce((acc, value) =>
  value < acc ? value : acc
);
console.log("Smallest:", smallest);

const firstGreater = numbers.find((value) => value > 20);
console.log("First number > 20:", firstGreater);

const allPositive = numbers.every((value) => value > 0);
console.log("All positive?", allPositive);

const greaterThan30 = numbers.some((value) => value > 30);
console.log("Any number > 30?", greaterThan30);