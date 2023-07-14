var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var bestPlacesToVisit = ["Masjid-ul-Haram", "Masjid-Al-Nabavi", "Europe", "Kashmir", "Turkiye", "Australia"];
console.log(bestPlacesToVisit);
var placesInSortedForm = __spreadArray([], bestPlacesToVisit, true).sort();
// console.log(`Original Array ${bestPlacesToVisit}`)
console.log("Sorted Array ".concat(placesInSortedForm, "\n"));
var placesInReverseAplhaOrder = __spreadArray([], bestPlacesToVisit, true).reverse();
console.log("Original Array ".concat(bestPlacesToVisit, "\n"));
console.log("Array in reverse alphabetical order ".concat(placesInReverseAplhaOrder, "\n"));
console.log("Original Array ".concat(bestPlacesToVisit, "\n"));
console.log(' ============= Reverse and Order Change Operations ============= \n');
console.log('::: Reverse');
bestPlacesToVisit.reverse();
console.log(bestPlacesToVisit);
console.log('\n::: Reverse Again');
bestPlacesToVisit.reverse();
console.log(bestPlacesToVisit);
console.log('\n::: Sorted Array');
bestPlacesToVisit.sort();
console.log(bestPlacesToVisit);
console.log('\n::: Sorted in Reverse Alphabetical Order');
bestPlacesToVisit.reverse();
console.log(bestPlacesToVisit);
