/*
  
  var 
     - is global scope 
     - any varible is declared using var is hosted 
         - hoisting meaning : any varible declaration is going to the top of the code 
  
   let declaration using let is not hoisted 
        * so u should define it first then u use it  
        * their scope the block in wich they are defined , as will as in any contained sub block
    
   const :
     - variable declared using const are constant variable , 
       you cant assign to anoter value to them ,
        except at the point where they are declared . 

     - a constant can be global or local to a function where it is declared . 

     - constants also share a feature with variables declared using let in that they are block-scoped
          instead of function-scoped (and thus they are not hoisted )

---------------------------------

 


NOTE :  global scope and local scope 

   var x = 20;
   function sum(a , b ){
    var z = 10;          // this is called variable shadowing 
    return a + b + z;    // this will return 40 

   }
   console.log(sum(10,20));   // 40
   console.log(z);  ;         // 20 

  
   var x = 20;
   function sum(a , b ){
    z = 10;               // this overwite the global scope
    return a + b + z;    // this will return 40 
   }
   console.log(sum(10,20)); 
   console.log(z);       // 10 

  */ 









        
