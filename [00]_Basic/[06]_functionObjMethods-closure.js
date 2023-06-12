//

/*
   table of content 

    1.0 : function object methods
      1.1 : - function borrowing using apply 
      1.2 : - function borrowing using call
      1.3 : - function borrowing using bind

     2.0 : inner function ( scope chain & shadowing )
     3.0 : clouser : ?
----------------------------------------

*/
//  1.0 : function object methods

let str = "this is JavaScript";
console.log(str.join()); // error join() is not a function

// => think with me what if i can borrow these method from array

// 1.1 - function borrowing using apply

console.log([r].join.apply(str, ["-_-"]));

// apply is a method to the function object join

// ["-_-"] => thisis  the pattern that join need

// str the object that you will apply join on it

// 1.2 - function borrowing using call

console.log([].join.call(str, "**"));
// the parameter not with in array

// 1.3 - function borrowing using bind

var result = [].join.bind(str); // this will return a function as a copy of join
result("");
// write join parameter inside the function
// but here we can pass the parameter on the function call in pind

//----------------------------------------

// 2.0 : inner function ( scope chain & shadowing )

/* 
scope chain : 
When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.

If it’s still could not find the variable, it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error. 

shadowing : when i define a variable in the block scope then or functional scope withe the same name of the global scope 












//----------------------------------------
     3.0 : clouser : ?

*/
/*

A closure allows a function to retain access to variables, parameters, and functions in its outer scope,
 even after the outer function has finished executing.

To understand closures, let's look at an example:
*/

function outerFunction() {
  var outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: "I am from the outer function"
/*
- In the above example, the innerFunction is defined inside the outerFunction. When outerFunction is called, it defines a variable called outerVariable and also declares innerFunction. Then, outerFunction returns innerFunction as the result.

- The critical aspect here is that innerFunction has access to the outerVariable even after outerFunction has finished executing. This is possible because innerFunction forms a closure over the outerVariable and retains a reference to it.

- Closures are powerful because they provide a way to create and maintain private data within functions. The variables within the outer scope of a closure are not accessible from the outside, but the inner function can still access and use them.

- Closures are often used for encapsulation, creating private variables and methods, and implementing data hiding in JavaScript.

It's important to note that closures have memory implications as they keep the outer variables alive in memory even if they are no longer needed. Therefore, using closures should be done judiciously to avoid unnecessary memory consumption.

*/

// private variable

function createPerson(name) {
  return {
    getName: function () {
      return name;
    },
    setName: function (newName) {
      name = newName;
    },
  };
}

const person = createPerson("John");
console.log(person.getName()); // Output: "John"
person.setName("Alice");
console.log(person.getName()); // Output: "Alice"
/*
In this example, the createPerson function returns an object with methods to access and modify a private variable name.

The closure formed by the methods allows them to access and update the name variable,
 even though it is not directly
 accessible from outside the object. This enables data encapsulation and privacy.
*/

// this is also another example

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

const result = add(1)(2)(3);
console.log(result); // Output:
