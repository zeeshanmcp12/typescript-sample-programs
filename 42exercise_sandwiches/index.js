function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
}
// Call the function with different numbers of arguments
makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon');
makeSandwich('peanut butter', 'jelly', 'banana', 'honey');
// In this code, makeSandwich is a function that takes any number of arguments, represented by ...items. This ...items parameter is an array containing all arguments passed to the function. The function then loops over this array and prints each item.
// rest parameter syntax: it is used to create a function that accepts any number of arguments.
