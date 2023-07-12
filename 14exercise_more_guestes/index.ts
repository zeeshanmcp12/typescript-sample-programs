const guestList = ["Amjad", "Sir Zia", "Furqan"]
const invitation = "I will be glad if you can join me at dinner tomorrow!"
const endMessage = "Thank you!"

for (let index = 0; index < guestList.length; index++) {
    const element = guestList[index];

    console.log(`Salam ${element}, ${invitation}. ${endMessage}`)
    console.log('==============================================================')
}

console.log(`\n**********Unfortunately, ${guestList[1]} can't make it to the dinner.`)

guestList[1] = "Ahmed"
console.log(`Updated invitations! will be sent out to ${guestList}\n`)
for (let index = 0; index < guestList.length; index++) {
    const element = guestList[index];

    console.log(`Salam ${element}, ${invitation}. ${endMessage}`)
    console.log('==============================================================')
}
console.log('\n==============================================================')
console.log("******* Good News! We've got some more friends *******")
console.log('==============================================================')

// Append element to the beginning of an array
guestList.unshift("Sarim")

// Insert element in the middle of an array
guestList.splice(2,0,"Abdullah")

// Push element at the end of an array
guestList.push('Masam')
console.log(`Updated invitations! will be sent out to ${guestList}\n`)
for (let index = 0; index < guestList.length; index++) {
    const element = guestList[index];

    console.log(`Salam ${element}, ${invitation}. ${endMessage}`)
    console.log('==============================================================')
}