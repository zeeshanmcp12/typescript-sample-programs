const randomListToGenErr = [1,2,3,4,5]

let elementIndex = 5

// console.log(randomListToGenErr[4])

try {
    if (elementIndex < 0 || elementIndex >= randomListToGenErr.length) {
        throw new Error('Index out of bounds');
    } else {
        console.log(randomListToGenErr[elementIndex]);
    }
} catch (error) {
    console.error(error.message);
    // Correct the error by assigning a valid index
    elementIndex = randomListToGenErr.length - 1;
    console.log(randomListToGenErr[elementIndex]); // Prints the last element
}