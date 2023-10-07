# Excess Type Checking in TypeScript

## Why it Doesn't Work?

- Why it doesn't work when we assign already created object (with excess properties) to a new variable of type (which doesn't have any property)

### Reason as per ChatGPT

The reason TypeScript only does excess property checks on object literals directly assigned to a variable of some type is due to the design decision made by the TypeScript team to balance type safety with practicality.

TypeScript's primary goal is to enhance JavaScript by adding type safety, catching potential mistakes at compile time. The excess property check is one of these safety mechanisms. It flags when you're adding unexpected properties to an object, which could be a typo or misunderstanding of the object's structure.

However, JavaScript is inherently a highly dynamic language where objects often gain and lose properties throughout the lifetime of a program. If TypeScript enforced the excess property check on all objects, not just object literals, it would be overly restrictive and might contradict JavaScript's dynamic nature. It would make TypeScript less practical to use, as developers often work with objects that have additional properties.

So, TypeScript takes a middle ground. It applies the excess property check when you're directly assigning an object literal to a typed variable. In this case, it's very likely that the developer is declaring the object right there, and excess properties are likely to be mistakes. But for existing objects that are assigned to a typed variable, TypeScript assumes that the developer knows what they're doing, and it doesn't apply the excess property check.

This is a compromise between catching potential errors and allowing valid JavaScript patterns.