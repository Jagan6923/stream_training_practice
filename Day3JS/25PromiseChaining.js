function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 is completed ");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 is completed ");
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3 is completed ");
    }, 1000);
  });
}

task1()
  .then((result) => {
    console.log(result);
    return task2(result);
  })
  .then((result) => {
    console.log(result);
    return task3(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error ", err);
  });
 