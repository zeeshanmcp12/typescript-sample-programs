function makeShirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`Size of the shirt is "${size}" and the message to be printed on it is "${message}".`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt('Medium');

// Make a shirt of any size with a different message
makeShirt('Small', 'Small size works too');