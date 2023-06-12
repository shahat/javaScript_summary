function Bird(name) {
  this.name = name; //own property
}
const duck = new Bird();
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
/*

In order, these expressions would evaluate to false, true, and true.



=> To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:
*/
Bird.prototype = {
  constructor: Bird, //this solve the problem
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
