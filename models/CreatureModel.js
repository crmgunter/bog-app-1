const mongoose = require('mongoose')
const schemas = require('../db/schema')

const Creature = mongoose.model('Creature', schemas.CreatureSchema)

module.exports = Creature