// console.log("Hello World")
let commonMan: string = "A Common Man" // General 'string' type
commonMan = "Very common"

let philospher: "Ahmed"; // Literal type
// philospher = "Abdullah" // Type error: "Abdullah" is not assignable to "Ahmed"

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

/**
 * Chapter 4
 * Objects
 * 
 // Object Literal

// A set of keys and values - Each with their own type. For example:
let person = {
    name: "Abdullah",
    age: 29,
    isLoggedIn: true,
}

// Type inferreing from object
// let person: {
    // name: string;
    // age: number;
    // isLoggedIn: boolean;
// }

// person.name = "Ahmed";
// person['name'] = "Ahmed";
// person.age = 25;
// person.age = "Asif"; // type error: type string is not assignable to type number
// person.isLoggedIn = false;

console.log(typeof(person.age))
console.log(person['name'])

// Declaring object types
// It's all fine k existing object main se types inferr ho rahi hain. But eventually hame khud se object ka shape banana hoga jis main hame explicitely object ki type define karni hogi.
// Iska syntax "object literal" ki tarah hi hai. Difference ye hai k "object type" define karte waqt hame values ki jaga unki primitive types deni hoti hain. 
// One more difference is that, during defining type, we need to put ":" colon while during the initializing, we need to put "=" equal (or assignment operator) For example:

let newPersonAsType : {
    name: string
    age: number
}

// Ab ham is "object type" main values de sakte hain

newPersonAsType = {
    name: "Abdullah",
    age: 28
}

// Now, newPersonAsType variable is of type object. We cannot redeclare it as string.

newPersonAsType = "Ahmed" // Error: Type 'string' is not assignable to type '{ name: string; age: number; }'

// Aliased Object Types

// Bar bar "Object type" is tarah likhna like {name: string, age: number} can be hectic and tiresome. Most of the time, we use "Aliased Object Types".
// Upper jo hame type error araha tha, wo ab more readable ho jayega.

// Syntax for Aliased Object Types

type Person = {
    name: string
    age: number
    isLoggedIn: boolean
}

let supportExecutive: Person;

supportExecutive = "Asif" // Type error: Type 'string' is not assignable to type 'Person'

// Writer Note:
// Most Typescript's projects prefer to use 'interface' keyword to describe object types.

// Structural Typing

// Typescript main matter ye karta hai k data ko kis tarah structure kiya gaya hai ya data ko kis tarah shape kiya gaya hai, regardless of how and where it was declared. This is known as "Structural Typing".

type WithFirstName = {
    firstName : string
}

type WithLastName = {
    lastName : string
}

let hasBoth = {
    firstName : "Muhammad",
    lastName: "Abdullah"
}

// Let's take above code as an example. `WithFirstName` and `WithLastName` dono main aik property defined hai jiski type 'string' hai.
// `hasBoth` object main dono properties aisi hain jo k `WithFirstName` and `WithLastName` types main available hain. So, jab ham `hasBoth` object ko kisi aise variable main assign karenge jiski type `WithFirstName` ya `WithLastName` ho, tu us main koi error nahi ayega and wo assignment valid hogi. Isi ko kehte hain "Structural Typing", means k Typescript ko sirf ye garaz hai k object ko shape kis tarah kiya gaya hai, matlab k object ki properties k according, na k uski value ya jahan us object ko declare kiya hai.

// Ab ye validate aise hoga:

let aNewTypeThatCanHaveHasBoth : WithFirstName = hasBoth;

// Here, `hasBoth` object is assignable to `aNewTypeThatCanHaveHasBoth` variable of type `WithFirstName` because `hasBoth` object has necessory properties for `WithFirstName` type. This is called "Structural Typing". Structure same tha is wajah se assignment valid ho gayi.

// Some notes from writer:
// Structural Typing: When there is a static system checking that type. in Typescript, it's "Type checker".
// Duck Typing: Duck typing is when nothing checks object types until they’re used at runtime.
// In summary: JavaScript is duck typed whereas TypeScript is structurally typed.

// Usage Checking

// Aliased object type ki definition main jo properties batayi hain wo properties us variable main bhi honi chahiyen jo us (Aliased object type) k object k liye declare kiya hai. for example

type typeWithTwoProperties = {
    first: string
    last: string
}

// No Error in this case 
// because `haveBothProperties` object main wo dono properties exist karti hain jo hamne `typeWithTwoProperties` main define ki (ya dosre words main yun bhi bol sakte hain k "Object shape" kiya hai)
const haveBothProperties : typeWithTwoProperties = {
    first: "Muhammad",
    last: "Abdullah"
}

// Missing Property Error: Property 'last' is missing in type {first: string;} but is declared in type 'typeWithTwoProperties'
const hasOnlyOneProperty : typeWithTwoProperties = {
    first: "Muhammad",
}

// Typescript ka type checking system ye bhi make sure karta hai k 'Object type' main hamne jo properties and unki types define ki hain wo object main bhi match honi chahiyen otherwise mismatch ki soorat main error ayega. Because "Mismatched types between the two are not allowed". For example:

type exampleForMismatchType = {
    name: string;
    age: number;
}

let aPerson : exampleForMismatchType = {
    name: "Abdullah",
    age: "30" // Type error. Type 'string' is not assignable to type 'number'.
}

// Reason for the error: `exampleForMismatchType` main hamne `age` ki type `number` define ki hai jab k object main ham string de rahe hain tu mismatch ho gaya and Typescript ka type checking system isko allow nahi karta.

// Excess Property Checking

// This is similar to "Usage Checking" as explained above. The only difference is that, in "Excess Property Checking", Typescript doesn't allow if a variable is declared with an object type and has an addiotional properties that the object type doesn't contain.
// In simple words, object k andar koi extra property nahi hongi chahiyen jo hamne "Object Type" main define nahi ki hain.


let anotherPerson : exampleForMismatchType = {
    name: "Abdullah",
    age: 30,
    isLoggedIn: true // Error is self-explanatory when we hover over to 'isLoggedIn'.
}

// =======================Important point =================================
// "Excess Property Checking" mechanism sirf usi waqt kam karta hai jab object ki assignment and definition same place main ho rahi ho. Means k dono kaam usi waqt ho rahe hon. Ye usi waqt ho sakta hai jab ham object ko create kar rahe hote hain. Jese k `anotherPerson`.

// English Version: this excess property check only happens for object literals that are being created and assigned to a variable in the same place.

// Flow kuch is tarah hoga:
// Hamne `anotherPerson` object create kiya
// `anotherPerson` ko type assign ki jo k `exampleForMismatchType` hai
// `anotherPerson` ki initialization start ki
// name: "Abdullah", define ki
// age: 30, define ki
// isLoggedIn: true, jese hi ye property define karne lage tu Typescript k type checker ne error throw kiya k ye wali property `exampleForMismatchType` main exist nahi karti.

// Agar ham pehle se bana hoa object kisi variable (of type `exampleForMismatchType`) ko assign karenge tu "Excess Property Checking" apply nahi hogi. Let's take below as an example:
let oneMorePerson : exampleForMismatchType = anotherPerson

// `anotherPerson` object pehle se ban chuka hai and then `oneMorePerson` ko assign ho raha hai tu koi error nahi ayega.

// =============== But why is that? ===========================================
// See excess_type_checking_reason.md file for the reason.

// Nested Object Types

// Object k andar object. TypeScript yahan bhi type safety provide karti hai.
// Agar object 'Object type' ka structure follow karte hoe create hoa hai tu koi error nahi ayega cha'hay 'Object Type' nested object contain karti ho. For example:

type Poem = {
    author: {
        firstName: string;
        lastName: string;
    }
    name: string
}

const poemMatch : Poem = {
    author: {
        firstName: "Muhammad",
        lastName: "Abdullah",
    },
    name: "Nothing to See"
}

const poemMisMatch : Poem = {
    author: {
        name: "Ahmed" // Error: Type '{ name: string; }' is not assignable to type '{ firstName: string; lastName: string; }'. Object literal may only specify known properties, and 'name' does not exist in type '{ firstName: string; lastName: string; }'.
    },
    name: "Something to See"
}

// It's a good practice to more out nested type from "Object type". Code readability bhi behtar ho jayegi or error bhi concise ho jayega.

type Author = {
    firstName: string;
    lastName: string;
}

type newPoemType = {
    name: string;
    author: Author;
}

const newPoemMisMatch: newPoemType = {
    author: {
        name: "Abdullah" // Error: Type '{ name: string; }' is not assignable to type 'Author'. Object literal may only specify known properties, and 'name' does not exist in type 'Author'.ts(2322)
    },
    name: "Everything to See"
}

// ======================== TIP from writer =================================

// It is generally a good idea to move nested object types into their own type name like this, both for more readable code and for more readable TypeScript error messages.

// Optional Properties

// Ham "Object Type" main kisi property ko optional bhi kar sakte hain. Method ye hai k property k bad and ":" se pehle "?" question mark add karden. For example:

type typeWithOptionalProperty = {
    requireProperty : string;
    optionalProperty ?: string; // This is optional
}

// Make sure to keep the difference between optional and the one defined with "Union's undefined".

// English version:
// Keep in mind there is a difference between optional properties and properties whose type happens to include undefined in a type union. A property declared as optional with ? is allowed to not exist. A property declared as required and | undefined must exist, even if the value is undefined.

type Book = {
    author ?: string,
    pages : string | undefined
}

const ok: Book = {
    pages : undefined
}

const notOk: Book = { } // Error: Property 'pages' is missing in type '{}' but required in type 'Book'.ts(2741)
// Yahan author ka koi error nahi diya because wo optional property thi.

// ======================================= Unions of Object Types ==========================================

// TypeScript main Union types pipe operator "|" se define ki jati hain.
// Ye is cheez ko represent karta hai k kisi value ki aik ya aik se zyada types ho sakti hain. for example: let myData = string | number | boolean

// Sometimes kuch scenarios aise bhi ho sakte hain hame aisi 'type' banari create karni jo dosri types ko union k sath hold kare (ya us type ko ham more than one type assign karen). Har type main different properties bhi ho sakti hain. For example:

type Cat = {
    name: string;
    purns:boolean
}

type Dog = {
    name:string;
    barks:boolean
}

type Pet = Cat | Dog

// Here Pet is a Union type that can be either a 'Cat' or 'Dog'
// Type Narrowing k through ham isko handle kar sakte hain if we want to check all types.

function playWithPet(pet: Pet){
    if('purns' in pet){
        console.log(`${pet.name} purns`);
    }else if('barks' in pet){
        console.log(`${pet.name} barks`);
    }
}

// We use 'in' keyword to check if a property exist in object (Pet).

// Inferred Object-Type Unions

// Jab kisi variable ko kisi aisi value ko sath initialized kiya jaye jo several different object types ki ho tu Typescript us variable ki kya type infer karegi. for example:

let poem = Math.random() > 0.5
    ? {name: "The Poem", pages: 10}
    : {name: "The Sun is light", rhymes: false}

// Yahan par poem ko different object types main se koi aik object type assign ho rahi hai based on the condition (Math.random() > 5).
// One possible type has name and pages properties and the other possible type has name and rhymes properties.

// Ab jab ye hoga tu TypeScript ye inferr karegi k 'poem' is of union type jis main dono possible object shapes ho sakte hain. Plus wo saari properties is (poem) union type main included hongi jo in ({name: "The Poem", pages: 10}{name: "The Sun is light", rhymes: false}) object shapes main defined thin. Agar koi property kisi object shape main nahi hogi tu TypeScript us property ko optional kardega. For example:

// {
//     name:string;
//     pages:number;
//     rhymes?:undefined;
// } | {
//     name:string;
//     pages?:undefined;
//     rhymes:boolean;
// }

// When you access poem.name, TypeScript knows it's always a string. But when you access poem.pages or poem.rhymes, TypeScript recognizes that they might be undefined, because they aren't present on every possible object shape for poem. So their type is number | undefined and boolean | undefined, respectively.

// Explicit Object-Type Unions

// Ham explicitely types define kar k us union type (poem) ko de sakte hain.

type PoemWithPage = {
    name: string;
    pages: number;
}

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
}

type PoemType = PoemWithPage | PoemWithRhymes

let newPoem: PoemType = Math.random() > 0.5
    ? {name: "The Poem", pages: 10}
    : {name: "The Sun is light", rhymes: false}

// Is case main k jab hamne khud se type define kar k is newPoem ko de di hai tu ham sirf wo property access kar sakte hain jo all those union types main available hogi which is 'name'.

newPoem.name //Allowed because it is available in all those union types (PoemWithPage & PoemWithRhymes)
newPoem.pages; // Error: Property 'pages' does not exist on type 'PoemType'. Property 'pages' does not exist on type 'PoemWithRhymes'
newPoem.rhymes;// Error: Property 'rhymes' does not exist on type 'PoemType'. Property 'rhymes' does not exist on type 'PoemWithPage'

// Narrowing Object Types

// We can narrow down to check if property of that object does exist then true otherwise false.

if ('pages' in newPoem){
    newPoem.pages // OK: newPoem is narrowed to PoemWithPage
}else {
    newPoem.rhymes // OK: newPoem is narrowed to PoemWithRhymes
}

// Yahan par truthiness checking allow nahi hai for those non-existence properties like `if (newPoem.pages)`. It will throw type error
// Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.

// Discriminated Unions

// Discriminated Unions ye hota hai k union types main har type k andar aik aisi property ("Discriminant") hogi jo union types main defined saari types k darmiyan farq karegi. Is se benefit ye hoga k narrowing easy ho jayegi. Let's take an example:

type PoemWithPrice = {
    name: string;
    price:number;
    type:"price"
}

type PoemWithBestSelling = {
    name: string;
    bestSelling:boolean;
    type:"bestSelling"
}

// Let's create a union type

type PoemAdv = PoemWithPrice | PoemWithBestSelling;

let poemChanged : PoemAdv = Math.random() > 0.5
    ? {name:"The Hello", price:40, type:"price"}
    : {name:"The Yellow", bestSelling:true, type:"bestSelling"}

if (poemChanged.type === "price") {
    console.log(`We got the price with ${poemChanged.price}`)
}else if (poemChanged.type === "bestSelling"){
    console.log(`Yes, it's ${poemChanged.bestSelling}`)
}

// Now, this is allowed to access property with type (Discriminent)
poemChanged.type

// Not allowed
poemChanged.price
// Property 'price' does not exist on type 'PoemAdv'.
//   Property 'price' does not exist on type 'PoemWithBestSelling'

// ================================================ Intersection Types ================================================
// Jis tarah TypeScript main "Union Types" "|" sign k sath define ki jati hain is tarah TypeScript main "Intersection Types" "&" sign k sath define ki jati hain.
// Intersection types are typically used with "Aliased Object Types"
// Syntax

type Car = {
    name: string;
    model: number
}

type Imported = {
    japanese:boolean;
}

type ImportedCar = Car & Imported;
// Equivalent to 
// {
//     name:string,
//     model:number,
//     japanese:boolean
// }

// Dangers of Intersection Types
// Long Assignability
// Agar intersection types of "combination of union types" k sath use kiya jaye tu ye buhut difficult ho jata read karna and debug karna.

// never
// Ye buhut rare cases main use hota.
type notPossible = string & number

const notString: notPossible = "" // Error: Type 'string' is not assignable to type 'never'
const notNumber: notPossible = 0 // Error: Type 'number' is not assignable to type 'never'
 */

