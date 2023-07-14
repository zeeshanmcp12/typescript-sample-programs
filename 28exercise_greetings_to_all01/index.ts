const usernames = ["admin","abdullah","ahmed","arsalan","amin"]

const greetingToAdmin = "Hello admin, would you like to see a status report?"
const genericGreeting = "thank you for logging in again."

for (let index = 0; index < usernames.length; index++) {
    const element = usernames[index];

    if (element == "admin") {
        console.log(greetingToAdmin)
    } else {
        console.log(`Hello ${element}, ${genericGreeting}`)
    }   
}