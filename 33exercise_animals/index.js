var animals = ["Cat", "Dog", "Goat"];
var characteristics = ["would make a great pet.", "is used for guard purpose too.", "is a domestic animal!"];
for (var index = 0; index < animals.length; index++) {
    var animal = animals[index];
    var characteristic = characteristics[index];
    console.log("".concat(animal, " ").concat(characteristic));
}
console.log("Any of these animals would make a great pet!");
