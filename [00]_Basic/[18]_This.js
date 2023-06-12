/* ############################### Working With this keyword ############################### */
/*
              - this value is dependening on its position 
                 * if u use it inside the method of the object         =>  it will refare to the owner of this object

                 * in the global scope                                 =>  it refare to the window object 
                 
                 * in public function                                  => it refare to window
                  
                 * in function in strict mode                          => this refer to undefine 
                  
                 * in event this refer to                              => the element that have the element 
                
                 =>
                      “use strict”; function func(){ return this; }             // return undefined 
                 => 
                      <button onclick=”this.style.color=‘red’> Submit </button> // one i click the button the color change to red 
  
  
  
*/

//************************************************************

// this inside the callback function
//  -  using function declaration
//  - using arrow function

const person = {
  name: "mohamed",

  talk() {
    var self = this;
    setTimeout(function () {
      console.log("self : " + self.name);
    }, 1000);
  },
  medo: function () {
    let m = this;
    console.log(m);

    // if u define the function here using arrow function this will refere to the global object in this case is the window
  },
};
person.talk(); // retrun the [ Object object ]
person.medo(); // retrun the [ Object object ]

//************************************************************

// - global funciton & arrow

const thisInGlobal = function () {
  console.log(" this in the global scope : " + this);
};
const thisInGlobal2 = () =>
  console.log(" this in the global scope withe arrow function  : " + this);
thisInGlobal(); // retrun the [ object window ]
thisInGlobal2(); // retrun the [ object window ]

//************************************************************

// - global funciton
// const thisInGlobal3 = person.medo();
// console.log("this is medo from out side function " + thisInGlobal3); // undefined لانه مش قادر يقرا this

//************************************************************
// global funciton to access this global scope

("use strict");
const medo = person.medo.bind(person);
console.log("this medo from global");
medo(); // the output depend on how me defined the the method inside the opject
/*
               - if me define the method using fuction () it will retrun the person object 
               - if me define it arrow function it will return the window object 
              
*/