// ============================================== End of Chapter 4 ==============================================

// ============================================== Chapter 5 ==============================================

// ==================== Function parameter ===================
// Define function parameter's type using anotation, function recite(audio: string){console.log(`reciting ${audio}`)}

// Required Parameters
// Javascript main ham jitne parameters den koi issue nahi hoga. Typescript ye consider karegi k jitne parameters diye hain wo sab required hain, and agar koi bhi parameter function call k waqt nahi diya tu type error ayega.

// Parameters: Jo ham ham function banate hoe paranthesis main dete hain. Means k function signature main.
// Arguments: Jo ham function call karte waqt un parameters ki jaga ki dete hain.

// Optional Parameter
//  Ham parameters ko optional bhi kar sakte hain. optional karne k liye "?" lagana hota hai anoted ":" se pehle. Optional parameters ko hamesha last main define karna hota hai function signature main. Syntax: function reciteWithRecitor(audio: string, recitor?:string){console.log(`Recitor ${audio})}

// optional parameter union type se different hain. Aisa nahi ho sakta k ham parameter union type k sath define karen and expect karen k ye function call main type error nahi dega. Koi bhi parameter jo "?" question mark sign k sath mark nahi kiya wo agar function call main diya tu error ayega.
// function reciteWithRecitor(audio: string, recitor: string | undefined){
    
