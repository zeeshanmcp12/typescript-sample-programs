"use strict";
// console.log("Hello World")
/**
 * Chapter 1
const fullName = "Abdullah"
const nameLength = fullName.length // fullName.length() - length is a property and not function
console.log(nameLength)

function sayMyName(fullName){
    console.log(`This is my fullname: ${fullName}`)
}

sayMyName("Muhammad", "Abdullah") // The red squiggly line is because of Typescript. Language service is using type checker to tell editor about this error.
// The main reason is that, in function signature, we provided only one parameter while in function call we are giving two arguments.
// This code would run without crashing in Javascript. The output will be "This is my fullname: Muhammad" and it wouldn't include "Abdullah"

 */
/* console.blub("Nothing is worth more than laugher"); // Running `tsc <fileName>` command will throw type error but still generates Javascript file.
// This is an important concept: even though there was a type error in our code, the syntax was still completely valid. The TypeScript compiler will still produce JavaScript from an input file regardless of any type errors.

// Correct syntaxL
console.log("Nothing is worth more than laugher")
 */
/* // When Type is not created but called somewhere
interface Painter {
    finish(): boolean;
    ownMaterials: Material[];
    paint(painting: string, materials: Material[]): boolean;
}
// the error is because we haven't define the Material type in our code. Because we are declaring `ownMaterials` property in `Painter` interface with custom type which is `Material`. To resolve this issue, we need to define Material interface like below:

// interface Material {
//     name: string;
//     size: number;
// }

function paintPainting(painter: Painter, painting: string) {
    console.log(typeof(painter.ownMaterials))
}
 */
/**
 * Chapter 2
 *
 *
 */
// Type Inferring
// Typescript khud se hi type infer karleti hai because of being it smart enough. Typescript har us variable ki type infer kar sakti hai jiski starting value computed ho.
// In this example, TypeScript knows that the ternary expression always results in a string
// let bestAudio = Math.random() > 0.5 ? "Hamd" : "Simple Voice"
// console.log(typeof(bestAudio)) // Inferred type: string
// Type errors
// let fullname = "Abdullah"
// fullname.length() // Type error - Typescript be fullname variable ki type "string" infer ki thi and "length" property "number" hai and not function.
// fullname.length // No Type error
// Assignability
// These are allowed because we are assigning string to the variable which type was inferred as string initially.
// ------ALLOWED-------
let simpleText = "hello";
simpleText = "It's a simple text";
let somethingHard = "Not a simple text";
// ------NOT ALLOWED-------
// somethingHard = true; // boolean type is not assignable to type string. Means k somethingHard variable expect kar raha tha k use string type ki value hi assign hoti but ham use boolean type ki value assign kar rahe hain.
// Error main jo type left side par hai, declaration k waqt wo type right side par hogi. for example:
// Type boolean is not assignable to type string.
// somethingHard = true -> true (boolean) is on right side and (inferred type) string is on left side.
// Type Annotation
// any
// Agar kisi variable ko initially value assign nahi ki ho tu Typescript future ki type expect karte hoe isko chor nahi degi bal k us variable ko 'any' type ka bana degi.
// evolution of any type
// Typescript main types evolve hoti rehti hain agar variable ko without initial value declare kiya ho.
// For example, this is allowed:
// Evolution of type
let rocker; //In Typescript, this will be of 'any' type.
rocker = "This is rocker";
rocker.toLowerCase();
rocker = 92;
rocker.toPrecision(1);
rocker.toUpperCase(); // Type error
// Error 'toUpperCase() does not exist on type number. Because upper rocker.toPrecision(1) number ban chuka hai. (I mean rocker variable ki type evolve ho chuki hai)
// Unnecessary Type anotation - because here the 'string' type annotation is redundant but the code doesn't throw any error.
let txt = "Abdullah";
/* // any type
let obj: any = {x:0};

if (!obj.foo){ // No compile time error but JavaScript will throw runtime-error because foo() function in not defined in obj.
    console.log("foo() is not a function")
}
if (typeof(obj) !== "function"){ // No compile time error but JavaScript will throw runtime-error because obj is an object and not function.
    console.log("Obj is an object and not function.")
}
console.log("Added:",obj.bar = 100, ",Now the object", obj) // No error because obj is of type any and here we are adding new property 'bar' to `obj` object.
console.log(obj[0] = "Hello", "Now, the object:", obj) // No error because in JavaScript, we can set properties using bracket notation. Here, obj[0]="Hello" will add new property with the key "0" and value "Hello". In JavaScript the key is always string that's why it will print {'0': 'Hello', ...}
console.log(obj = true) // No error, because 'obj' is of type 'any' and can be assigned any value
console.log(obj = "Abdullah", obj) // No error, because 'obj' is of type 'any' and can be assigned any value. Here 'obj' becomes "string".
const n : number = obj // No error, because 'obj' is of type 'any' but the variable 'n' will contain the string "Abdullah" which is not a number
console.log(n, obj)
 */ 
