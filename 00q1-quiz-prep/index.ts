// console.log("Hello World")
let commonMan: string = "A Common Man" // General 'string' type
commonMan = "Very common"

let philospher: "Ahmed"; // Literal type
philospher = "Abdullah" // Type error: "Abdullah" is not assignable to "Ahmed"

// ============================================== Chapter 1 ==============================================

/**
 * Chapter 1
 * Basics

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
// ============================================== End of Chapter 1 ==============================================

// ============================================== Chapter 2 ==============================================

/**
 * Chapter 2
 * The Type System

Type Inferring
// Typescript khud se hi type infer karleti hai because of being it smart enough. Typescript har us variable ki type infer kar sakti hai jiski starting value computed ho.
// In this example, TypeScript knows that the ternary expression always results in a string

let bestAudio = Math.random() > 0.5 ? "Hamd" : "Simple Voice"
console.log(typeof(bestAudio)) // Inferred type: string

// Type errors
let fullname = "Abdullah"
fullname.length() // Type error - Typescript be fullname variable ki type "string" infer ki thi and "length" property "number" hai and not function.
fullname.length // No Type error


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

// rocker = "hello"
rocker.toUpperCase(); // Type error and to resolve this type error, declare variable of type string as we declared in above line.
// Error 'toUpperCase() does not exist on type number. Because upper rocker.toPrecision(1) number ban chuka hai. (I mean rocker variable ki type evolve ho chuki hai)

// Unnecessary Type anotation - because here the 'string' type annotation is redundant but the code doesn't throw any error.
let txt: string = "Abdullah";

let thisIsString : string = 23; // Type-error
// Here Typescript sees an incompatibility. Because assigned type to variable is "string" but initializer is "number".

// Type Shapes

// TypeScript understand karti hai k jis type ka variable hamne declare kiya hai uski konsi properties par konsa operation perform kiya ja sakta hai or konsa nahi.
// For example,
let raper = "Queen latifah";
// Now, TypeScript inferred it's type as 'string'. Ab TypeScript ko malom hai is (string) type k variable ki konsi properties hain jis par string k operations perform kiye ja sakte hain. For example:
raper.length // Allowed

// Konse operation allowed nahi hain:
raper.push("!") // Now Allowed because push is not a property of string

// Same goes for objects. Object main hamne jo properties define ki hain agar un k ilawa ham kisi aisi property ko access karenge jo exist nahi karti to TypeScript error throw karegi. for example:

interface Person {
    name: string;
    age: number
}

// This is called object's shape
let father: Person = {
    name: "Abdullah",
    age: 30
}

father.name; // OK
father.age; // OK
father.middleName; // Error :Property 'middleName' does not exist on type 'Person'.ts(2339)

// Module

// JavaScript main pehle ye feature nahi tha k files (k content) ko apas main share kis tarah kiya jaye. ECMAScript 2015 main isko standardize kiya gaya "ECMAScript Module (ESM)" k name se.

// Module - A file with a Top-level import or export 
// Script - A file that is not a module.

// Syntax

import { value } from "./values"

export const doubled = value * 2;


// Same named variable multiple modules main use ho sakta hai and dono files main nameing conflict consider nahi hoga. for example

// a.ts
// export const shared = "Cher";

// b.ts
// export const shared = "Cher";

// ================================== in above, there is no issue at all ==================================

// c.ts
// import { shared } from './a'
// export const shared = "Cher";
// ================================== type error =======================================
// Because c.ts main hamne same name 'shared' k sath variable declare kiya hai, ab ham usi name k variable ko kisi dosri file se import bhi kar rahe hain tu ye naming conflict ho jayega between the imported "shared" with it's own (export const shared = "Cher") value.

// Agar file script hai (and module nahi hai tu TypeScript use globally scoped consider karti hai and ) uske variables globally scoped honge. Means k agar kisi script main "human" name se variable declare kiya hai tu dosri script (file) usko access kar sakti hai and same (human) name se kisi dosri script file main declare nahi kiya ja sakta.

// a.ts
// const human = "Cher"
// Cannot redeclare block-scope variable 'human'

// b.ts
// const human = "Cher"
// Cannot redeclare block-scope variable 'human'

// How to resolve above issue?
// Hame export or import statements us file main add karni hongi.

// How to enfore a file to be a module
// file main kahin bhi export {} likh den tu wo file as a module work karegi.

// a.ts and b.ts
// const human = "Cher"; // OK
// export {}

 */
// ============================================== End of Chapter 2 ==============================================

// ============================================== Chapter 3 ==============================================

