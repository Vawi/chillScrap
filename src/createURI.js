// Create uri by season and year

const baseUrl = 'https://chillhop.bandcamp.com/album/chillhop-essentials-';
const saisonArr = ["winter", "spring", "summer", "fall"]

module.exports.createURI = function (saison, year) {

    if(!saisonArr.includes(saison)) {
        saison = "summer"
    }

    return baseUrl + saison + "-" + year;
}