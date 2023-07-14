var usernames = ["admin", "abdullah", "ahmed", "arsalan", "amin"];
var greetingToAdmin = "Hello admin, would you like to see a status report?";
var genericGreeting = "thank you for logging in again.";
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var index = 0; index < usernames.length; index++) {
        var user = usernames[index];
        if (user === "admin") {
            console.log(greetingToAdmin);
        }
        else {
            console.log("Hello ".concat(user, ", ").concat(genericGreeting));
        }
    }
}
usernames = [];
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (var index = 0; index < usernames.length; index++) {
        var user = usernames[index];
        if (user === "admin") {
            console.log(greetingToAdmin);
        }
        else {
            console.log("Hello ".concat(user, ", ").concat(genericGreeting));
        }
    }
}
