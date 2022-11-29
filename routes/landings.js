const Landings = require('../models/landings')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    
    const landings = await Landings.find({})  

    res.send(landings)
})

module.exports = router