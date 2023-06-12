/*
all rights for freecodecamp 

oop table of content : 
  
   1.0 : object 
   2.0 : constractor function 
   3.0 : prototye 
   4.0 : Inheritance
//------------------------------------------------
1.0 =>  object : has a properity and method 





//------------------------------------------------

2.0 => constractor function

Constructors are functions that create new objects. They define properties and behaviors that will
 belong to the new object. Think of them as a blueprint for the creation of new objects.


2.1 => Constructors follow a few conventions:

 - Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
 //الحرف  الاول كابتل دا بيفرقلك الكونستراكتور عن الفنكشن التانيه
    
 - Constructors use the keyword this to set properties of the object they will create.
               Inside the constructor, this refers to the new object it will create.
 // this بتشير الى الاوبجيكت اللى هيتعمله كرياشن
                   
 - Constructors define properties and behaviors instead of returning a value as other functions might.
// بيعرف ميسودز و بروبيرتيز مبيرجعش قيم زى الفانكشنز التانيه


Notice : -  that the new operator is used when calling a constructor.
         -  This tells JavaScript to create a new instance of Bird called blueBird.
         -  Without the new operator, this inside the constructor would not point to the newly created object,
         -  Now blueBird has all the properties defined inside the Bird constructor:
*/
// constactor example
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
let blueBird = new Bird();

/*
2.2 => Extend Constructors to Receive Arguments
        Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary.
        It would take a lot of time to create all the birds,
        then change the properties to different values for every one. 
        
        To more easily create different Bird objects, you can design your Bird constructor to accept parameters:
*/

// example of the constractor that accep parameter
function Bird(name, color) {
  this.name = name;
  this.color = "color";
  this.numLegs = 2;
}
let blueBird1 = new Bird("Albert", "blue");

/*
 2.3 => Verify an Object's Constructor with instanceof

   Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.
   JavaScript gives a convenient way to verify this with the instanceof operator.
   [ instanceof ] allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 
     لو انتا عايز تشوف هل الاوبجيكت معمول بالjs باشتخدام كونساراكتور معيين 

   Here's an example: 
 */
let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");
crow instanceof Bird;

/* 
2.4 => Understand Own Properties


*/
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let ownProps = [];

// the following code will five you the full properties in

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // The console would display the value ["name", "numLegs"].

/*
 2.5 => Understand the Constructor Property

   - Note that the constructor property is a reference to the constructor function that created the instance. 

   - The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is

imp - Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
*/

console.log(duck.constructor === Bird); // true
console.log(beagle.constructor === Dog); // true

//------------------------------------------------

/*

 3.0 => Prototype

Use Prototype Properties to Reduce Duplicate Code

   - Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.
   - This may not be an issue when there are only two instances, 
      but imagine if there are millions of instances. That would be a lot of duplicated variables.

   - A better way is to use the prototype of Bird.
       Properties in the prototype are shared among ALL ins tances of Bird. Here's how to add numLegs to the Bird prototype:
   
   - Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype.
*/
Bird.prototype.numLegs = 2; // Now all instances of Bird have the numLegs property = 2 .

/*
3.1 => Iterate Over All Properties
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

*/
// in the example we obtain all properties   [ own and prototype ]
function Bird(name) {
  this.name = name; //own property
}
Bird.prototype.numLegs = 2; // prototype property

let duck1 = new Bird("Donald");
let ownProps1 = [];
let prototypeProps = [];

for (let property in duck1) {
  if (duck1.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); //  [name]
console.log(prototypeProps); // [numLegs]

/*

3.2 => change the prototype to new object
   the best thing for working with prototype  

  -  A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:


*/
Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
/* 
3.3 => Remember to Set the Constructor Property when Changing the Prototype

There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property . 
*/
duck.constructor === Bird; // false
duck.constructor === Object; // true
duck instanceof Bird; // true

// to fix use the following
Bird.prototype = {
  constructor: Bird, // we again add constructure to the prototype
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//  3.5 => Understand Where an Object’s Prototype Comes From

/*  Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:
 */

function Bird(name) {
  this.name = name;
}

let duck2 = new Bird("Donald");
/*
duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:
*/
Bird.prototype.isPrototypeOf(duck2);
/*This would return true.*/

// 3.6 Understand the Prototype Chain

/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

note taht : Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

*/

//------------------------------------------------
/*
4.0 => Use Inheritance So You Don't Repeat Yourself




There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:
*/

Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

/*  ********  */

/*
The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:
*/

function Animal() {}
//  انتا هنا جمعت الميسود مش زى الكود اللى فوق الميسود متكرره انتا هنا لو اخدت اوبجيكتس كتيره الكود معاك مش هيبقا فيه تكرار
Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

/*
Since Animal includes the describe method, you can remove it from Bird and Dog:
*/

// طالما انا واخد البيرد وال دوج من الانيمال لو انا عاملهم بروتوتايب يبقا احط ال كونستراكتور بتاعهم هما لان بتاع الانيمال مبقاش موجود لان الكونوستراكتر دا اللى بيقولك ان الاوبجيكت دا من انهى نوع هل هوا انيمال ولا هيومان ولا جنس امه ايه

Bird.prototype = {
  constructor: Bird,
};

Dog.prototype = {
  constructor: Dog,
};

/******************************************************************** */
/*
Inherit Behaviors from a Supertype
 */
