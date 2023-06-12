/*
There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:
*/
function Bird(name) {
  this.name = name; //own property
}
function Dog(name) {
  this.name = name; //own property
}
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor === Bird); // true
console.log(beagle.constructor === Dog); // true

/*
=> Note that the constructor property is a reference to the constructor function that created the instance .

=> The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.
*/

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
console.log(joinBirdFraternity(duck));

/*
=> Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

*/
