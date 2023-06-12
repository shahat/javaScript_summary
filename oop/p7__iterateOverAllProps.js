/*
=> Iterate Over All Properties

You have now seen two kinds of properties: own properties and prototype properties. 

- Own properties : are defined directly on the object instance itself. 

- prototype properties : are defined on the prototype.

*/

function Bird(name) {
  this.name = name; //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
