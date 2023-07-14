console.log(" ---------- Returns True ----------\n")
let myName = "Zeeshan"
console.log(`Statement: myName = 'Zeeshan'? | Predict: True | Result: ${myName == 'Zeeshan'}`)

console.log(" ==================== \n")

let nicEligibilityAge = 18
console.log(`Statement: nicEligibilityAge = 18? | Predict: True | Result: ${nicEligibilityAge > 17}`)

console.log(" ==================== \n")

nicEligibilityAge = 18
console.log(`Statement: if type of nicEligibilityAge variable is 'number'. | Predict: True | Result: ${typeof(nicEligibilityAge) == 'number'}`)

console.log(" ==================== \n")

let numbers = [1,2,3,4,5]
console.log(numbers)
console.log(numbers.indexOf(5))
console.log(`Statement: Index of element 5 is 4 in array? | Predict: True | Result: ${numbers[3] == numbers.indexOf(5)}`)

console.log(" ==================== \n")

myName = "Zeeshan"
console.log(myName)
console.log(`Statement: If a string is empty? | Predict: True | Result: ${myName.length != 0}`)

console.log(" ==================== \n")

console.log(" ---------- Returns False ----------\n")

console.log(numbers)
console.log(`Statement: If an array is empty | Predict: False | Result: ${numbers.length == 0}`)

console.log(" ==================== \n")

let onlyNumbers = '2'
console.log(onlyNumbers)
console.log(`Type of onlyNumbers variable is ${typeof(onlyNumbers)}`)
console.log(`Statement: If a number is an integer | Predict: False | Result: ${typeof(onlyNumbers) == 'number'}`)

console.log(" ==================== \n")

let numberInString = '2'
let numberInInteger = 2
console.log(`Value of numberInString var is ${numberInString} and type of var is ${typeof(numberInString)}`)
console.log(`Value of numberInInteger var is ${numberInInteger} and type of var is ${typeof(numberInInteger)}`)

console.log(`Statement: If both variables are of the same type | Predict: False | Result: ${typeof(numberInString) == typeof(numberInInteger)}`)

console.log(" ==================== \n")

let car = 'Honda Civic'
console.log(car)
console.log(`Statement: If a Car is Land Cruiser | Predict: False | Result: ${car == "Land Cruiser"}`)

console.log(" ==================== \n")

let typescriptFact = 'Typescript provides type safety'
console.log(`Statement: If 'Typescript' does not provide 'Type Safety' | Predict: False | Result: ${!typescriptFact}`)