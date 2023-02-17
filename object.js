
  /* ############################### Working With object ############################### */


  /*  
  ==========================
    - object >> basics 
  ==========================   

object creation                        
                  => let objectName = new Object();                          => called constractor
                     let person = new object({ name: "mohamed", age: 15})    => example

                  => let user1 = Object.create(user2)                        => here i create object from another \object

                  => let myObj = { name: "mohamed", age: 15}                 => called leteral creation the better and easy way to create object 

                  => let obj4 = Object.assign(obj1,obj2,obj3,{})             => this make me creat one object from different objects

                  => function employee( name, id, dep ){                     // this is called the factory method for creating object 
                    return {
                      empName:name,
                      empId:id,
                      empDep:dep,
                      getName:function(){
                        return this.empName;
                      }
                    }
                  }
                  => function Employee( name, id, dep ){   // called constructor creation .. E capital for standered naming for constructor 
                      this.empName = name;
                      this.empId  = id;
                      this.empDep = dep;
                };   
                let em1 = new Employee("mohamed",5464, mech);
                                                     

-----------------------------------
// access object [prop || meth]   

       => obj_name.attribute_name                                 => is called dot notation
       => obj_name["attribute_name" || "method_name"]               => 

       bracket notation subscribt notation  is usefull when you want to define property its value is saves to a defined variable 


       [adding || edit] object [prop || meth]    => obj_name.name = "mm";                                   => name ? overwrite : adding new prop 

-----------------------------------
// instant methods 

             1 : example : obj.hasOwnProperty("empName"); // true  checking if this contain 
             2 : obj.roString(); // this return [object Object] => which is mean that is object of type [Object] => this is the parent of all objects  

// static functions [or class methods] :
     
    Objects.keys(objName)   // access keys 
    Objects.vlaues(objName) // access values
-----------------------------------
// using  [ for in ]  with object 
   
 for( var i in objName){    // this will print the key and also the value pairs 
   console.log(i+":"+me[i]);
 }
-----------------------------------     
// Deleting object [prop || meth]            => delete person.age                                       => 
      this will delete prop age 
          
 -----------------------------------     
 // the following is called 
 
 => data descriptor 
 
 
// defineProperty method 



1 - example 

var name ="mohamed";
var obj ={};
Object.defineProperty(obj,"name",{   
    value:name,                  // variable name ["mohamed"]
    writable: false,             // this mean that you can modefy it [default ]
    configurable: false         // cant be deleted [default] 
    enumrable: false            // i cant iterate into properties
})

- this is so much code if i write for each property 
 
2- //  Object.defineProperties => define more than propertie  

Object.defineProperties(obj,{
  name:{
    value:name,
    writable:false,
    configrable:true,
    enumrable:true
  }, 
  age:{
    value:name,
    writable:false,
    configrable:true,
    enumrable:true
  } 
})
-----------------------------------
accessor discribtor : 
 
Object.defineProperties(obj,{
  name:{
    value:name,
    writable:false,
    configrable:true,
    enumrable:true
  }, 
  age:{
    value:name,
    writable:false,
    configrable:true,
    enumrable:true
  } ,
  dep: {
    get: function() {return dept;},
    set: function(val){dep=val;}
    configurable:false,
    enumerable:false
  }

})

// note that set cant be used if i dont want to any any one to set department
// note that i cant use get if i dont want to any one to get dep proberty of the object  


   
 
 -----------------------------------
     object destruction                            => example   
     const { firstName, lastName, address: { streatNum } } = person ; 
      console.log(`this first name from object destruction is ` + firstName + Object.keys(person))   



          
  */
