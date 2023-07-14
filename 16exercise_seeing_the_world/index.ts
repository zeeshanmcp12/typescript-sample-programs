const bestPlacesToVisit = ["Masjid-ul-Haram", "Masjid-Al-Nabavi", "Europe", "Kashmir", "Turkiye", "Australia"]

console.log(bestPlacesToVisit)

const placesInSortedForm = [...bestPlacesToVisit].sort();

// console.log(`Original Array ${bestPlacesToVisit}`)
console.log(`Sorted Array ${placesInSortedForm}\n`)

const placesInReverseAplhaOrder = [...bestPlacesToVisit].reverse()

console.log(`Original Array ${bestPlacesToVisit}\n`)
console.log(`Array in reverse alphabetical order ${placesInReverseAplhaOrder}\n`)
console.log(`Original Array ${bestPlacesToVisit}\n`)

console.log(' ============= Reverse and Order Change Operations ============= \n')

console.log('::: Reverse')
bestPlacesToVisit.reverse()
console.log(bestPlacesToVisit)

console.log('\n::: Reverse Again')
bestPlacesToVisit.reverse()
console.log(bestPlacesToVisit)

console.log('\n::: Sorted Array')
bestPlacesToVisit.sort()
console.log(bestPlacesToVisit)

console.log('\n::: Sorted in Reverse Alphabetical Order')
bestPlacesToVisit.reverse()
console.log(bestPlacesToVisit)