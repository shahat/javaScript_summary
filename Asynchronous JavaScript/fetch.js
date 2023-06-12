//fetch api
fetch("./resourses/cars.json")
  .then((response) => {
    console.log("resolved", response);
    const data = response.json(); // give us the data
    return data; // bcz this reurn promise it should have then after it
  })
  .then((data) => {
    console.log("this is the data", data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
