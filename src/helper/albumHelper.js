const listAlbums = [
    {
        artiste:"David Peacock, Augustine Mayuga Gonzales",
        album:"Hollow Knight Piano Collections",
        url:"https://bandcamp.materiacollective.com/album/hollow-knight-piano-collections",
    },
    {
        artiste:"David Peacock",
        album:"Disasters for Piano",
        url:"https://music.disasterpeace.com/album/disasters-for-piano",
    },
    {
        artiste:"David Peacock",
        album:"Parallelus",
        url:"https://daviddpeacock.bandcamp.com/album/parallelus",
    },
    {
        artiste:"Mr. YT",
        album:"Brand New Day",
        url:"https://mryt.bandcamp.com/album/brand-new-day",
    },
    {
        artiste:"MAD ABOUT RECORDS",
        album:"Luiz Carlos Vinhas - 'O Som Psicodélico De L. C. V​.'",
        url:"https://madaboutrecordslabel.bandcamp.com/album/luiz-carlos-vinhas-o-som-psicod-lico-de-l-c-v",
    },
    {
        artiste:"Mega Flare",
        album:"Low Tide",
        url:"https://tnywvs.bandcamp.com/album/low-tide",
    },
    {
        artiste:"Lena Raine",
        album:"Celeste Original Soundtrack",
        url:"https://radicaldreamland.bandcamp.com/album/celeste-original-soundtrack",
    },
    {
        artiste:"Christopher Larkin",
        album:"Hollow Knight (Original Soundtrack)",
        url:"https://christopherlarkin.bandcamp.com/album/hollow-knight-original-soundtrack",
    },
]

module.exports.getAlbums = function() {
    return listAlbums.map(a => a.album);
}

module.exports.getAlbumsByArtiste = function(artiste) {
    return listAlbums.filter(a => a.artiste == artiste).map(a => a.album);
}

module.exports.getUriFromAlbum = function(album) {
    return listAlbums.filter(a => a.album == album).map(a => a.url);
}