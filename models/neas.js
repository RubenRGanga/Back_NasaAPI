const mongoose = require('mongoose');

//SCHEMA - NEAS

const neasSchema = new mongoose.Schema({
    designation: String,
    discovery_date: Date,
    h_mag: String,
    moid_au: Number,
    q_au_1: Number,
    q_au_2: Number,
    period_yr: Number,
    i_deg: Number,
    pha: String,
    orbit_class: String

});

//MODELS Y EXPORTAR MODULO

const Neas = mongoose.model('Neas', neasSchema)

module.exports = Neas