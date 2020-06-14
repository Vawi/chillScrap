//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  artiste: String,
  album: String,
  url: String
});


var SomeModel = mongoose.model('albumModel', SomeAlbumSchemaModelSchema );