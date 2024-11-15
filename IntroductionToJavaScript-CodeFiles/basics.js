// 1. Variables
// Declaring variables with let and const
let name = "Alice"; // A variable that can be reassigned
const birthYear = 2000; // A constant that cannot be reassigned

console.log("Name:", name);
console.log("Birth Year:", birthYear);

// 2. Data Types
// JavaScript has various data types: strings, numbers, booleans, arrays, objects
let age = 24; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "sports", "coding"]; // Array
let address = {
	// Object
	street: "123 Main St",
	city: "Wonderland",
	zip: "12345",
};

console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address.city);

// 3. Operators
let sum = age + 5; // Addition
let product = age * 2; // Multiplication
let isAdult = age >= 18; // Comparison
let pow = 5 ** 2; // exponentiation   =>   5^2
let incremented = pow++;
let description = "Your name is: " + name + ", and Age is: " + age; // Concatenation

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Is Adult:", isAdult);
console.log("5 squared is:", pow);
console.log("Incremented result:", incremented);
console.log("Description:", description);

// 4. Conditional Statements
// Using if-else to control the flow based on conditions
if (age >= 18) {
	console.log(name + " is an adult.");
} else if (age >= 13) {
	console.log(name + " is a teenager.");
} else {
	console.log(name + " is a child.");
}

// 5. Loops
// Using for loop to iterate over an array
for (let i = 0; i < hobbies.length; i++) {
	console.log("Hobby " + (i + 1) + ":", hobbies[i]);
}

// Using while loop
let counter = 1;
while (counter <= 3) {
	console.log("Counter:", counter);
	counter++;
}

// 6. Functions
// Defining and calling functions in JavaScript
function greet(person) {
	return "Hello, " + person + "!";
}

let greeting = greet(name);
console.log(greeting);

// Arrow function (modern and concise syntax). read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const square = num => num * num;
console.log("Square of 4:", square(4));

// JSON.stringify() - Converts a JavaScript object to a JSON string
let jsonString = JSON.stringify(address);
console.log("JSON string of address object:", jsonString);

// JSON.parse() - Parses a JSON string to create a JavaScript object
let parsedObject = JSON.parse(jsonString);
console.log("Parsed object from JSON string:", parsedObject);
