/* 
 TABLE OF CONTENT :

 
   1.0 =>  String API improvement
      -  string.trim() 
      -  String.row 

   2.0 => tagged templates

   3.0 => array api improvment  
      - using array.every();
      - using array.some();
      - using array.map()
      - using array.forEach()
      - using array.find("medo")

   4.0 => object.assign() || object destruction in the function with default values 
     
   5.0 => proxy : what is the proxy and the usage of the proxy 
 


*/

/* ###################################################### */

// 1.0 => String API improvement

//   كلمه اه بى اي معناها ان عندى اوبجيكت وعنده مجموعه بروبرتيز وميثودز

/*   1 : string.trim()        => both side trim white space 
     2 : string.trimRight()   => trim spaces in right trim white space 
     3 : string.trimLeft()    => trim spaces in left trim white space 
*/

/*
       1 : string.startsWith("")  => start with
       2 : string.endsWith("")    =>  endswith
       3 : string.includes("")    => include
       4 : string.repeat(3)       => repeat that 
*/

/*   String.row : 

   String.row ` hellow mohamed this will make scape for any scapping carachter like \n this will apper in `
*/

/* ###################################################### */

// 2.0 => tagged templates

/*
     لو عندك فانكشن وبتبعتلها استرنج وفى قلب الاسترنج دا قيم فالقيم هتستقبل فى مكان والسترنج هيتم استقباله فى مكان اخر 
   */
let x = 5,
  y = 10;
function fun(strings, ...values) {
  console.log("w");
  console.log(values); // [ 5, 10 ]
  return strings; // this return an array of 3
}
let result = fun`the first var is ${x} the second var is ${y}`;

console.log(result);

/* ###################################################### */

// 3.0  => array api improvment

/*
لو انتا عندك اراي وعايز تشوفها هل جميع العناصر فيها بتبدا  بحرف معين ولا لا  على اساس كدا بترجعلك يا صح يا غلط اكنك بتعمل اند 
 - using array.every(); => checking all elements in the array but using and &&
 - using array.some(); => this check the element in the array but using or ||
 - using array.map(); => this map the array into new array 

*/

// every()  == &&

var fruties = ["apples", "arr", "amm", "ambd"];
console.log(
  fruties.every((val, index, arr) => {
    return val[0] == "a"; // true
  })
);

//some()  == ||

var fruties = ["apples", "arr", "amm", "ambd"];
console.log(
  fruties.some((val, index, arr) => {
    return val[0] == "n"; // false
  })
);

// map() => creating new array

var newFruties = fruties.map((val) => {
  return `this is new : ${val}`;
}); // retrun new array with

// forEach()
var foreach = [];
var newFrutiesForEach = fruties.forEach((val) => {
  foreach.push(val);
});
console.log("forEach : ", foreach);

// find
var newFrutiesForEach = fruties.find((val) => {
  return val === "apple"; // "apple" if true and undefined if flase
});

// filter
/* retrun new arrayt */
var resultFilter = fruties.filter((val, index, arr) => {
  return val[0] === "a" || val[0] === "b";
});

console.log("this is the filter result ", resultFilter);

/* ###################################################### */

/* 4.0 => object assign() 

  note that : if the function resiving more than one parameter then you can using this way to
  element remember the order of the value that you are passing to the function 

*/

// function courseDetails(msg = "Greetings", option = {}) {
//   let courseDefaultInfo = {
//     courseName: "ES6",
//     courseDuration: "3 days",
//     supervisor: "Anonymous",
//   };

//   //this to make sure he assign the vlaue or we use the defalt values
//   // any property comming from option not be overwriting with the someone comming from the courseDefaultInfo

//   let settingObj = Object.assign({}, courseDefaultInfo, option);

//   console.log("the settingObj : ", settingObj);
//   console.log("the courseDefaultInfo : ", courseDefaultInfo);
//   console.log("the  option : ", option);

//   return `${msg} this id course is ${settingObj.courseName} its
//      duration is ${settingObj.courseDuration} and its supervisor is : ${settingObj.supervisor} `;
// }

// var course = {
//   courseName: "js",
//   courseDuration: "7days",
//   supervisor: "aly",
// };

// console.log(courseDetails("hellow", course));

// you can do like the upper using distructure the object in the function

function courseDetails({
  courseName = "ES6",
  courseDuration = "3 days",
  supervisor = "Anonymous",
} = {}) {
  return `this id course is ${courseName} its 
       duration is ${courseDuration} and its supervisor is : ${supervisor} `;
}
var course = {
  courseName: "js",
  courseDuration: "7days",
  supervisor: "aly",
};

console.log(courseDetails(course));

/* ###################################################### */

// 5.0 =>  proxy

/* note here 
 - if you change the proxy the target will change 
 - you cant modify the p  just the only way to mpodify it 
  by using handler 
 - u can use proxy in validation 
 - u can do more search about how to use proxy 
*/

handler = {
  set(obj, prop, val) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = val;
    } else {
      throw `prop ${prop} is not allowed `;
    }
  },
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    else throw "creating new prop is not allowed ";
  },
};

target = {
  name: "abc",
  age: 22,
};

var p = new Proxy(target, handler);

/////////////////////////////////////////////////////
