// Example 1: Using eval (Security risk)
const expression = '2 + 2';
eval(`console.log(${expression})`); // ❌ Should be flagged by eslint-plugin-security

// Example 2: Using Buffer without 'new' (deprecated/insecure)
const userInput = 'hello';
const buf = Buffer(userInput); // ❌ Insecure usage of Buffer

// Example 3: Declaring variables but not using them
let unusedVar = 5; // ❌ ESLint will flag unused variables

// Example 4: Using var instead of let/const
let oldStyle = 'not recommended'; // ❌ ESLint (default rules) discourages var

// Example 5: Double quotes instead of single (style rule, optional)
const message = 'This uses double quotes'; // ❌ Might be flagged depending on rules

console.log('Test complete');




// TEMPLATE SO CAN REPLACE WHEN FIX
// // Example 1: Using eval (Security risk)
// const expression = '2 + 2';
// eval(`console.log(${expression})`); // ❌ Should be flagged by eslint-plugin-security

// // Example 2: Using Buffer without 'new' (deprecated/insecure)
// const userInput = "hello";
// const buf = Buffer(userInput); // ❌ Insecure usage of Buffer

// // Example 3: Declaring variables but not using them
// let unusedVar = 5; // ❌ ESLint will flag unused variables

// // Example 4: Using var instead of let/const
// var oldStyle = "not recommended"; // ❌ ESLint (default rules) discourages var

// // Example 5: Double quotes instead of single (style rule, optional)
// const message = "This uses double quotes"; // ❌ Might be flagged depending on rules

// console.log("Test complete");
