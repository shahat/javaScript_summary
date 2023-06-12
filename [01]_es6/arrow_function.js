// arrow function and lexical binding

var obj0 = {
  usname: "ali",
  display: function () {
    setTimeout(function () {
      console.log(this.usname); // undefined
    }, 2000);
  },
};

// in the upper example the nearest this is the window opject that calls the settimeout

// Solution 1 :   to solve the problem we will use the following make new var and give it this value

var obj1 = {
  usname: "ali",
  display: function () {
    var _that = this;
    setTimeout(function () {
      console.log(_that.usname); // undefined
    }, 2000);
  },
};

// Solution 2 :  using arrow function make this take the this value from its scope
// الارو فانكشن معندهاش زيس علشان كدا بتعمل bind لل this اللى موجوده فى بايند للزيس اللى بتتكتب جواها على الليكسيكال انفايرونمينت مكان ما حصلها كريت مكان ما البادى امبلمينتاشين اتكتب
var obj2 = {
  usname: "ali",
  display: function () {
    setTimeout(() => {
      console.log(this.usname); // undefined
    }, 2000);
  },
};
console.log("this is me mohamed elshahat");
obj2.display();
