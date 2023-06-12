function Animal() {}
Animal.prototype.eat = function () {
  return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
  return "peck peck peck";
};

/* 
If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.


*/
