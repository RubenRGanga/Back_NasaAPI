const Neas = require('../models/neas')
const express = require('express')
const router = express.Router()

//1_GET_OBTENER DESIGNACIÓN Y PERIODO ANUAL EN BASE A LA CLASE ORBITAL DEL ASTEROIDE.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/neas?class=amor

router.get('/', async (req, res) => {
    console.log(req.query)
    const neas = await Neas.find({$toLower: {orbit_class: `${req.query.class}`}}).select('designation period_yr')
    res.send(neas)
})

//2_GET_OBTENER DESIGNACIÓN, FECHA Y PERIODO ANUAL DE TODOS LOS ASTEROIDES QUE CUMPLAN CON UNA FECHA DADA.
//Ruta de ejemplo: http://localhost:3000/api/astronomy/neas?from=1985&to=2022

router.get('/', async (req,res) => {
    if (req.query.from && req.query.to){
        const result = await Neas.find({year:{$gt: req.query.from, $lt: req.query.to}}).select('designation discovery_date period_yr')
        res.send(result)
    }
})

//3_POST_CREAR UN NUEVO NEA EN LA BD.

router.post('/create', async (req,res) => {
    const neas = new Neas(req.body)
    await neas.save()
    res.send('Nuevo NEA añadido a la base de datos.')
})

//4_PUT_ACTUALIZAR NEA EN LA BASE DE DATOS, SELECCIONAR POR "DESIGNATION".

router.put('/edit/:designation', async (req, res) => {
    const result = await Neas.findOneAndUpdate({designation: req.params.designation}, req.body)
    res.send('Nea modificado en la base de datos.')
})

//5_DELETE_ELIMINAR NEA EN LA BASE DE DATOS, SELECCIONAR POR "DESIGNATION".

router.delete('/delete/:designation', async (req, res) => {
    const result = await Neas.findOneAndDelete({designation: req.params.designation})
    res.send('Eliminado')
})


module.exports = router