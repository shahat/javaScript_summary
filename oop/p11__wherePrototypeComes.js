/*

Understand Where an Object’s Prototype Comes From


*/

/*
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:
*/

function Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");

/*
  duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:
  */

Bird.prototype.isPrototypeOf(duck);

let student = {
  name: "mohamed",
};

console.log("the prop of student", student.prototype.isPrototypeOf(name));
