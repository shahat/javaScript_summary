/*
BOM = >    
     js can not work with it self it should work with hosting inveronment 
     hosting invironment in the fron end end is  the browser 
     this browser has an object 
bom =>  construct from 6 object 
     
   - window object is the parent of all objects
      - history 
      - location 
      - navigator 
      - screen 
      - document  : this is the start of the dom 
   
---------------------------------

1.0 =>  window object 
  
  - the method in the window object is : 
          
          -  window.open()  =>   window.open("https://www.w3schools.com")
          -  window.close()  =>
          -  window.focus() 
      
      
 */
// example about window.o
function openWin() {
  myWindow = window.open("http://www.google.com", "myWindow", "width=200, height=100");
}
openWin();
function closeWin() {
  myWindow.close();
}

/*
  - window timer 
          
          - setInterval(fun(),0) : 

                 * like make alert every 10 second
                 *  0 duration is the time in milly seconds | 
                 *  it works one time after the interval is finish   
          - clearInterval(interval_name) // this give you way to  
  */
let printHello = setInterval(function ()=> {console



/*            
          - setTimeout(fun(),0) :
  
                 *  0 duration 
                 *  it works in repeating intervals 
                     
  
          - setTimeout(interval_name) : stop the time out if is woring 

          set interval or setTimeOut => may take nameless function or named external fucntion 

---------------------------------

2.0 => history object: this tell you about the history of the current tabe in the browser 

   * you cant access access the another tab history this is a browsers security 
   
  history object contains two things:
 
   2.1 : property
       
         -  length : return the number of urls in the history of the current browser tab  
  
   2.2 : methods : 
        - history.back()    : one step 
        - history.forward() :  one step
        - history.go()  : this will go the index of the page in history 
---------------------------------

3.0 => location   
           - location.href : tell you the url 
           - location.protocol : tells you the protocol of the url 
           - location.hostname : this tells you the host name 
           - location.search : tells you th equiry string the data that i send with the form 



           - location.assign 
           - location.replace("complete url") 
          
             //  this replace the current page and put the 
                  following url the length of the history will not be changed bcz i make a replace which is mean 
                   the old page is replaced to this page 
           - the top example will help you if you are desiging online exam the that you cant 
               go back to old quesation to reanswer 

---------------------------------

4.0 => navigator object any infomation i want to know about the browser i can no it using the 
          navigator object like  : 
                               
                                    - navegator.userAgent
                                    - navigator.cookieEnabled  i can knoe i the user allow me to put cookies in his browser or not 
                                    - navigator.platform 
---------------------------------                   

5 => Document object : 
                       - access DOM nodes 
                       - modify nodes content 
                       - remove Dom Nodes
                       - Create new Nodes
               
   document object contains the standared dom
                                             [ properties : - innerHTML
                                                             - innerText
                                                methods    : - getElementById     
                                                             - getElementsByTageName 
                                                             - getElementsByByCalssName
                                            ] +

                                 more methods and prop       
           
      properties : - cookies .   methods : - document.write 
                   - title 
                   - 

*/
