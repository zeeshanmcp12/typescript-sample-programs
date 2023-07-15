let magician = ["Magician One","Magician Two","Magician Three",]

function show_magicians(magician){
    console.log(magician)
}

function make_great(magician){
    for (let index = 0; index < magician.length; index++) {
        magician[index] = "The Great " + magician[index]
    }
}

console.log("Before changes: ")
show_magicians(magician)

make_great(magician)

console.log("After changes: ")
show_magicians(magician)