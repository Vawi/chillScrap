// Create uri by season and year

const defaultBandcamp = "https://bandcamp.com/";
const baseUrl = 'https://chillhop.bandcamp.com/album/chillhop-essentials-';
const saisonArr = ["winter", "spring", "summer", "fall"]

module.exports.createURI = function (saison, year, def) {


    if(def) {
        return defaultBandcamp;
    } else {
        if(!saisonArr.includes(saison)) {
            saison = "summer"
        }
        return baseUrl + saison + "-" + year;
    }
}