function createCar(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
        var feature = features_1[_a];
        car[feature[0]] = feature[1];
    }
    return car;
}
// Call the function with the required information and two other name-value pairs
var car = createCar('Toyota', 'Corolla', ['color', 'blue'], ['optionalFeature', 'Sunroof']);
// Print the object that's returned
console.log(car);
