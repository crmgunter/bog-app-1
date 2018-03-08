const express = require('express')
const router = express.Router()
const Creature = require('../models/CreatureModel')


router.get('/', (req, res) => {
    res.send('hey from creatures')
})

module.exports = router