// Recursion is a technique in which a function calls itself in order to solve a problem. It is a powerful tool in functional programming and can be used to solve problems that are naturally recursive in nature.

// A recursive function must have at least one condition where it will stop calling itself, or the function will call itself indefinitely until JavaScript throws an error.

// The condition that stops a recursive function from calling itself is known as the base case.

// Example 1: Recursive Function - Factorial

// We define a recursive function factorial that calculates the factorial of a positive integer n.
// The base case is when n is 0 or 1, in which case the factorial is 1.
// In the recursive case, we calculate factorial(n) as n * factorial(n - 1).

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case: factorial(n) = n * factorial(n-1)
  }
}

const factOf5 = factorial(5);
console.log(`Example 1: Factorial of 5 is ${factOf5}`);

// Example 1: Factorial of 5 is 120

// Example 2: Recursive Function - Fibonacci

// We define a recursive function fibonacci that calculates the Fibonacci number at a given position n.
// The base cases are when n is 0 or 1, in which case the Fibonacci number is n.
// In the recursive case, we calculate fibonacci(n) as fibonacci(n - 1) + fibonacci(n - 2).

function fibonacci(n) {
  if (n <= 1) {
    return n; // Base case: fibonacci(0) = 0, fibonacci(1) = 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
  }
}

const fibOf7 = fibonacci(7);
console.log(`Example 2: Fibonacci number at position 7 is ${fibOf7}`);

// Example 2: Fibonacci number at position 7 is 13

// Example 3: Recursive Function - Count Down

// We define a recursive function countDown that counts down from a given number to 0.
// The base case is when the number is less than or equal to 0, in which case we log "Blastoff!".
// In the recursive case, we log the current number and call countDown with the decremented number.

function countDown(number) {
  if (number <= 0) {
    console.log("Blastoff!"); // Base case: countdown reached 0
  } else {
    console.log(number);
    countDown(number - 1); // Recursive case: decrement the number and continue countdown
  }
}

console.log("Example 3: Countdown:");
countDown(5);

// Example 3: Countdown:
// 5
// 4
// 3
// 2
// 1
// Blastoff!
