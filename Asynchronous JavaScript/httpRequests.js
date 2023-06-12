/* 
HTTP Reuests 
- make HTTP requests to get data from another server 
- we make these requests to api  endpoints 

*/

// const getToDoes = () => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     // console.log(request, request.readyState); => this will be printed 4 times because the all stages of the reqest

//     // the readyState  for know for the response

//     if (request.readyState == 4 && request.status == 200) {
//       // The operation is complete and the data is resevies and it allowed to do some operation on it
//       // the following will only fired when the status code is equal to 200
//       console.log(request.responseText);
//     } else if (request.readyState == 4) {
//       console.log(" couldn't fetch the data ");
//     }
//   });
//   request.open("GET", "https://jsonplaceholder.typicode.com/toddos");

//   // this the setting the request not sending any thing
//   // GET  => is the type of the request
//   // url  => we tell the browser where to get the data
//   request.send(); // this sending the request
// };

// getToDoes(); // doing the fetching the data inside function make it more reusable

//  =============================================
// => status codes : search about defferant types of the http statys codes
//  =============================================

//  =============================================
// 3 => using call back to make the code more reusable  :
//  =============================================

// const getToDoes1 = (callBack) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4 && request.status == 200) {
//       //  console.log(request.responseText);
//       callBack(undefined, request.responseText);
//     } else if (request.readyState == 4) {
//       // console.log(" couldn't fetch the data ");
//       callBack(" couldn't fetch the data ", undefined);
//     }
//   });
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   request.send();
// };

// getToDoes1((error, data) => {
//   console.log("call back is fired from getToDoes1  ");
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

//  =============================================
// 4 => using the Data of the json in js
//  =============================================

// const getToDoes1 = (callBack) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4 && request.status == 200) {
//       const data = JSON.parse(request.responseText); // => now we are working with data
//       //  console.log(request.responseText);
//       callBack(undefined, data);
//     } else if (request.readyState == 4) {
//       // console.log(" couldn't fetch the data ");
//       callBack(" couldn't fetch the data ", undefined);
//     }
//   });
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   request.send();
// };

// getToDoes1((error, data) => {
//   console.log("call back is fired from getToDoes1  ");
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("this is the data", data);
//   }
// });

//  =============================================
// 5 => call back hell
//  =============================================

/*
  when we call function inside another one and waiting for the first one to finish untell we run the second one this is calling call back hell 
  and here we use someting called promise 
  
  => here olso we getting the data from maltuple resources 
*/

// const getToDoes1 = (resource, callBack) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4 && request.status == 200) {
//       const data = JSON.parse(request.responseText); // => now we are working with data
//       //  console.log(request.responseText);
//       callBack(undefined, data);
//     } else if (request.readyState == 4) {
//       // console.log(" couldn't fetch the data ");
//       callBack(" couldn't fetch the data ", undefined);
//     }
//   });
//   request.open("GET", resource);
//   request.send();
// };

// // this is not  a good practice the better to use promise in this case
// getToDoes1("./resourses/cars.json", (error, data) => {
//   console.log("call back is fired from car resourse", data);
//   getToDoes1("./resourses/motors.json", (error, data) => {
//     console.log("call back is fired from motor resourse", data);
//   });
// });

//  =============================================
// 6 => promise
//  =============================================

/*
  => here olso we getting the data from maltuple resources  but using promises
*/

/*simple example promise example */
// =============
/*
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    resolve("some data");
    // reject ("someerror");
  });
};
getSomething()
  .then(
    (data) => {
      console.log("this is the data from promise", data);
    }
    // we replace this using then ,
    // (error) => {
    //   console.log("this is the data from promise", error);
    // }
  )
  .catch((error) => {
    console.log("this is the data from promise", error);
  });
*/
// ============= lets apply the top example on the following
// ("use strict");
// const getToDoes1 = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve("this is the data");
//       } else if (request.readyState == 4) {
//         reject("this is the error massage");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };
// // this is not  a good practice the better to use promise in this case
// getToDoes1("./resourses/cars.json")
//   .then((data) => {
//     console.log("the promise is resolved", data);
//   })
//   .catch((error) => {
//     console.log("the promise is rejected ", error);
//   });

//  =============================================
// 7 => chaning  promise
//  =============================================

("use strict");
const getToDoes1 = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        reject("this is the error massage");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
// this is not  a good practice the better to use promise in this case
getToDoes1("./resourses/cars.json")
  .then((data) => {
    console.log("the promise is resolved", data);
    return getToDoes1("./resourses/motors.json");
  }) // because the above part return a promise you can writh .then after it
  .then((data) => {
    console.log("the promise 2 is resolved ", data);
  })
  .catch((error) => {
    console.log("the promise is rejected ", error);
  });
