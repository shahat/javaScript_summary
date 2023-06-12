/* regular expressions */

/*

- Regular expressions used to match parts of strings. You create patterns to help you do that matching.
- way to do test is using test() method

*/
//----------------------------------------------------

// this
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); // return true
//----------------------------------------------------

//  Match a Literal String with Different Possibilities

/*
- for searching about more than one somthing [ alternation or OR operator: | ]
  /mm|ss|nn/
*/

//----------------------------------------------------

// Ignore Case While Matching

let fccRegex = /freeCodeCamp/i; // i mean ignor the uppercase

//----------------------------------------------------

// matching

"Hello, World!".match(/Hello/); // ["hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // ["expressions"]

//----------------------------------------------------

// find more than one matching

let testStrm = "Repeat, Repeat, Repeat";
let ourRegexm = /Repeat/g;
testStrm.match(ourRegexm); // this return ["Repeat", "Repeat", "Repeat"]

//----------------------------------------------------

// Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // this return hun sun run kun gun
let result = unRegex.test(exampleStr);

//----------------------------------------------------

// using charachter class

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result1 = quoteSample.match(vowelRegex); // Change this line all vowel

// raange of charachter
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

//In order, the three match calls would return the values ["cat"], ["bat"], and null.

//----------------------------------------------------

// matching letters and numbers

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex);

//ex:
let quoteSample1 = "3 blind mice.";
let myRegex2 = /[^3aeiou]/gi; // match all except the inside the box
let result2 = quoteSample1.match(myRegex2);

//----------------------------------------------------

//Match Characters that Occur One or More Times

//For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

let difficultSpelling = "Mississippi";
let myRegexa = /s+/g; // Change this line
let resulta = difficultSpelling.match(myRegexa); //["ss"]

//----------------------------------------------------

// Match Characters that Occur Zero or More Times

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); //goooooooo
gPhrase.match(goRegex); //g
oPhrase.match(goRegex); // null

//----------------------------------------------------
// Find Characters with Lazy Matching

// - /t[a-z]*i/ => titanic => // ["titani"]

// you can convert the above regix to lazy matching that is working on the shortest string that have the regex

// /t[a-z]*?i/ =. ["ti"]

//----------------------------------------------------

//Match Ending String Patterns

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
//----------------------------------------------------

//Match All Letters and Numbers

let longHand = /[A-Za-z0-9_]+/; // =>
let shortHand = /\w+/; //  => achive the same result like above
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // returns true
shortHand.test(numbers); // returns true
longHand.test(varNames); // returns true
shortHand.test(varNames); // returns true

//----------------------------------------------------

// Match Beginning String Patterns

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

//The first test call would return true, while the second would return false.

//----------------------------------------------------

// Match Ending String Patterns

let theEnding1 = "This is a never ending story";
let storyRegex1 = /story$/;
storyRegex1.test(theEnding1);
let noEnding1 = "Sometimes a story will have to end";
storyRegex1.test(noEnding1);

// The first test call would return true, while the second would return false.

//----------------------------------------------------

// Match Everything But Letters and Numbers

let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
numbers2.match(shortHand2);
sentence.match(shortHand2);

//The first match call would return the value ["%"] and the second would return ["!"].

//----------------------------------------------------

//Match All Numbers

//The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result5 = movieName.match(numRegex).length; // 4

//----------------------------------------------------

// Match All Non-Numbers

//The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result4 = movieName1.match(noNumRegex).length;

//----------------------------------------------------

// Restrict Possible Usernames

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

/*  important when the user data in the backend  

1 - Usernames can only use alpha-numeric characters.

2- The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3- Username letters can be lowercase and uppercase.

4- Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Change this line
let result6 = userCheck.test(username);
console.log(result6);
/*
^[a-z][a-z]+ : first two characters should be at least two alphabet letters and optional number(s) at the end
| : or
^[a-z]\d\d+$ : first letter is an alphabet followed by at least 2 numeric characters whereby the last character is a digit
*/
