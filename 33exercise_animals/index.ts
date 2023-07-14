let animals = ["Cat","Dog","Goat"]
let characteristics = ["would make a great pet.", "is used for guard purpose too.", "is a domestic animal!"];


for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    const characteristic = characteristics[index]
    console.log(`${animal} ${characteristic}`)
}

console.log(`Any of these animals would make a great pet!`)
