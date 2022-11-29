const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => console.log("Conectado a MongoDB..."))
    .catch(() => console.log("Erro al conectar con MongoDB: ", err))
}
