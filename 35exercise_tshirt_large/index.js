function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Size of the shirt is \"".concat(size, "\" and the message to be printed on it is \"").concat(message, "\"."));
}
// Make a large shirt with the default message
makeShirt();
// Make a medium shirt with the default message
makeShirt('Medium');
// Make a shirt of any size with a different message
makeShirt('Small', 'Small size works too');
