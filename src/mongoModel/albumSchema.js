//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  artiste: {type: String, required: true},
  album: {type: String, required: true},
  url: {type: String, required: true}
});


module.exports = mongoose.model('albumModel', AlbumSchema );