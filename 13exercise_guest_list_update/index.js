var guestList = ["Amjad", "Sir Zia", "Furqan"];
var invitation = "I will be glad if you can join me at dinner tomorrow!";
var endMessage = "Thank you!";
for (var index = 0; index < guestList.length; index++) {
    var element = guestList[index];
    console.log("Salam ".concat(element, ", ").concat(invitation, ". ").concat(endMessage));
    console.log('==============================================================');
}
var inviteRefusedBy = 'Sir Zia';
console.log("**********Unfortunately, ".concat(guestList[1], " can't make it to the dinner."));
guestList[1] = "Ahmed";
console.log('Updated invitations!');
for (var index = 0; index < guestList.length; index++) {
    var element = guestList[index];
    console.log("Salam ".concat(element, ", ").concat(invitation, ". ").concat(endMessage));
    console.log('==============================================================');
}
// console.log(guestList)
