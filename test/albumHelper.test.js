const assert = require('assert');
const albumHelper = require('../src/helper/albumHelper');

describe("Retrieve Album function Test", () => {
    it('should return a list of album', () => {
        let albums = albumHelper.getAlbums();
        assert.equal(albums.length > 0, true);
    });
    it('should return a list of album by a specifc artiste', () => {
        let albums = albumHelper.getAlbumsByArtiste("Christopher Larkin");
        assert.equal(albums.length > 0, true);
    });
    it('should return the uri of a specific album', () => {
        let uri = albumHelper.getUriFromAlbum("Celeste Original Soundtrack");
        let result = "https://radicaldreamland.bandcamp.com/album/celeste-original-soundtrack";
        assert.equal(uri, result);
    });
});