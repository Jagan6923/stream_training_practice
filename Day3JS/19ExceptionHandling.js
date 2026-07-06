let num1 = 100;
let num2 = 10;

try {
  //   console.log(num1);
  //   console.log(num1 / num2);
  //   console.log(num1 + num2);

  console.log(num1 + num2);
  console.log(a);
} catch (error) {
  console.log("An Error occured");
  console.log("Error Type ", error.type);
  console.log("Error Message  ", error.message);
} finally {
  console.log("This method is always executed");
}

// number is positive or not
function isPositive(num) {
  if (num > 0) {
    console.log(`${num} is a positive number`);
  } else if (num == 0) {
    throw new Error(`${num} is Zero`);
  } else {
    throw new Error(`${num} is negative`);
  }
}

isPositive(15);
// isPositive(0);
isPositive(-10);
 