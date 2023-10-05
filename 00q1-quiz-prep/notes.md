# TypeScript Quiz Tips / Key Points - Q1

## Type is four things

- Programming Language
- Type checker
- Compiler
  - It runs the *type checker*
- Language service
  - It uses the type checker to tell editors such as VS code about how to provide helpful utilities to developers.

## Strong Developer Tooling

- VS code suggestion autocompletion, available member of any object such as "tst".splice() "tst".toLowerCase() etc
- Agar TypeScript main koi object banaya hai tu jab ham us object ko kahin bhi use karenge using "." notation tu VS code us k available members suggest kardega. But the important thing is that, hamne Typescript ka type checker use kiya ho like sath sath type bhi define ki hon.

>Note: `console.blub("Nothing is worth more than laugher");` // Running `tsc <fileName>` command will throw type error but still generates Javascript file.
This is an important concept: even though there was a type error in our code, the syntax was still completely valid. The TypeScript compiler will still produce JavaScript from an input file regardless of any type errors.

## What is *"Type"*

- Type is how the value of shape will be looking.
  - Means k Javascript ki value kis tarah ki dikhni chahiye? Whether it should be "string",  or "number" etc

### The most basics Types in Typescript

- null
- undefined
- string
- number
- boolean
- bigint
- symbol

## Important Points

- JSON stands for JavaScript Object Notation.
- JSON objects cannot have function and array.
- JavaScript objects can have function, array and object itself inside the object.
- JavaScript objects can only be used in Javascript but JSON can be created and used in many programming languages.

## Topics

### any

- in 'any' type, Typescript skips type checking but it is not guarantee that JavaScript will not throw runtime error.
  - TypeScript will not throw any compile-time errors due to being declared with `any` type keyword for any of the example mentioned in [index.ts](index.ts) file but will throw runtime-error.
  - See more detail in ['any type'](./index.ts) heading with code and the comment.