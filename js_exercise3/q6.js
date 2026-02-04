function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());