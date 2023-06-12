/* ############################### Working With function ############################### */
/*   
  ==========================                
    Basics
  ==========================   
          
                  function move( price , taxes, ads){} // this is the 
                  
                  return // its not return anything  comming after it 
                  return a , v ; => it will retun [v]value 
                  function can be assigned to the variable
                  * function mm(){ } // this is the fuction declaration 
                  * let m = function (){ } // this is function exprestion 
                  

                  
                   * note that every function is hoisted in its scope 
                   * any parameter you didnt assign a value in it .. it will retern a value 
                   * function mm(num1, num2) // num1 & num2 is called paramter 
                   * mm(10,20) // 10 , 20 is called argument
                   * function(...num){} these function can reseive any number of paramenters
                   * arrow function  
                   
  ==========================                
  
  ==========================
          /*  there is two type of function return type and non return type 
             return type doesnt retern back any value 
          */
function sum(a, b) {
  let sum = a + b;
  return sum;
} // this is retern type function

console.log("the sum is sum : " + sum(10, 20));
// function expression :

/* js allows us to assign a function to a varible 
  and then use that varible as a function like the following 
  */
const maltiply = (a, b) => {
  a * b;
}; // [ arrow function ]  you delete bracks if u have just one line

// [ recursive function ]

// recurcive fucion can do what for loop do in simple and clean way
// recursive not faster than for loop but its simple and clean

function factorial(n) {
  if (n < 1) return 1; // this condtion for stop calling itself
  return n * factorial(n - 1);
}
console.log(factorial(2));

// count down recurisve

function countDown(fromNumber) {
  return fromNumber < 1 ? 0 : fromNumber + countDown(fromNumber - 1);
} // i used 0 because it is not affect on addition
console.log(countDown(3));
/* ************************************************ */

// function statment   => hoisted
/*
 function fun1(a,b){
  return a + b ;
 }
 
 
 */

// anonymous function  [ 1 + 2 ]  => not hoisted

/*
 1 - function expersion        // let myFun = function (){}
 2 - literal function creation  function (){}
 example 
var myfun = function (){
  console.log("  anonymous function cant be housted ")
}
*/
// assign function into array element
/*
var arr = [ 1, 2, 5,function (){
  console.log("  anonymous function cant be housted ")
}, "mmm", "nnn" ]; 

-----------------------------------

iife : immediately invoked function expression  

(function (){

  /////
}) () // it is a function that is called here self just run one time 
-----------------------------------
function object properties  : arguments 
example : 
var fun = function (){
  
  var sum = 0 ;
  for ( let i = 0 ; i<=arguments.length() ;i++){
    
  }
}






*/
