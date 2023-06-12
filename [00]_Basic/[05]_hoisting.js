//    *  hoisting  => mean that js
//   * var => it work with hoisting
//   * let , const  => not work with hoisting

/*
    Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their 
    containing scope during the compilation phase, while the actual assignments or definitions remain in their 
    original positions. This allows you to use variables and functions before they are declared in your code.
        However, it's important to note that only the declarations are hoisted, not the initializations or assignments.

*/

// => variable hosting

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// In this example, even though the variable x is referenced before it is declared and assigned a value, it does not throw an error. Instead, the variable is hoisted to the top, and its value is undefined until the actual assignment occurs.

//  the above code like the following code :

var x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5

// => function hoisting
sayHello(); // Output: "Hello"

function sayHello() {
  console.log("Hello");
}

/*
In this example, the function sayHello() is called before its declaration. 
JavaScript hoists the function declaration to the top, allowing the function to be invoked successfully.

The above code is equivalent to the following after hoisting:

*/

function sayHello() {
  console.log("Hello");
}

sayHello(); // Output: "Hello"
/*
  It's important to note that hoisting moves the function declaration to the top with its all code , but not the function expressions. Function expressions are not hoisted.
  */

//   this is the function expression
sayHello(); // Error: sayHello is not a function

var sayHello = function () {
  console.log("Hello");
};

// => let and const hoisting

function example() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  console.log(x); // Output: 10
}

example();

/*
  With let and const, hoisting still occurs, but unlike var, the variables are not initialized to undefined automatically. Instead, a ReferenceError is thrown if you try to access them before their initialization.
  
  It's important to write clean and understandable code by declaring variables and functions before using them to avoid potential confusion caused by hoisting.

  */

// the hoisting for the fuction take the first pariority to the hoisting of the variable

// arror function not hoisted
