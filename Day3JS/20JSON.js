// A simple JSON Object

const data = {
  name: "Jayalakshmi",
  age: 20,
  isStudent: false,
  courses: ["HTML", "CSS"],
  address: {
    Street: "123 Main St",
    City: "Bangalore",
  },
};

// JSON Array
const employees = [
  {
    name: "Abhinav",
    age: 21,
  },
  {
    name: "Venkata",
    age: 20,
  },
];

// parse JSON
const JSONString = '{"name":"Abdulla", "place": "Chennai"}';

const obj = JSON.parse(JSONString);

console.log(obj.name);
console.log(obj.place);

// Stringifying object
const newObj = {
  name: "Hemanth",
  place: "Pune",
};

const newJSONString = JSON.stringify(newObj);

console.log(typeof newJSONString);
 