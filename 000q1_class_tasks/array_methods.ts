
let numbers : number[] = [1,2,3];
console.log("Original array: ",numbers);

// push method
console.log(numbers.push(4), "Appended new element to the end of an array: ",numbers);

// pop method
numbers = [1,2,3];
console.log(numbers.pop(), "Removed the last element: ",numbers);

// shift method
numbers = [1,2,3];
console.log(numbers.shift(),"Removed the first element: ",numbers);

// unshift method
numbers = [1,2,3];
// console.log(numbers.unshift(0),"Inserted new element at the start of an array: ",numbers);
// unshift method in JavaScript returns new length of an array after an element is added at the beginning.
// That's why this statement `console.log(numbers.unshift(0),"Inserted new element at the start of an array: ",numbers);` prints:
// 4 Inserted new element at the start of an array:  [ 0, 1, 2, 3 ] -> here 4 is the lenght of an array
// To fix this, call unshift method separately outside of console.log
numbers.unshift(0)
console.log("Inserted new element at the start of an array: ",numbers);

// concat method
let alphabets: string[] = ['a', 'b']
let combinedArr = alphabets.concat('c') // concat method returns new array without modifying existing array
console.log(combinedArr)

// join method
let convertedToString = combinedArr.join("-")
console.log(convertedToString)

// slice method
let arrForSlice: string[] = ['a', 'b', 'c']
let newArrReturned = arrForSlice.slice(1)
// if we call slice(1), it will return new array starting from index 1 (which is b) through the end of an array, resulting ['b', 'c']

// If we want slice() to return ['a', 'b'], we need to provide an end index like ['a', 'b', 'c'].slice(0,2). This will start slicing from index 0 (which is a) and stop at index 2 (not inclusive and which is c) giving us ['a', 'b'].
let anotherArr = arrForSlice.slice(0,2);
console.log(anotherArr);

// indexOf method
console.log(alphabets.indexOf('b'))

// includes method
console.log(combinedArr.includes('c'));

// find method
let arrToUseFindMethod: number[] = [3,5,6,8]
let found = arrToUseFindMethod.find(element => element % 2 === 0);
console.log(found)

// findIndex method
let arrToUseFindIndex: number[] = [2,4,3,5];
found = arrToUseFindIndex.findIndex(element => element % 2 !== 0);
console.log(found)

// map method
let arrToUseMapMethod: number[] = [3,4,8,6];
let mapArr = arrToUseMapMethod.map(element => element * 2);
console.log(mapArr);

// [1,4,7,8].filter() //Returns [4,8]
// filter method
console.log([1,4,7,8].filter(num => num % 2 === 0)); // Output: [4,8]

// reduce method
// [2,4,3,7].reduce() // Returns 16
console.log([2,4,3,7].reduce((acc, cur) => acc + cur, 0)); // Output: 16

// every method
// [2,3,4,5].every() // Returns true
console.log([2,3,4,5].every(num => num < 10)); // Output: true

// some method
// [3,5,6,8].some // Returns true
console.log([3,5,6,8].some(num => num > 5)); // Output: true

// reverse method
// [1,2,3,4].reverse() // Returns [4,3,2,1]
console.log([1,2,3,4].reverse()); // Output: [4,3,2,1]

// at method
// [3,5,7,8].at(-2) // Returns 7
console.log([3,5,7,8].at(-2)); // Output: 7
// Using 'at' thrown similar lib error as previously encountered with include method. To fix the issue, I changed the target in tsconfig file to ES2022