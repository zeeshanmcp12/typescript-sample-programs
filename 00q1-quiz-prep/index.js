// console.log("Hello World")
// any type
var obj = { x: 0 };
if (!obj.foo) { // No compile time error but JavaScript will throw runtime-error because foo() function in not defined in obj.
    console.log("foo() is not a function");
}
if (typeof (obj) !== "function") { // No compile time error but JavaScript will throw runtime-error because obj is an object and not function.
    console.log("Obj is an object and not function.");
}
console.log("Added:", obj.bar = 100, ",Now the object", obj); // No error because obj is of type any and here we are adding new property 'bar' to `obj` object.
console.log(obj[0] = "Hello", "Now, the object:", obj); // No error because in JavaScript, we can set properties using bracket notation. Here, obj[0]="Hello" will add new property with the key "0" and value "Hello". In JavaScript the key is always string that's why it will print {'0': 'Hello', ...}
console.log(obj = true); // No error, because 'obj' is of type 'any' and can be assigned any value
console.log(obj = "Abdullah", obj); // No error, because 'obj' is of type 'any' and can be assigned any value. Here 'obj' becomes "string".
var n = obj; // No error, because 'obj' is of type 'any' but the variable 'n' will contain the string "Abdullah" which is not a number
console.log(n, obj);
