// Basic string creation
const greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

// String length
const message = "How are you?";
console.log(message.length); // Output: 12

// Accessing characters
const name = "Priya";
console.log(name[0]); // Output: P
console.log(name.charAt(2)); // Output: i

// Concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Template literals
const age = 28;
const intro = `I am ${fullName}, and I am ${age} years old.`;
console.log(intro); // Output: I am John Doe, and I am 28 years old.

// Changing case
const sentence = "This Is a Sentence.";
console.log(sentence.toLowerCase()); // Output: this is a sentence.
console.log(sentence.toUpperCase()); // Output: THIS IS A SENTENCE.

// Trimming whitespace
const text = "   Some text with spaces.   ";
console.log(text.trim()); // Output: Some text with spaces.

// Finding substrings
const messageText = "Hello, how are you?";
console.log(messageText.indexOf("how")); // Output: 7
console.log(messageText.includes("you")); // Output: true

// Extracting substrings
const sentenceText = "The quick brown fox jumps over the lazy dog.";
console.log(sentenceText.slice(4, 15)); // Output: quick brown
console.log(sentenceText.substring(16, 20)); // Output: fox
console.log(sentenceText.substr(21, 4)); // Output: jumps

// Comparison 

// slice(start, end):
// Accepts positive and negative indices.
// Returns a new string with characters from start to end-1.
// The original string remains unchanged.

// substring(start, end):
// Accepts only positive indices.
// Returns a new string with characters from the smallest of start and end to the largest of start and end.
// The original string remains unchanged.

// substr(start, length):
// Accepts positive and negative indices.
// Returns a new string with length characters starting from start.
// The original string remains unchanged.

// Replacing parts of a string
const originalText = "Hello, World!";
const modifiedText = originalText.replace("Hello", "Hi");
console.log(modifiedText); // Output: Hi, World!

// Splitting strings into arrays
const fruitList = "apple,banana,orange";
const fruitsArray = fruitList.split(",");
console.log(fruitsArray); // Output: [ 'apple', 'banana', 'orange' ]
