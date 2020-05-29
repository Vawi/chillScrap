// Create uri by season and year

const baseUrl = 'https://chillhop.bandcamp.com/album/chillhop-essentials-';

module.exports.createURI = function (saison, year) {

    // if saison == undefined saison = now 
    // if saison == undefined annee = now 

    return baseUrl + saison + "-" + year;
}