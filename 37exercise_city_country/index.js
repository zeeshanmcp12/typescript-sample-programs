function cityCountry(city, country) {
    // console.log(`${city} is in ${country}.`);
    return "\"".concat(city, ", ").concat(country, "\"");
}
var resultOne = cityCountry('Karachi', 'Pakistan');
console.log(resultOne);
var resultTwo = cityCountry('Doha', 'Qatar');
console.log(resultTwo);
var resultThree = cityCountry('Makkah', 'Saudi Arabia');
console.log(resultThree);
