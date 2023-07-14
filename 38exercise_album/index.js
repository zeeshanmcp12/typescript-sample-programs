function makeAlbum(artist_name, album_title, number_of_tracks) {
    if (number_of_tracks === void 0) { number_of_tracks = 'Not Provided'; }
    var album = {
        name: artist_name,
        title: album_title,
        numOfTracks: number_of_tracks
    };
    return album;
}
var albumOne = makeAlbum('Abdullah', 'Hello');
console.log(albumOne);
var albumTwo = makeAlbum('Amine', 'Hi', "Unknown");
console.log(albumTwo);
var albumThree = makeAlbum('Anam', 'How are you');
console.log(albumThree);
