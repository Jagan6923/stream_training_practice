const students = [
  { id: 1, name: "Rahul", marks: 85, city: "Hyderabad" },
  { id: 2, name: "Priya", marks: 45, city: "Chennai" },
  { id: 3, name: "Kiran", marks: 90, city: "Hyderabad" },
  { id: 4, name: "Sneha", marks: 35, city: "Bangalore" }
];
 
// - Print only student names 
// - print students who have scored marks > 50 
// - Add 5 grace marks to every student 
// - Count how many students passed ---- > 40 
// - Print only Hyderabd students
// - Find the topper 
// - Find average marks 
// - Print all student details - Foreach 

const studNames= students.map((i)=>i.name);
console.log("Student Names:", studNames);

console.log('/////////////////////////////');


const above50= students.filter((i)=>i.marks>50);
console.log("Students with marks above 50:", above50);

console.log('/////////////////////////////');

const addedGraceMarks=students.map((i)=>({...i,marks:i.marks+5}));
console.log("Students with grace marks added:", addedGraceMarks);

console.log('/////////////////////////////');


const passedStud=addedGraceMarks.filter((i)=>i.marks>40);
console.log("Count of students passed:", passedStud.length);

console.log('/////////////////////////////');

const hydStud=students.filter((i)=>i.city==='Hyderabad');
console.log("Hyderabad Students:", hydStud);

console.log('/////////////////////////////');

const topperStud=addedGraceMarks.reduce((topper, current) => {
  return (current.marks > topper.marks) ? current : topper;
}, addedGraceMarks[0]);
console.log("Topper Student:", topperStud);

console.log('/////////////////////////////');

const avgMarks=addedGraceMarks.reduce((sum,current)=>sum+current.marks,0)/addedGraceMarks.length;
console.log("Average Marks:", avgMarks);
console.log('/////////////////////////////');

const allStudDetails=students.forEach((i)=>console.log(i));