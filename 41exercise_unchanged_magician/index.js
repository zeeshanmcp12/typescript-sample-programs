var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Magician One", "Magician Two", "Magician Three",];
function show_magicians(magician) {
    console.log(magician);
}
function make_great(magician) {
    var newMagicianArray = __spreadArray([], magician, true);
    for (var index = 0; index < newMagicianArray.length; index++) {
        newMagicianArray[index] = "The Great " + newMagicianArray[index];
    }
    return newMagicianArray;
}
var unchangedMagician = make_great(magician);
show_magicians(magician);
show_magicians(unchangedMagician);
