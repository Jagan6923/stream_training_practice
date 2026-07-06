function sayHello(name, callback) {
  console.log(`Hello, ${name} Welcome to call back`);
 
  setTimeout(() => {
    callback();
  }, 3000);
 
  console.log("Good Evening");
}
 
function greet() {
  // connect to api
  console.log("Data is fetched, Thank you ");
}
 
sayHello("Karuna", greet);
 
console.log("Hiii");


/////////////////////


//  async code
console.log("Hello");

console.log("World!!!");

// async code
console.log("Start");

setTimeout(() => {
  console.log("Data is fetched ");
}, 2000);

console.log("Data is being fetched ");
 