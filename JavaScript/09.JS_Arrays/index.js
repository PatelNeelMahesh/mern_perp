// Creating an Array
// Arrays are ordered collections of elements enclosed in square brackets.
const fruits = ["apple", "banana", "orange", "grape"];

// Accessing Elements
// Elements are accessed by their index within the array.
const firstFruit = fruits[0];
const lastFruit = fruits[fruits.length - 1];

console.log(firstFruit); // Output: apple
console.log(lastFruit); // Output: grape

// Modifying Elements
// Elements can be modified by assigning new values to specific indices.
fruits[1] = "kiwi";
console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape"]

// Adding Elements
// Elements can be added using push() (end) and unshift() (beginning).
fruits.push("mango"); // Add at the end
fruits.unshift("strawberry"); // Add at the beginning

console.log(fruits); // Output: ["strawberry", "apple", "kiwi", "orange", "grape", "mango"]

// Removing Elements
// Elements can be removed using pop() (end) and shift() (beginning).
fruits.pop(); // Remove from the end
fruits.shift(); // Remove from the beginning

console.log(fruits); // Output: ["apple", "kiwi", "orange", "grape"]

// Slicing an Array
// slice() extracts a portion of an array into a new array.
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["kiwi", "orange"]

// Splicing an Array
// splice() can add, remove, or replace elements in an array.
fruits.splice(1, 2, "pear", "peach");
console.log(fruits); // Output: ["apple", "pear", "peach", "grape"]

// Concatenating Arrays
// Arrays can be combined using concat().
const moreFruits = ["banana", "mango"];
const allFruits = fruits.concat(moreFruits);

console.log(allFruits); // Output: ["apple", "pear", "peach", "grape", "banana", "mango"]

// Iterating over an Array
// Using a for loop to iterate through array elements.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach()
// A method to iterate through array elements more concisely.
fruits.forEach(function(fruit) {
  console.log(fruit);
});
