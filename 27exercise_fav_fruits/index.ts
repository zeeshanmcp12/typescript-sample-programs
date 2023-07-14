let favorite_fruits = ['Apple','Peach','Banana']

// console.log(favorite_fruits)

if (favorite_fruits[0] == 'Apple') {
    console.log('"Apple" is my favorite fruit!')
}

if (favorite_fruits[1] == 'Peach') {
    console.log('Drink "Peach" juice daily.')
}

if (favorite_fruits[2] == 'Banana') {
    console.log('Include "Banana" in your protein shake')
}

if (favorite_fruits[3] == 'Mango') {
    console.log('Fruit does not exist in the list')
}

if (favorite_fruits[4] == 'Strawberry') {
    console.log('Fruit does not exist in the list')
}

// favorite_fruits.includes('Mango')

// NOTE: Array.includes() returns following error:
/* index.ts:17:17 - error TS2550: Property 'includes' does not exist on type 'string[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2016' or later.

17 favorite_fruits.includes('Mango')
                    ~~~~~~~~
Found 1 error in index.ts:17

*/