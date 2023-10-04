# TypeScript Quiz Tips / Key Points - Q1

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