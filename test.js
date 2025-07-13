const expression1 = '2 + 2';
eval(`console.log(${expression1})`);

const userInput1 = "hello";
const buf1 = Buffer(userInput1);

let unusedVar = 5;
var oldStyle = "not recommended";

const message = "This uses double quotes";

const expr = '1 + 1';
eval(`console.log(${expr})`);

const buf2 = Buffer('bad');

const header = "Set-Cookie: test\r\nAnother-Header: injected";

const domInput = '<img src=x onerror=alert(1)>';
document.body.innerHTML = domInput;

console.log("Test complete");

// === CodeQL Test Case: JavaScript Injection ===

const userInput = "2 + 2";           // Simulating external user input
const result = eval(userInput);      // ❌ Dangerous: Code injection vulnerability
console.log(result);



// // TEMPLATE
// const expression1 = '2 + 2';
// eval(`console.log(${expression1})`);

// const userInput1 = "hello";
// const buf1 = Buffer(userInput1);

// let unusedVar = 5;
// var oldStyle = "not recommended";

// const message = "This uses double quotes";

// const expr = '1 + 1';
// eval(`console.log(${expr})`);

// const buf2 = Buffer('bad');

// const header = "Set-Cookie: test\r\nAnother-Header: injected";

// const domInput = '<img src=x onerror=alert(1)>';
// document.body.innerHTML = domInput;

// console.log("Test complete");
