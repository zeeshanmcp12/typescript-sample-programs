const guestList = ["Amjad", "Sir Zia", "Furqan"]
const invitation = "I will be glad if you can join me at dinner tomorrow!"
const endMessage = "Thank you!"

for (let index = 0; index < guestList.length; index++) {
    const element = guestList[index];

    console.log(`Salam ${element}, ${invitation}. ${endMessage}`)
    console.log('==============================================================')
}

let inviteRefusedBy = 'Sir Zia'

console.log(`**********Unfortunately, ${guestList[1]} can't make it to the dinner.`)

guestList[1] = "Ahmed"
console.log('Updated invitations!')
for (let index = 0; index < guestList.length; index++) {
    const element = guestList[index];

    console.log(`Salam ${element}, ${invitation}. ${endMessage}`)
    console.log('==============================================================')
}
// console.log(guestList)
