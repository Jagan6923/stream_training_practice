function Interviewer(status) {
  return new Promise((resolve, reject) => {
    if (status == "success") {
      resolve();
    } else {
      reject();
    }
  });
}

console.log("start");

Interviewer("success")
  .then(() => {
    console.log("Hurrrayyyyy, Youa re qualified!!!");
  })
  .catch(() => {
    console.log("Better luck next time");
  });

console.log("Initiating a promise");
 