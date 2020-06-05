const assert = require('assert');
const uriHelp = require('../src/createURI');

describe('Create URI Test', () => {
    it('should return an uri correctly format for winter and 2019', () => {
            let uri = uriHelp.createURI("winter", 2019, false);
            let result = "https://chillhop.bandcamp.com/album/chillhop-essentials-winter-2019";
            assert.equal(uri, result);
    });
    it('should result a uri with the default param for year and saison', () => {
            let uri = uriHelp.createURI("toto", 1564589, false);
            let result = "https://chillhop.bandcamp.com/album/chillhop-essentials-summer-2019";
            assert.equal(uri, result);
    });
    it('should result the default uri for bandcamp', () => {
        let uri = uriHelp.createURI(undefined, undefined, true);
        let result = "https://bandcamp.com/";
        assert.equal(uri, result);
    });
});