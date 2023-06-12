// this summary from free code camp

/* the differance between mutable and imutable data types is js */

/*
-----------------
primative data types : stored as a dependant value in the memory 
-----------------
 - boolean 
 - string
 - number 
 - symbol
 - null
 - undefined 
-----------------
referance data types : stored as a referace value in the memory , consist of multiple properties
-----------------
 - array 
 - function 
 - object 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// mutable and immutable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 - mutable meaning     => somthing that can be changed or a new property be added to . 
 - immutable meaning   => somthing that cannot be changed or added to . => primative type . let 

*/
console.log(
  "this is the start dealing with premative and referance data type "
);

let name = "mohamed"; // this save in space in the memory
let name2 = name; // this is saved in another space in the memory

/* note That 
    when you change name2 to another value that is  meaning that name will not change */
name2 = "ahmed";
console.log(`name : ${name} and name2 : ${name2}`); // name mohamed and name2 ahmed
// bcz name didnt change that means it is immutable

let person = {
  //
  name: "mohamed",
  age: 25,
};
let person2 = person; // here js will save the person 2 in memory as a referance value to person object
person2.age = 30;
console.log(`person age : ${person.age} and  person2 age : ${person2.age}`); //  30 30 which is mean they are mutable

// note that best practice to deal with mutable with const

const array1 = [0, 1, 2];
array1 = [2, 1, 0]; // this cause an error
array1[0] = 2;
array1[1] = 1;
array1[2] = 0;
console.log("array1"); // [2,1,0]    => his mean the const cant protect your object mutation
/*

-----------------
prevent opject mutation : JavaScript provides a function Object.freeze to prevent data mutation.
-----------------
Object.freeze(obj);  // this will be freezing your object 




-----------------
 Use Destructuring Assignment to Extract Values from Objects
-----------------
Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;  // here we are creating two new variable while destructing the  the  object 
const { name: userName, age: userAge } = user; // the same like above but we change the name of the variable 

const { johnDoe: { age: userAge, email: userEmail }} = user;// now we distructig the object into a nisted array ;

-----------------------
  good
-----------------------
*/

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {today: { low: lowToday, high: highToday },} = LOCAL_FORECAST;

// distructing object into the function parameters
const profileUpdate = ({ name, age, nationality, location }) => {};

// ******************************************************************************/

// object function creation short hand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender,
  };
  // Only change code above this line
};
// the new achive the same result like the above one
let createPerson1 = (name, age, gender) => ({ name, age, gender });

// *******************************************************************************/

//using getter and setter to controll access to an object

/*
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
*/
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author; //_author  is a private variable
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer); //anonymous
novel.writer = "newAuthor"; // this is setter
console.log(novel.writer); // newAuthor  and this is the getter

/*
Notice the syntax used to invoke the getter and setter. 
They do not even look like functions. Getters and setters are important because they hide internal implementation details.

Note: It is convention to precede the name of a private variable with an underscore (_). 
However, the practice itself does not make a variable private.
*/

// *******************************************************************************/

// using modul script

/* step 1 : you should add the following in the html file  */
<script type="module" src="filename.js"></script>;
/* step 2 : export from math_functions.js file */
export { add, subtract, multiply }; //
/* step 3 : import  */
import { add, subtract, multiply } from "./math_functions.js";

import * as myMathModule from "./math_functions.js"; //=> this allow you to export all things as an object and you can use it as following
myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

//Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
export default function () {}
export default function add(){} ;  // only one function can be exported in the export default
 
import add from "./math_functions.js"; // this is how we can import a default export


// *******************************************************************************/



//*******************************************************************************/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destruction array                                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let [a, b] = [1, 2]; // a = 1 , b = 2 ;
let [c, d, ...arr] = [1, 2, 3, 4, 5, 7]; // c = 1 , d = 2 , arr = [3,4,5,7]
