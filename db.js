const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/nasa_DB')
    .then(() => console.log("Conectado a MongoDB..."))
    .catch(() => console.log("Error al conectar con MongoDB: ", err))
}
