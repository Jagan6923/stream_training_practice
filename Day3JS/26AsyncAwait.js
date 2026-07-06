function Result(score) {
  return new Promise((resolve, reject) => {
    if (score > 35) {
      resolve("You have passed in the exam ");
    } else {
      reject("You have not passed in the exam");
    }
  });
}
 
// Result(40).then().catch()
 
// Async await
async function getResult() {
  try {
    console.log("Fetching data.......");
    let response = await Result(60);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
 
getResult();
console.log("Hiii");
 