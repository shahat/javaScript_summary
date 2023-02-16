11 JavaScript Concepts Every Web Developer 
Should Know to Take Their Skills to The Next Level

-----------------------------------------------------

1. IIFE
It stands for Immediately Invoked Function Expression. 
It’s the function that is called immediately after it’s created.
How can you define an IIFE? Look at the example below:

(() => console.log(‘Hello world’))();

As the code is executed, the console will log Hello world immediately.

The reason to use IIFE is to protect variables accessibility. 
The variables defined in IIFE can not be accessed from the outside.
 That’s the way to write maintainable code and prevent your source from becoming a mess.

-----------------------------------------------------

2. MVC Structure

Not only in JavaScript, but this structure is used in almost programming languages.
 Far from the name MVC, it’s a popular concept to organize your code into different
 layers like data, view, and logic and treat them separately.

As a project going big, you need a structure to scale it up without putting your 
head to the wall.
 MVC is one of the best to follow in the first place for the long term plan.
 At some points in the future when adding new features or investigate bugs, 
you will thank yourself for spending time implementing MVC in the past.

-----------------------------------------------------

3. Closure

We use this concept when talking about an inner function that always has access
 to the variables and parameters of its outer function, even after the outer function has returned.
Closure allows you to give accessibility to data inside a function without directly modifying them.
 This way, you can protect your code while giving others the ability to extend it. Especially when you public a library.

const sayHelloTo = name => {
  let message = ‘Hello ‘ + name;
  return () => console.log(message);
}
const sayHelloToAmy = sayHelloTo(‘Amy’);
sayHelloToAmy(); // Hello Amy

-----------------------------------------------------
4. Async/await

Async/await allows you to work with asynchronous processing. You usually fall into asynchronous tasks when dealing with calling API. The data need to be fully fetched before showing up on the view.

What makes me satisfied with using async/await is I can get rid of callbacks hell. If you’re anything like me, you don’t like nested code. It makes your code ugly and less maintainable.

See the example below for async/await usage:

const displayData = async () => {
  const data = await fetch(‘https://api.github.com/repositories');
  const jsonData = await data.json();
  console.log(jsonData);
};
displayData();


-----------------------------------------------------

5. Scope

There are two types of scope in JavaScript. The local scope and the global one.
 You can imagine a variable scope is a cow tied to a post by a rope. 
It can only move in a limited area, depending on the length of the rope.
With that metaphor, the local variable is like a cow tied by a short
 rope and the global one is like a cow with no rope at all.

For example:

// Global scope
const globalCow = ‘global cow’;
const showCow = () => {
  const localCow = ‘local cow’;
  return globalCow;
};
const clonedCow = globalCow;
const mixedCow = globalCow + localCow;
 // error: Uncaught ReferenceError: localCow is not defined

As you can see, the variable globalCow can be used anywhere even in the local context
of the function showCow. But you can’t use the variable localCow outside the function 
showCow since it’s defined locally.

-----------------------------------------------------
6. Value vs Reference Types

When you assign values to variables, it’s not that simple to just assign the values.
 You need to understand whether it’s the actual values or references, otherwise, 
you probably change the values unintentionally.
The story is easy when you assign primitive types such as string, number, or boolean.
 They’re actual values.

A little bit more complex if you assign objects, arrays, or functions. 
This time, the variable won’t hold the actual value but the reference to 
the actual value in the memory.

Example:

let num1 = 1;
let num2 = num1;
// Changing num2’s value does not change num1’s value
num2 = 4;
console.log(num1); // 1
console.log(num2); // 4

let arr1 = [‘Amy’, ‘John’];
let arr2 = arr1;
// Changing elements’ value in arr2 leads to changing elements’ value in arr1
arr2[0] = ‘Jane’;
console.log(arr1); // [“Jane”, “John”]
console.log(arr2); // [“Jane”, “John”]


-----------------------------------------------------
 
7. Callback

In JavaScript, a callback function is a function that is executed after another function 
is called. You can pass a callback function as a parameter to other functions.

So why do we use callback? Normally, the code we write runs sequentially from top to bottom.
 In some cases, however, there’re tasks need to be done before executing others. 
This is when callback comes in handy.
*********************************

const fetchUsers = callback => {
  setTimeout(() => {
    let response = ‘[{name: “Amy”}, {name: “John”}]’;
    callback(response);
  }, 500);
};
const showUsers = users => console.log(users);
fetchUsers(showUsers);

**********************************
In the example above, we call fetchUsers function and pass showUsers callback function 
as a parameter. When all the data is fully loaded, showUsers will display it on the screen.

-----------------------------------------------------

8. Prototype
Whenever we create a function or object in JavaScript, a prototype property will be added inside them. A prototype is an object associated with functions and objects by default, in which we can attach additional properties that can be inherited by other objects.

Example:

function Person() {
  this.name = ‘Amy’;
  this.age = 28;
}
Person.prototype.job = ‘Programmer’;
Person.prototype.showName = function() {
  console.log(‘My name is ‘ + this.name);
}
let person = new Person();
person.showName(); // My name is Amy





-----------------------------------------------------


9. Class

Prior to ES6, there are no classes in JavaScript. You can only approach the like-class concept in a functional way.

function Book(title) {
  this.title = title;
}
Book.prototype.showTitle = function() {
  console.log(this.title);
};
let book = new Book(‘JavaScript’);
book.showTitle(); // JavaScript
In ES6, you can create an actual class like any class-based language background:

class Book {
  constructor(title) {
    this.title = title;
  }
  showBook() {
    console.log(this.title);
  }
}
let book = new Book(‘ES6’);
book.showBook();
It’s convenient because it unifies several way of creating classes into a single one.
-----------------------------------------------------
10. Destructing

It’s a clean way to extract properties from objects.
Basic usage:

const person = {
  name: ‘Amy’,
  age: 28
};

let { name, age } = person;
console.log(name); // Amy
console.log(age); // 28
You can keep variables the same as properties name like above or define the new ones:

let { name: newName, age: newAge } = person;
console.log(newName); // Amy
console.log(newAge); // 28

-----------------------------------------------------

11. Spread Operator

This one will give you access to the insides of an iterable object. Simply talk, it’s a quick and concise way for adding items to arrays, combining objects, or pull the individual items out of an array and then pass them to a function.

// Combining Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = […arr1, …arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
// Combining Objects
let obj1 = {
  name: ‘Amy’,
  age: 28
};
let obj2 = {
  job: ‘programmer’
};
let obj3 = { …obj1, …obj2 };
console.log(obj3); // {name: “Amy”, age: 28, job: “programmer”}
// Spreading out an array and pass it to a function
const sum = (…arr) => {
  const length = arr.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }
  return sum;
};
let arr = [3, 5, 3, 2, 1];
console.log(sum(…arr)); // 14
console.log(sum(3, 5, 4, 1)); // 13

-----------------------------------------------------
Conclusion
Do you fully understand all of the concepts above?
 If not, it’s time to examine all of them and be ready to take your skills 
to the next level.

Do I miss anything? Please leave the comment to let me know.