const albumSch = require('../mongoModel/albumSchema');


module.exports.getAlbums = async function() {
    let albums = await albumSch.find()
    return albums.map(a => a.album);
}

module.exports.getArtistes = async function() {
    let albums = await albumSch.find()
    return Array.from(new Set(albums.map(a => a.artiste)));
}

module.exports.getAlbumsByArtiste = async function(name) {
    let albums = await albumSch.find({artiste:name})
    return albums.map(a => a.album);
}

module.exports.getUrlByAlbum = async function(name) {
    let uri = await albumSch.findOne({album: name});
    return uri.url;
}

module.exports.saveAlbum = function() {
    albumSch.insertMany(listAlbums);
}

module.exports.saveAlbum = function(album) {
    albumSch.insertMany(album);
}