/**
 * Chapter 3
 * Union and Literals
 * 
 let teacher: string | number = "Human";
teacher.toUpperCase() // OK because we have explicitly defined it's value type to be string even though it was with union type
teacher.toFixed() // type error at this stage
// it will stop throwing error when we reinitialize it with number
teacher = 23

// Assignment Narrowing
let marketer: string | number;

marketer = "Abdullah";

marketer.toUpperCase();
marketer.toFixed(); // Type error because hamne `marketer = "Abdullah"` main narrowing kardi k 'marketer' string hoga. And string par toFixed() exist nahi karta


// Narrowing through Conditional check
let scientist = Math.random() > 0.5 ? 81 : "Rosland";
if (scientist === "Hello"){
    scientist.toUpperCase();
}

scientist.toFixed();

// Narrowing through ternary operator
let human = Math.random() > 0.5
    ? 85
    : "Abdullah"
// agar random number 0.5 se greater hoa tu 85 return hoga aur agar less hoga tu "Abdullah" return hoga
// In this case, no error with be thrown when we write code snippet like below. This is called narrowing using ternary operator.

typeof human === "string" ? human.toUpperCase() : human.toFixed() // Agar human string hoa to toUpperCase() chalega otherwise toFixed() because upper hame 85 mil chuka hoga agar random number 0.5 se greater ho tu.

// Literal Types
// The difference between const variable with literal types and let variable with primitive types

// Declaring variable with const shows "Literal Type" i.e. const person: "Abdullah"
const person = "Abdullah"
//It shows literal type and not primitives like string, number etc

// Declaring variable with let shows "Primitive" type. i.e. let human: string
let man = "Ahmed"

if (person === "Test"){ // Error
    person.toUpperCase();
}

// Yahan par condition ye check ho rahi hai k person jo k "Abdullah" (literal) type ka variable hai, us main "Test" value hai ya nahi. Is waqt 'person' aik special type ka variable aur wo type "Abdullah" hai. Means k is main Abdullah k ilawa koi or value nahi asakti.
// So "Abdullah" ki type sirf "Abdullah" value ko hi contain kar sakti hai. Is lihaz se condition false hogi.

// Difference between General 'string' type and Specific literal type
let thisIsGeneralString: string // is main koi bhi value asakti hai jo string ho
let thisIsLiteralType: "Hello" // is main sirf "Hello" hi asakta hai.

thisIsGeneralString = "Hello" // No Error
thisIsGeneralString = "World" // No Error

thisIsLiteralType = "Hello" // No Error
thisIsLiteralType = "World" // Type error: Type '"World"' is not assignable to type '"Hello"'.ts(2322)


// const text : string = null // strict null checking

// Variables Without Initial Values

// =============== Implicit undefined ==========================
// let mathematician: string;
// mathematician?.length; // Error: Variable is used before being assigned
// '?.' is a optional chaining operator. It explicitely reads the 'lenght' property without having to check whether mathematician returned null or defined. Read more below about optional chaining operator

// Imagine you have a box, and you're not sure if there's something inside it. Normally, to find out how big the thing inside the box is, you would first need to check if there's anything in the box at all. If you don't, and the box is empty, you might get into trouble for assuming there was something there.

// In our code, the mathematician variable is like this box. And the length property is like the size of the thing inside the box.

// The ?. operator lets you ask "What's the size of the thing inside the box, if there's anything in it?" without getting into trouble if the box is actually empty. If there's something in the box (mathematician is not null or undefined), it tells you the size (the length). If the box is empty (mathematician is null or undefined), it just quietly says "There's nothing in here" (returns undefined), without causing any fuss (an error).

// =============== Explicit undefined ==========================
// How to resolve error (variable is used before being assigned) in line `let mathematician: string; mathematician?.length`
// Add undefined type to the variable. For example:
let mathematician: string | undefined;
mathematician?.length // OK
// Hamne "| undefined" de kar ye bata diya k mathematician ki value "undefined" bhi ho sakti hai jo k valid type hai is value ki.

// Type Aliases

// Problem statement
// let rawData1: string | number | boolean | null | undefined
// let rawData2: string | number | boolean | null | undefined
// let rawData3: string | number | boolean | null | undefined

// Instead of writing types with pipe, we can create type and provide all types in there using Union

// Type aliases is kind of copy-paste when using (and assigning) types to variables.
// Type aliases are created using type keyword, a new name and =:
// Type aliases are given name PascalCase (by convention)

type RawData = string | number | boolean | null | undefined;

// So above code can be re-written as:
let rawData1: RawData
let rawData2: RawData
let rawData3: RawData


// Combining Type Aliases

type Id = string | number;
type MaybeId = Id | boolean | null | undefined

 */
// ============================================== End of Chapter 3 ==============================================





// ============================================== Chapter 4 ==============================================

// ============================================== End of Chapter 4 ==============================================


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