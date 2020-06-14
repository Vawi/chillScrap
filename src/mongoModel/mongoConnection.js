const mongoose = require('mongoose');


const mongoDB = 'mongodb+srv://vawi:vawi93228@cluster0-kl71r.mongodb.net/chillscrap?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser : true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));