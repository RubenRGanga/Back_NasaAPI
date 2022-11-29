const mongoose = require('mongoose');

//SCHEMA - LANDINGS

const landingsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    nametype: String,
    recclass: String,
    mass: Number,
    fall: String,
    year: String, 
    reclat: Number,
    reclong: Number,
    geolocation: { "latitude": Number, "longitude": Number }

});

//MODELS Y EXPORTAR MODULO

const Landings = mongoose.model('Landings', landingsSchema)

module.exports = Landings