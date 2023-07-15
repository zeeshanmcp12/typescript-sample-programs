function createCar(manufacturer, model, ...features) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let feature of features) {
        car[feature[0]] = feature[1];
    }
    return car;
}

// Call the function with the required information and two other name-value pairs
let car = createCar('Toyota', 'Corolla', ['color', 'blue'], ['optionalFeature', 'Sunroof']);

// Print the object that's returned
console.log(car);