let current_users = ["admin","urooj","ahmed","arsalan","aneela"]
let new_users = ["admin","asif","amin","amaan","ANEELA"]

currentUsers = currentUsers.map(user => user.toLowerCase());

for (let index = 0; index < new_users.length; index++) {

    if (current_users.includes(new_users[index].toLowerCase())) {
        console.log(`Username ${new_users[index]} has already been used.`)
        
    }else {
        console.log(`Username ${new_users[index]} is available.`)
    }   
}