// Inheritance using Classes
class Person {
  talk() {
    return "Talking";
  }
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking

// To update the function for both instances you only have to do it once:
Person.prototype.talk = function () {
  return "New and improved Talking";
};

// -----------------------------------------
// Inheritance using a Constructor Function
function Person() {}
Person.prototype.talk = function () {
  return "Talking";
};

const me1 = new Person();
const you1 = new Person();
me.talk(); // Talking
you.talk(); // Talking

// -----------------------------------------
// Inheritance using pure objects with Object.create
const person1 = {
  talk() {
    return "Talking";
  },
};
const me2 = Object.create(person1);
me2.talk(); // Talking

// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person = {};
person.__proto__.talk = function () {
  return "Talking";
};
const me3 = {};
Object.setPrototypeOf(me, person);
me3.talk(); // Talking

// -----------------------------------------
// Extending a Class using 'extends'
class Person {
  talk() {
    return "talking";
  }
}

class SuperHuman extends Person {
  fly() {
    return "flying";
  }
}
const me4 = new Person();
console.log(me4.talk); // talk exists
console.log(me4.fly); // fly does NOT exists

const you2 = new SuperHuman();
console.log(you2.fly); // fly exists
console.log(you2.talk); // talk also exists!
