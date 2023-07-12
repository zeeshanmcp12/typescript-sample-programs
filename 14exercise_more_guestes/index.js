var guestList = ["Amjad", "Sir Zia", "Furqan"];
var invitation = "I will be glad if you can join me at dinner tomorrow!";
var endMessage = "Thank you!";
for (var index = 0; index < guestList.length; index++) {
    var element = guestList[index];
    console.log("Salam ".concat(element, ", ").concat(invitation, ". ").concat(endMessage));
    console.log('==============================================================');
}
console.log("\n**********Unfortunately, ".concat(guestList[1], " can't make it to the dinner."));
guestList[1] = "Ahmed";
console.log("Updated invitations! will be sent out to ".concat(guestList, "\n"));
for (var index = 0; index < guestList.length; index++) {
    var element = guestList[index];
    console.log("Salam ".concat(element, ", ").concat(invitation, ". ").concat(endMessage));
    console.log('==============================================================');
}
console.log('\n==============================================================');
console.log("******* Good News! We've got some more friends *******");
console.log('==============================================================');
// Append element to the beginning of an array
guestList.unshift("Sarim");
// Insert element in the middle of an array
guestList.splice(2, 0, "Abdullah");
// Push element at the end of an array
guestList.push('Masam');
console.log("Updated invitations! will be sent out to ".concat(guestList, "\n"));
for (var index = 0; index < guestList.length; index++) {
    var element = guestList[index];
    console.log("Salam ".concat(element, ", ").concat(invitation, ". ").concat(endMessage));
    console.log('==============================================================');
}
