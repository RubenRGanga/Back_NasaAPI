//REQUERIR MODULOS Y APPS
const landings = require('./routes/landings');
const neas = require('./routes/neas');
const express = require('express');

const app = express();

require('./db')()

app.use(express.json());

app.use('/landings', landings) //revisar!
app.use('/neas', neas) //revisar!

//PING

app.get('/ping', (req, res) => {
    res.send('¡PONG!')
})

//PUERTO DE ESCUCHA

const port = process.env.PORT || 3000

app.listen(port, () => 
console.log(`SERVIDOR CONECTADO EN: http://localhost:${port}`))