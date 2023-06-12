// In JavaScript, there are no keywords or built-in access modifiers like "private," "public," or "protected." By default, all members are public. However, you can achieve similar behavior using various techniques and coding conventions. Here are examples of different member visibility in JavaScript:

// ##############################################

// Public Access:
// By default, all members in JavaScript are public and accessible from any part of the program.
// Example:

class Rectangle {
  constructor(width, height) {
    this.width = width; // public property
    this.height = height; // public property
  }

  calculateArea() {
    // public method
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.width); // Output: 5 (public property)
console.log(rect.calculateArea()); // Output: 50 (public method)

// ##############################################

// Private Access (Using Closures):
// JavaScript doesn't have native private access, but you can simulate it using closures.
// Example:

// javascript
// Copy code
function Counter() {
  let count = 0; // private variable

  function increment() {
    // private method
    count++;
    console.log(count);
  }

  return {
    increment: increment, // exposing the private method
  };
}

const counter = Counter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
console.log(counter.count); // Output: undefined (private variable)

// ##############################################

// Protected Access (Using Naming Conventions):
// JavaScript doesn't have a built-in protected access modifier, but you can use naming conventions to indicate that a member should be treated as "protected."
// Example:

// javascript
// Copy code

class Animal {
  constructor() {
    this._legs = 4; // protected property
  }

  _makeSound() {
    // protected method
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }

  makeSound() {
    this._makeSound(); // accessing the protected method
  }
}

const dog = new Dog();
console.log(dog._legs); // Output: 4 (conventionally protected property)
dog.makeSound(); // Output: "Animal sound" (conventionally protected method)

// Remember that these examples rely on naming conventions and developer discipline to respect the intended access levels. JavaScript does not enforce access restrictions in the same way as languages with native access modifiers.
