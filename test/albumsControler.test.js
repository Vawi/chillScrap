const assert = require('assert');
const albumsControler = require('../src/controler/albumsControler');


describe("Retrieve Album function with mongodb Test", () => {
    it('should return the url of a specific album', () => {
        let uri = albumsControler.getUrlByAlbum("Hollow Knight Piano Collections");
        uri.then(u => {
            assert.equal(u, "https://bandcamp.materiacollective.com/album/hollow-knight-piano-collections");
        });
    });
});