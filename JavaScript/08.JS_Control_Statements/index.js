// For Loop
// Repeats a block of code a specified number of times, with a loop variable that changes
// with each iteration.
for(let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
  
// While Loop
// Repeats a block of code while a specified condition is true. The condition is checked
// before the loop runs.
let num = 1;
while (num <= 5) {
    console.log("Number:", num);
    num++;
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5
  
// Do-While Loop
// Similar to a while loop, but the condition is checked after the loop runs, 
// ensuring the block of code runs at least once.
let counter = 1;
do {
    console.log("Counter:", counter);
    counter++;
} while (counter <= 5);

// Output:
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
  
// Break Statement
// Terminates the loop it's inside, regardless of the loop's condition.
for (let j = 1; j <= 10; j++) {
    if (j === 5) {
      break;
    }
    console.log("Break Loop:", j);
}

// Output:
// Break Loop: 1
// Break Loop: 2
// Break Loop: 3
// Break Loop: 4
  
// Continue Statement
// Skips the rest of the current iteration and proceeds to the next one.
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
      continue;
    }
    console.log("Continue Loop:", k);
}

// Output:
// Continue Loop: 1
// Continue Loop: 2
// Continue Loop: 4
// Continue Loop: 5
  
// Nested Loops
// When one loop is inside another loop. The inner loop runs completely 
// for each iteration of the outer loop.
for(let a = 1; a <= 3; a++) {
    for(let b = 1; b <= 3; b++) {
        console.log("a:", a, "b:", b);
    }
}

// Output:
// a: 1 b: 1
// a: 1 b: 2
// a: 1 b: 3
// a: 2 b: 1
// a: 2 b: 2
// a: 2 b: 3
// a: 3 b: 1
// a: 3 b: 2
// a: 3 b: 3