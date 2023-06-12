// ===========================================
//Hoisting :
/*
       
       - using function 
       - expression function    

         */

// ===========================================

/* => this will be hoisted*/
function test() {}

/* => this will not be hoisted bcz its expression function */
console.log("the sum is : ", sum(10, 15)); // error

var sum = function (x, y) {
  return x + y;
};

// NOTE that arrow function cant be hoisted
// ===========================================

//vvaribale
// hosting  happed just for the declaration of the variable not for its value

var icon; // declaration hoisted
console.log(icon); // undefined
var icon = "icon"; // initialization

// ===========================================

/* 
NOTE that :  - if you have hoisting for variables and function 
 the hoisting happen to the punction first then to the variable second 

*/
