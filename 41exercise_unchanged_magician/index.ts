let magician = ["Magician One","Magician Two","Magician Three",]

function show_magicians(magician){
    console.log(magician)
}

function make_great(magician){
    let newMagicianArray = [...magician]
    for (let index = 0; index < newMagicianArray.length; index++) {
        newMagicianArray[index] = "The Great " + newMagicianArray[index]
    }
    return newMagicianArray
}

let unchangedMagician = make_great(magician)

show_magicians(magician)

show_magicians(unchangedMagician)