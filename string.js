  /* ############################### Working With string ############################### */

  /*
  ==========================
  convert number to string 
  ==========================
          
             String(150)        // "150" // convert number to string
             x.toSrting()       //  convert number to string 
             100..toString()  
             (100).toString   
  ==========================       
  working with string 
  ==========================
             - access   =>  [stringName][index]              => access  index 2 starting from 0 of the variable string 
                        =>  [stringName].charAt()            => access  the index 10 start from 0  &&  retuen nothing if the index doesn't exist
             - repeat   =>  [stringName].repeat(5)           => name is str variable that i want to repeat 5 times
             - lenght   =>  [stringName].length()            => name is 
             - access   =>  
             - search   =>  [stringName].indexOf("l",2)      => search about l - start from index 2      - if  not exist returns -1
                        =>  [stringName].lastIndexOf("", 2)  => search about l - start form last index 2 - if  not exist returns -1
                        =>  [stringName].includes("l",2)     => search about l - start from index 2      - if  existed return true 
                        =>  [stringName].startsWith("l",2)   => search about l - if it starts with l -> at the index   2 -> || returns true or false 
                        =>  [stringName].endsWith("l",2)     => search about if the text ends with l at the lenght of  2 -> || returns true or false 
           
             - slice    =>  [stringName].slice(0,5)          => return the first 4 index || it works with negative index || [stringName].slice(-8,-5);
                        =>  [stringName].substring(0,5)      => return the first 4 index || it doesnt works with negative index 
                        =>  [stringName].substr(0,5)         => return from 0 to the length of five 
             - split    =>  [stringName].split()    // retern the result in array 
              ==========
                  name = "mm ss rr"
                  name.split(" "); // ["mm", "ss", "rr"]
                  name.split(" ",3) // you tell it give me number of cut
                  name.split("") // ["m","m"," ","s","s"," ","r","r"]
              ==========
          - string.trim() // this delete spaces from start and finish not in the middle 
             >> note that
                 sting is consider(sequance value )when stored in stored in memory it stored in defferant places 
                 bcz of that you can count any string 
                  // return the lenght
             name.charAt(10)    // 
             >> note that : name[]        // retuen undefined if the index doesn't exist        
  */