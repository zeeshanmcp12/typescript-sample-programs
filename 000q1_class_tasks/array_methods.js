"use strict";
let numbers = [1, 2, 3];
console.log("Original array: ", numbers);
// push method
console.log(numbers.push(4), "Appended new element to the end of an array: ", numbers);
// pop method
numbers = [1, 2, 3];
console.log(numbers.pop(), "Removed the last element: ", numbers);
// shift method
numbers = [1, 2, 3];
console.log(numbers.shift(), "Removed the first element: ", numbers);
// unshift method
numbers = [1, 2, 3];
// console.log(numbers.unshift(0),"Inserted new element at the start of an array: ",numbers);
// unshift method in JavaScript returns new length of an array after an element is added at the beginning.
// That's why this statement `console.log(numbers.unshift(0),"Inserted new element at the start of an array: ",numbers);` prints:
// 4 Inserted new element at the start of an array:  [ 0, 1, 2, 3 ] -> here 4 is the lenght of an array
// To fix this, call unshift method separately outside of console.log
numbers.unshift(0);
console.log("Inserted new element at the start of an array: ", numbers);
// concat method
let alphabets = ['a', 'b'];
let combinedArr = alphabets.concat('c'); // concat method returns new array without modifying existing array
console.log(combinedArr);
// join method
let convertedToString = combinedArr.join("-");
console.log(convertedToString);
// slice method
let arrForSlice = ['a', 'b', 'c'];
let newArrReturned = arrForSlice.slice(1);
// if we call slice(1), it will return new array starting from index 1 (which is b) through the end of an array, resulting ['b', 'c']
// If we want slice() to return ['a', 'b'], we need to provide an end index like ['a', 'b', 'c'].slice(0,2). This will start slicing from index 0 (which is a) and stop at index 2 (not inclusive and which is c) giving us ['a', 'b'].
let anotherArr = arrForSlice.slice(0, 2);
console.log(newArrReturned, anotherArr);
// indexOf method
console.log(alphabets.indexOf('b'));
// includes method
console.log(combinedArr.includes('c'));
