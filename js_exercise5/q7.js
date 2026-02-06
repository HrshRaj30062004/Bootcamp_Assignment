const arr=[1,2,[3,4,5,[6,7]]];
const flattenNested = arr => arr.flat(Infinity);
console.log(flattenNested(arr));