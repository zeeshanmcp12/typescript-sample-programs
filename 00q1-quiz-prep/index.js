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
let fullname = "Abdullah";
// Type Inferring
// Typescript khud se hi type infer karleti hai because of being it smart enough. Typescript har us variable ki type infer kar sakti hai jiski starting value computed ho.
// In this example, TypeScript knows that the ternary expression always results in a string
// let bestAudio = Math.random() > 0.5 ? "Hamd" : "Simple Voice"
// console.log(typeof(bestAudio)) // Inferred type: string
fullname.length();
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
