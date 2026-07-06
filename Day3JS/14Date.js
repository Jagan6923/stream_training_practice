const now = new Date();
console.log(now);
console.log(now.toString());

let specificDate = new Date('2024-06-15');
console.log(specificDate);

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);