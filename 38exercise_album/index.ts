function makeAlbum(artist_name, album_title, number_of_tracks = 'Not Provided'){

    let album = {
        name: artist_name,
        title: album_title,
        numOfTracks: number_of_tracks
    }

    return album

}

const albumOne = makeAlbum('Abdullah','Hello')
console.log(albumOne)
const albumTwo = makeAlbum('Amine','Hi', "Unknown")
console.log(albumTwo)

const albumThree = makeAlbum('Anam','How are you')
console.log(albumThree)