// }

// reciteWithRecitor("Hamd") // Expected 2 but got 1
// reciteWithRecitor("Hamd", undefined) // OK
// reciteWithRecitor("Hamd", "SHA") // OK

// Default Parameters
// Jis tarah JavaScript main ham optional parameter ko "=" k sath defualt value de sakte hain isi tarah TypeScript main bhi agar ham anotation k bajaye "=" k sath koi value dete hain tu TypeScript uski type 'value' k according inferr karlegi. Ab function call main agar ham undefine dete hain ya value nahi bhi dete tu koi error nahi ayega unless k ham type change karden. Jese k agar hamne koi number type ki value default ki hai parameter main tu ab function call main number and undefined k liawa types main error ayega.

// Rest Parameters
// Agar hame kabhi 1 se zyada arguments pass karne hon but ye nahi malom ho k kitne karne hain tu us k liye ham "Rest Parameters" use kar sakte hain.JavaScript main ham spread operator "..." ko use karte hoe function k parameters declare karte hain. TypeScript main bhi spread operator "..." ko use karte hoe rest parameters declare kar sakte hain. But ye zaroori hai k rest parameter sab se last main ho and uski type array ho.
/* 
function manyAudios(recitor: string, ...audios: string[]){
    for (const recitor of audios){
        console.log(`Recitor of ${audios} is ${recitor}`)
    }
}

manyAudios("Naat")
manyAudios("Naat","Kalam","Sorah","etc")
manyAudios("Naat",688) // Type error
manyAudios("Naat", undefined) // Type error */

