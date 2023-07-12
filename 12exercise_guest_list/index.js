var guestList = ["Amjad", "Sir Zia", "Furqan"];
var greetings = "Hope this message finds you well";
var invitation = "I will be glad if you can join me at dinner tomorrow!";
var endMessage = "Thank you!";
for (var index = 0; index < guestList.length; index++) {
    var element = guestList[index];
    console.log("Salam ".concat(element, ", ").concat(greetings, ".\n").concat(invitation, "\n").concat(endMessage));
    console.log('==============================================================');
}
