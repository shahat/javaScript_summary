  /* ############################### Working With spreed operator ############################### */

  // spread / rest syntax in javascript  // 
  /* 
  using spread operator with array 

          let animal = ['dog', 'duck', 'cat'];
          let ZooAnimal = ['tiger', 'corocodile', ...animal]

using spread operator with object 

          let example1 = {
              name: "medo",
              age: 24
          };
          let example2 = {
              ...example1,
              pass: true
          }
          console.log(example2);
  
  */

  // spread / loops and iteration in javascript  // 
  /*
  1 : while 
  2 : do .. while 
  3 : for loop 
  4 : for in     // this is best when we deal with assovitave array 
  5 : for of 
  6 : for each 
  */
  let prodcast = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  prodcast.forEach(index => {
    console.log(index);  
  });


  // foreach with object  if you want to print the value we change keys to value 
  Object.keys(example1).forEach((key) => {
    console.log(key); // name , age  
  })