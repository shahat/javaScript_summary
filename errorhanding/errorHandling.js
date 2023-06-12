//=============================================
// ERRORS
/*
           - referance error
           - type error 
           -   
            */
//=============================================
("use strict"); // this is is the strick mode
name = "mohamed"; // this is referanse error bcz name is not defined

const firstName = "mohamed elshahat";
firstName = "mohamed ahmed"; // type error

console.log("name after", name);
const makeError = () => {
  try {
    const lastName = "ee";
    lastName = "memo";
  } catch (err) {
    console.error("this is the error message", err.stack);
  }
};
makeError();
