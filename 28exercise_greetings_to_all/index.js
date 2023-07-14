var usernames = ["admin", "abdullah", "ahmed", "arsalan", "amin"];
var greetingToAdmin = "Hello admin, would you like to see a status report?";
var genericGreeting = "thank you for logging in again.";
for (var index = 0; index < usernames.length; index++) {
    var element = usernames[index];
    if (element == "admin") {
        console.log(greetingToAdmin);
    }
    else {
        console.log("Hello ".concat(element, ", ").concat(genericGreeting));
    }
}
