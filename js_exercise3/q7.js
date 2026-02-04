//Map
console.log("Map");
console.log([1, 2, 3].map(x => x * 2));

//Filter
console.log("Filter");
console.log([1, 2, 3, 4].filter(x => x > 2));

//Reduce
console.log("Reduce")
console.log( [1, 2, 3].reduce((sum, x) => sum + x, 0));

//forEach
console.log("forEach");
console.log([1, 2, 3].forEach(x => console.log(x)));

//Find
console.log("find");
console.log([1, 2, 3].find(x => x > 1));

//Shift
console.log("shift");
console.log([1,2,3].shift());

//Unshift
console.log("unshift");
console.log([1,2,3].unshift(4));