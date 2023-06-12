const getToDoes = async () => {
  // these function for making chaining promises more easy and easyer to  read and debuge
  // it also return promise
  const response = await fetch("./resourses/cars.json");
  // this await keyword stoping js to assign the value to the that variable untill the fetch is resolved

  const data = await response.json();
  return data;
};
console.log("1");
console.log("2");

getToDoes()
  .then((data) => console.log("resolved", data))
  .catch((error) => console.log(error));

// the upper in non blocking code bcz it is
console.log("3");
console.log("4");
