let usernames = ["admin","abdullah","ahmed","arsalan","amin"]

const greetingToAdmin = "Hello admin, would you like to see a status report?"
const genericGreeting = "thank you for logging in again."

if (usernames.length === 0) {
    console.log('We need to find some users!')
} else {
    for (let index = 0; index < usernames.length; index++) {
        const user = usernames[index];
        if (user === "admin") {
            console.log(greetingToAdmin)
        } else {
            console.log(`Hello ${user}, ${genericGreeting}`)
        }
    }
}

console.log("Removing all users from the array...");
usernames = []

if (usernames.length === 0) {
    console.log('We need to find some users!')
} else {
    for (let index = 0; index < usernames.length; index++) {
        const user = usernames[index];
        if (user === "admin") {
            console.log(greetingToAdmin)
        } else {
            console.log(`Hello ${user}, ${genericGreeting}`)
        }
    }
}



