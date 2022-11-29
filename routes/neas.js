const Neas = require('../models/neas')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    
    const neas = await Neas.find({})  

    res.send(neas)
})

module.exports = router