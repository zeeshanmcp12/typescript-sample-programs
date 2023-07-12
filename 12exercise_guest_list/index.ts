const guestList = ["Amjad", "Sir Zia", "Furqan"]
const greetings = "Hope this message finds you well"
const invitation = "I will be glad if you can join me at dinner tomorrow!"
const endMessage = "Thank you!"

for (let index = 0; index < guestList.length; index++) {
    const element = guestList[index];

    console.log(`Salam ${element}, ${greetings}.\n${invitation}\n${endMessage}`)
    console.log('==============================================================')
}