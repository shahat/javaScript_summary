const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args); //bind create new function
    } else {
      return fn(...args);
    }
  });
};
const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
console.log("this is the final output ", curriedTotal(10)(20)(30));

// another example

const multiplay = (x, y) => x * y;
const curriedMultiPlay = (x) => (y) => x * y;
console.log("this is the multiplay function ", curriedMultiPlay(10)(20)); // 200 if u pass to parammeter

// the same code like above
function curriedMultiPlay2(x) {
  return function (y) {
    return x * y;
  };
}

// 200 if u pass to parammeter
console.log(
  "this is the curriedMultiPlay2 function ",
  curriedMultiPlay2(10)(20)
);
