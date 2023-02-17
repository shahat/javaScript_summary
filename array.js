/*  OBJECTIVE  */


 /*  
    1 - array basics 
    2 - array es6 
 
*/


  /*
   ==========================
           Array >>  Basics 
   ==========================     
   
           - access      => [][index][index]                        => name[] => one dimensional  name[][] => two dimensional  name[][][] => 3d array
           - length      => [].length()                             => get the length of the array 
           - pop         => [].pop("value")                         => remove last index 
           - push()      => [].push("value")                        => add in last index 
           - shift       => [].shift()                              => remove the first element 
           - unshift(60) => [].unshift()                            => add to start 
           - modify      => [][index]= value                        => modify element in specific index 
           - splice      => [].splice(start, count, add, add)       => for adding or deleting values in the array && it will change the array 
           - slice       => [].slice(start, end)                    => take slice from array  && it dosent affect on it  
           - indexOF     => [].indexOf("vale", search-start-index)  => search in array about a value and return its index if not existed returns -1 
           - lastindex   => [].lastIndexOf("value",lastIndex)       => search but forn last to start 
           - include     => [].include("value", index)              => search for the calue is in array or not if not return -1
           - reverse     => [].reverse()                            => reverse the array
           - sort        => [].sort()                               => abc or 123
           - concat      => [].concat(array1,array2)                => array1 + array2
           - join        => [].join()                               => this will print the array as a string 
  
   ==========================
           Array >> ES6 >> 
   ==========================
               const s = [5, 6, 7];
               s = [1, 2, 3];   // this will cause error bcz now we want to change the total array
               s[2] = 45;
               console.log(s); // [5,6,45]
*/