// ==================== Return Types ===================
// Typescript is perceptive.
// Agar Typescript ko ye understand ho jaye k function konsi value return karega tu TypeScript ko uski type bhi malom ho jayegi.

// Agar function main multiple return statements hon with different values tu TypeScript main wo Union type consider hogi.

// function getSongAt((songs: string[], index: number){
//     return index < songs.length
//         ? songs[index]
//         : undefined;
// }

// Explicit Return types
// Ham TypeScript main explicitely return type declare kar sakte hain. Regular function main ye "{" curly braces se pehle hota hai aur arrow function main ye "=>" se pehle hota hai.

function tesFunc(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo
}

const numbers = [1,2,2,3,4,5]

const numOnArr = numbers.reduce((acc, current): number => {
    acc += current
    return acc
})

// console.log(numOnArr)

// Agar function main return statement aisi value return kare jo (declared) return type ko assign na ho sake to wahan par assignability error ayega jese k is example main funtion ki return type "Date" aur "undefined" hai but function ki definition main "string" ki return ho raha hai.
function getAudioDate(audios: string): Date | undefined {
    switch (audios) {
        case "Naat":
            return new Date('October 13, 2023');
        case "Don't know":
            return "Hello"; // Error: Type 'string' is not assignable to type 'Date'.
        default:
            return undefined
            break;
    }
}


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