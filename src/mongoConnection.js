const mongoose = require('mongoose');

module.exports.connect = async function() {
    const mongoDB = 'mongodb+srv://vawi:vawi93228@cluster0-kl71r.mongodb.net/chillscrap?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, {useNewUrlParser : true, useUnifiedTopology : true})
            .then(() => console.log('Connection to mongo db success !'))
            .catch(() => console.log('Connection to mongo db fail !'));
}