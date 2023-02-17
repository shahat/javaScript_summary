
  /* ############################### Working With this keyword ############################### */
  /*
              - this value is dependening on its position 
                 * if u use it inside the method of the object         =>  it will refare to the owner of this object
                 * in the global scope                                 =>  it refare to the window object 
                 * in public function                                  => it refare to window
                 * in function in strict mode                          => this refer to undefine 
                 * in event this refer to                              => the element that have the element 
                
                 =>
                      “use strict”; function func(){ return this; }             // return undefined 
                 => 
                      <button onclick=”this.style.color=‘red’> Submit </button> // one i click the button the color change to red 
  
  
  
*/