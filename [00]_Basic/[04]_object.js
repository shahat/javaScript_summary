/* ############################### Working With object ############################### */
/*  content  */
/*  
    1 - object creation 
    2 - object access
    3 - data descriptor
    4 - accessor discribtor
    5 - add or dele object pro
*/

/*  
 ==========================
   1.0 => object creation 
==========================   
*/

// => 1.1   new constractor
let person = new object({ name: "mohamed", age: 15 });

// => 1.2   Object Create
let user1 = Object.create(user2);

// => 1.3   leteral creation

let myObj = { name: "mohamed", age: 15 };

// => 1.4   Object.assign       => creat one object from different objects

let obj4 = Object.assign(obj1, obj2, obj3, {});

// => 1.5  factory method

function employee(name, id, dep) {
  return {
    empName: name,
    empId: id,
    empDep: dep,
    getName: function () {
      return this.empName;
    },
  };
}

// => 1.6  constructor function .. => E capital for standered naming for constructor
function Employee({ name, id, dep }) {
  this.empName = name;
  this.empId = id;
  this.empDep = dep;
}
let em1 = new Employee({ name: "mohamed", id: 5464, dep: "mech" });

// -----------------------------------------------------------

/*  
  ==========================
   2 => object access  
  ==========================   
*/

// 1.0 => dot notation

let newObj = { name: "mohamed", age: 20 };
console.log(newObj.name);

// 2.0 => bracket notation
console.log(newObj[name]);

// bracket notation subscribt notation  is usefull when you want to define property its value is saves to a defined variable

// 3.0 => static functions

Objects.keys(newObj); // access keys
Objects.vlaues(newObj); // access values

// 4.0 => for in          =>  access all keys and values using
for (var i in newObj) {
  console.log(i + ":" + newObj[i]);
}

/* 
// -----------------------------------------------------------
/*  
  ==========================
    3.0 => data descriptor   // anso called object meta data 
  ==========================   
*/
// defineProperty method

var name = "mohamed";
var obj = {};
Object.defineProperty(obj, "name", {
  value: "mohamed", // variable name ["mohamed"]
  writable: true, // this mean that you can modefy it [default is flase  ]
  enumrable: true, // i cant iterate into properties so when you want to hide it from iteration set this to false
  configurable: false, // if this is false you can not configer the writable and also you can not delete this property
});

/* so what is the defferant between that way and the normal way of defining the property  */

obj.age = 25; // this way your object propertiy  has the following

// writable: false;
// configrable: true;
// enumrable: true ;
// and you can delete it

// when you want to see all th data discriptors
Object.getOwnPropertyDescriptor(myObject, "age");

//- this is so much code if i write for each property

// => 2-Object.defineProperties => define more than propertie

Object.defineProperties(obj, {
  name: {
    value: name,
    writable: false,
    configrable: true,
    enumrable: true,
  },
  age: {
    value: name,
    writable: false,
    configrable: true,
    enumrable: true,
  },
});

// -----------------------------------------------------------

/*  
  ==========================
    4.0 =>  accessor discribtor 
  ==========================   
*/

var obj = {};

Object.defineProperty(obj, "name", {
  value: "mohamed",
  writable: false,
  configurable: false,
  enumerable: false,
});

var ageValue = 123;
Object.defineProperty(obj, "age", {
  get: function () {
    return ageValue;
  },
  set: function (val) {
    ageValue = val;
  },
  configurable: false,
  enumerable: false,
});

// note that set cant be used if i dont want to any  one to set department
// note that i cant use get if i dont want to any one to get dep proberty of the object

// -----------------------------------------------------------

/*  
  ==========================
    4.0 =>  add or dele object pro
  ==========================   
*/

// instant methods
//[adding || edit] object [prop || meth]    => obj_name.name = "mm";      => name ? overwrite : adding new prop
/*
             1 : example : obj.hasOwnProperty("empName");       => true  checking if this contain 
             2 : obj.toString(); // this return [object Object] => which is mean that is object of type [Object] => this is the parent of all objects         
  */
