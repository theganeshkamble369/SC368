// Sample array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// 1. push() - Adds one or more elements to the end of an array
numbers.push(6);
console.log("After push(6):", numbers); // [1, 2, 3, 4, 5, 6]

// 2. pop() - Removes the last element from an array
let lastElement = numbers.pop();
console.log("After pop():", numbers); // [1, 2, 3, 4, 5]
console.log("Popped element:", lastElement); // 6

// 3. shift() - Removes the first element from an array
let firstElement = numbers.shift();
console.log("After shift():", numbers); // [2, 3, 4, 5]
console.log("Shifted element:", firstElement); // 1

// 4. unshift() - Adds one or more elements to the beginning of an array
numbers.unshift(0);
console.log("After unshift(0):", numbers); // [0, 2, 3, 4, 5]

// 5. forEach() - Executes a function for each element in the array
console.log("Using forEach to print each element:");
numbers.forEach(num => {
	console.log(num);
});

// 6. map() - Creates a new array with the results of calling a function on every element
let doubledNumbers = numbers.map(num => num * 2);
console.log("After map(num => num * 2):", doubledNumbers); // [0, 4, 6, 8, 10]

// 7. filter() - Creates a new array with elements that pass the test of a provided function
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("After filter(num => num % 2 === 0):", evenNumbers); // [0, 2, 4]

// 8. reduce() - Reduces an array to a single value by executing a function on each element
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers using reduce:", sum); // 14

// 9. find() - Returns the first element that satisfies a provided function
let found = numbers.find(num => num > 3);
console.log("First number greater than 3 (find):", found); // 4

// 10. indexOf() - Finds the index of a specific element in the array
let index = numbers.indexOf(3);
console.log("Index of 3 (indexOf):", index); // 2
let notFoundIndex = numbers.indexOf(10);
console.log("Index of 10 (not in array):", notFoundIndex); // -1

// 11. some() - Checks if at least one element satisfies a provided function
let hasOdd = numbers.some(num => num % 2 !== 0);
console.log("Array has odd numbers (some):", hasOdd); // true

// 12. every() - Checks if all elements satisfy a provided function
let allPositive = numbers.every(num => num > 0);
console.log("All elements are positive (every):", allPositive); // true

// 13. includes() - Checks if an array contains a specific element
let hasFour = numbers.includes(5);
console.log("Array includes 4 (includes):", hasFour); // true
