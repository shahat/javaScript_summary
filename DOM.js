  /* ############################### Working With this keyword ############################### */


  /*
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
  
// modifiy attributes 

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
  element.style.color                                    // this will add properety css
  element.style.setProperty("property" , "value")        // this will add property 
  element.style.cssText                                  // this replace the css with the comming css 
  element.style.removeProperty("property")               // this will remove property
  
// making elements using js 

step 1 : creating the element                         =>  let heading = document.createElement("h1");
step 2 : making content                               =>  let content = document.createTextNode("this is the heading");
                                                      heading.appendChild(content); // this to add the content to the h1 
step 3 : adding the h1 to place in html               =>
  
  

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


elment.after("content");
elemnt.before("content");
elemnt.append("content");
 
element.classList.add("className");       => adding class to element 
element.classList.remove("className");    => removing class from elemnt 
element.classList.toggle("name")          => on the first click will add a class and next click will remove a class  



  */