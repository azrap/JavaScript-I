// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

// Azra's Code
let myFunction = () => console.log("Function was invoked!");
 myFunction();


// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

// Azra's Code
let anotherFunction = (param) => param;
anotherFunction("Example");
console.log (anotherFunction("Example")); // console.log to make sure it works


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

// Azra's Code
let add =(param1, param2) => param1 + param2;
console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

// Azra's Code
let subtract =(param1, param2) => param1 - param2;
console.log(subtract(1,2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num*3);
console.log(triple);
