const mongoose = require('mongoose');

//SCHEMA - USERS

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: String,
    email: String,
    picture: String,
    affiliatedNumber: {
        type: Number,
        unique: true,
        required: true
    },
    affiliationDate: Date,
    occupation: String,
    birthdate: Date,
    neas_discovered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'neas'
    }]
    
});

//MODELS Y EXPORTAR MODULO

const Users = mongoose.model('Users', usersSchema)

module.exports = Users