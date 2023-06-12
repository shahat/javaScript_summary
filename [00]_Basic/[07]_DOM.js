/* ############################### Working With this keyword ############################### */

/*
use console.dir(document) to view dom nodes properties 

------------------------------

node relationships 

  head > to html > first child 
  html > head > parent node 
  body to  

  access document.body.childreen[0] >>
  access document.body.childreen[0].nextElementSibling.nextElementSibling  

  this way is not goood 



  ==========================
    - DOM >> basics 
  ==========================
  
  // access
  1-  getting the element with id                    =>     document.getElementById()                  => this access only one element                   
  2-  getting element using className                =>     document.getElementsByClassName()          => this access array        
  3-  getting elements using tageName                =>     document.getElementsByTagName()            => this access array         
  4-  getting element using its selector             =>     document.querySelector()                   => this access the first elemnt 
  5-  getting the collection ofitems                 =>     document.querySelectorAll()                => this access array 
  6-  getting the body element                       =>     document.body                              => this access body 
  7-  getting title                                  =>     document.title                             => this access title 
  8-  getting all images in the site                 =>     document.images                            => this access img 
  9-  getting all links                              =>     document.links                             => this access a liks 
  10- getting all forms forms                        =>     document.forms                             => this access froms 
  



// modifiy attributes   => checking for the attribute of the element 

  element.alt = " this is cate image "                  => this adding alt attribute to the image 
  elment.hasAttributes()                                // attribute ? true : flase 
  element.hasAttribute("att-name")                      // att-name ?  true : flase 
  element.attributes                                    // get all attributes 
  element.attributes[1]                                 // get att in index
  element.setAttribute("alt" , "ahmed")                 // alt = "ahmed"
  element.removeAttribute("att-name")                   // delete att-name




// access element using another element 
  element.previousElementSibling                         // element before me 
  element.nextElementSibling                             // element after me      
  element.parentElement                                  // my parent   
  element.nextSibling                                    // next content not elment 
  element.previousSibling                                // commingsiplings


  element.innerHTML                                      // deal eith iner html         
  element.outerHTML                                      // deal eith outer html

  /* */
  /*
  element.style.color                                    // this will add properety css
  element.style.setProperty("property" , "value")        // this will add property 
  element.style.cssText                                  // this replace the css with the comming css 
  element.style.removeProperty("property")               // this will remove property
  

// making elements using js 

step 1 : creating the element                         =>  let heading = document.createElement("h1");
step 2 : making content                               =>  let content = document.createTextNode("this is the heading");                         
step 3 : adding the h1 to place in html               =>  heading.appendChild(content); // this to add the content to the h1





elment.after("content");
elemnt.before("content");
elemnt.append("content");

 // adding class to the html 
   

element.classList.add("className");       => adding class to element 
element.classList.remove("className");    => removing class from elemnt 
element.classList.toggle("name")          => on the first click will add a class and next click will remove a class  
gitComputabelstyle(element).color         => this will give you the man  





// types of nodes in html Dom 
  1 html > root node 
  2 elements node 
  3 commment node 
  4 attribute node 
  5 text node 
  6 document node   

  in fact these are the most famous ones but in fact they 12 node type 
  
  
  // adding conten
   1 - parent_div.appendChild(element_name)   => this will put the element name inside the parent_div 
   2 - document.body.insertBefore(inserted_element , element ) ==> element here mean the element that you want to insert the content before it 
   note that it works with document 
   3 - this 



==========================
    - DOM >> Events  
==========================
// types of events  

         * events happen you you end from loading html page 
          * change the input value 
          * change the do onevent
      
// wrting an event 

          * <button onclick=”console.log(‘hello world’)“>click</button>   // this method if u use with diferent function the last one will work 

          * let element = document.getElementById(‘element ‘);
            element.onclick=function(){console.log(‘hello’)};
            
          * let element = document.getElementById(‘element ‘);            // this method if u use with diferent function the all functions will work 
            element.addEventListener( “click” ,function(){console.log(‘hello’)});

// Mouse events

      click	             =>     onclick          =>    when u click on element       
      mouseover	         =>     onmouseover  	   =>    mouseover
      mouseout	         =>     onmouseout	     =>    mouseout
      mousedown	         =>     onmousedown      =>    mousedown
      mouseup            =>     onmouseup        =>    mouseup
      mousemove	         =>     onmousemove	     =>    mousemove
*/
// example on on mousemove 

function myFunction(e) {  // you should pass the event to the function 
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")"; // this if you want to 





/*
// keyboard even  

     Keydown	           =>     onkeydown        =>	   when u press the button 
     Keyup	             =>     onkeyup	         =>    when u free the button

// from event  
  
     focus	             =>     onfocus	         =>     when user focus on element
     submit	             =>     onsubmit         =>     submit the form 
     blur	               =>     onblur	         =>     focus is away from form
     change	             =>     onchange	       =>     change value in form 

// window and document events 

     load       	       =>      onload	         =>     when the browser end from loading the page 
     unload	             =>      onunload        =>     when the user left the the current page the browser will end its loading 
     resize	             =>      onresize	       =>     when the user change the voluem of the browser s     ize 




  */



/*

   - functionality   create , read , update , delete .
   - input form  => submit => fn() => 
   
   createElement(e){
    e.preventDefualt();
    let name = document.getElementById("userName")
    let email = document.getElementById("pass");
    let pass = document.getElementById("email");
    console.log(name , email , pass );

   }; 
     