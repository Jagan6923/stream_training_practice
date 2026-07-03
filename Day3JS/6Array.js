
let shelf = ["shirt", "pant", "book", "pen", "pencil"];

// Accessing
console.log(shelf[2]); // book
console.log(shelf.length); // 5

// push() → add at end
shelf.push("eraser");
console.log("push:", shelf);

// pop() → remove last
shelf.pop();
console.log("pop:", shelf);

// unshift() → add at beginning
shelf.unshift("bag");
console.log("unshift:", shelf);

// shift() → remove first
shelf.shift();
console.log("shift:", shelf);

// indexOf() → find position
console.log("indexOf:", shelf.indexOf("book"));

// includes() → check value exists
console.log("includes:", shelf.includes("pen"));

// join() → convert array to string
console.log("join:", shelf.join(" - "));

// slice() → copy part of array
console.log("slice:", shelf.slice(1, 3));

// splice() → remove/add items
shelf.splice(2, 1, "notebook");
console.log("splice:", shelf);

// reverse() → reverse array
console.log("reverse:", shelf.reverse());

// sort() → sort alphabetically
console.log("sort:", shelf.sort());

let books = [
  "To kill a Mockingbird",
  "1984",
  "The Graet Gatsby",
  "The catcher in the Rye",
  "Moby-Dick",
];

console.log("Initial LIbrary Collection");
console.log(books);

// Add a new book
books.push("Pride and Prejudice");

console.log("\n Update Library collection");
console.log(books);

// Removing a book
let bookTitle = "1984";
let index = books.indexOf(bookTitle);

if (index !== -1) {
  books.splice(index, 1);
  console.log(`\n ${bookTitle} has been removed from the library`);
} else {
  console.log(`${bookTitle}, Not found in the library`);
}

console.log(books);

// Check if the book is present in the lobrary
let bookSearch = "Pride and Prejudice";
let isInLibrary = books.includes(bookSearch);

if (isInLibrary) {
  console.log(`\n ${bookSearch} is in the library`);
} else {
  console.log(`\n ${bookSearch} is not  in the library`);
}

// Display all the books
console.log(`\n Current Books Collection`);

books.forEach(function (book, index) {
  console.log(`${index + 1}. ${book}`);
});
 