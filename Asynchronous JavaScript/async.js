/*

==================
=> sychronous js
==================

 - js can run one statment at a time 
    console.log("") 
    console.log("")
 -  sigle threaded  : one statement executed at a time 
   statment 1 
   statment 2 
   statment 3  => this task will take some time like fetching data from the server this is calling blocking the code because it block the next line of code from running 
   statment 4 


==================
=> async \\ non blocking 
==================
=> coverns how we perform tasks wich take some time to complete
=> code that start now and finish it later 

اللى بيحصل هنا ان ان الجافا اسكربت برضو بتنفز استاتمنت فى المره الواحده بس الفكره لما تيجى الاسنك فانكشن بياخد الريكويست منها ويهندله برا عن السنجل ثريد بتاع الجافا اسكريبت وبردوا بياخد ال كول باك فانكشن اللى هتتنفذ اول ما الريسبونس يجي

والشرح اللى فوق دا بيخلى الجافا اسكريب لغه 
non blocking 

example : 

*/

console.log("1");
console.log("2");
setTimeout(() => {
  console.log("this time out should block the code but in fact it is not ");
}, 2000);
console.log("3");
console.log("4");
