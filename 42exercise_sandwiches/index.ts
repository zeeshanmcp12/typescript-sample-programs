function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(item);
    }
}



// Call the function with different numbers of arguments
makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon');
makeSandwich('peanut butter', 'jelly', 'banana', 'honey');


// In this code, makeSandwich is a function that takes any number of arguments, represented by ...items. This ...items parameter is an array containing all arguments passed to the function. The function then loops over this array and prints each item.
// rest parameter syntax: it is used to create a function that accepts any number of arguments.