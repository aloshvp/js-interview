// Function Declaration
// function add(a, b) {
//     return a + b;
// }

// Function Expression
// const multiply = function (a, b) {
//     return a * b;
// };

// Declaration: hoisted completely → can call before definition.
// Expression: not hoisted → can only call after assignment.
// Function expressions can be anonymous or named.

// ---------------------------------------------------------------------------------

// Arrow functions vs normal functions

// const normalFunc = function () { console.log(this); };
// const arrowFunc = () => { console.log(this); };

// Arrow functions do not have their own this → inherit from enclosing lexical scope.
// Cannot be used as constructors.
// No arguments object(use rest parameters instead).

// ---------------------------------------------------------------------------------

// What are higher - order functions ?

// A higher - order function is one that either:
// Takes another function as an argument, OR
// Returns a function.

// function multiplyBy(factor) {
//     return function (num) {
//         return num * factor;
//     };
// }

// const double = multiplyBy(2);
// console.log(double(5)); // 10

// Interviewer Note:
// Connect this to real - world methods like map, filter, reduce.

// ---------------------------------------------------------------------------------

// What are callbacks and why are they important ?

// A callback is a function passed into another function to be executed later.
// Common in async operations like reading files, APIs, setTimeout.

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received!");
//     }, 1000);
// }

// fetchData((msg) => console.log(msg));

// Problem with callbacks: Callback Hell(nested functions, hard to maintain). → Solution: Promises.

// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
