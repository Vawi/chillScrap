const albumSch = require('../mongoModel/albumSchema');


module.exports.getAlbumsByMongo = function() {
    albumSch.find()
        .then(albums => res.status(200).json(albums))
        .catch(error => res.status(400).json({ error }));
}

module.exports.saveAlbum = function() {
    albumSch.insertMany(listAlbums);
}

module.exports.saveAlbum = function(album) {
    albumSch.insertMany(album);
}