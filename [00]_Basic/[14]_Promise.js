// Create a JavaScript Promise

/* 
 you use it to make a promise to do something, usually asynchronously.
 - A promise has three states:
   1-  pending
   2-  fulfilled
   3-  rejected
 - Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous)often a server request.
 
 
 - When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
 - This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:
 - catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:
*/

// simple example =>

const myPromise = new Promise((resolve, reject) => {
  // this how to create a promise
  let a = 1,
    b = 2;
  if (a + b === 3) {
    resolve("sucess");
  } else {
    reject("faile");
  }
});

myPromise
  .then((message) => {
    console.log("this will run when the promice sucess" + message); // this is the sucess fail message
  })
  .catch((message) => {
    console.log("this will run when the promice fail" + message); // this is the reject fail message
  });

//------------------------

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
