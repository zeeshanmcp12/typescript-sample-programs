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
