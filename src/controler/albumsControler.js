const albumSch = require('../mongoModel/albumSchema');


module.exports.getAlbumsByMongo = async function() {
    let albums;
    await albumSch.find()
        .then(res => albums = res)
        .catch(error => console.error("Error while retrieving albums from mongo : " + error));

    console.log(albums);
    return albums;
}

module.exports.saveAlbum = function() {
    albumSch.insertMany(listAlbums);
}

module.exports.saveAlbum = function(album) {
    albumSch.insertMany(album);
}

module.exports.getUrlByAlbum = async function(name) {
    return await albumSch.findOne({ album: name })
}