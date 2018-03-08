require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Creature = require('../models/CreatureModel')

const db = mongoose.connection

db.on('open', () => {
    console.log('You have connected to mongoDB!')
})
db.on('error', (err) => {
    console.log(err)
})


const saved = async () => {
    await Creature.remove()
    const frank = new Creature({
        name: "frank",
        description: 'ugly'
    })
    await frank.save()
    console.log(`${frank.name} SAVED!`)
    const steve = new Creature({
        name: 'steve',
        description: 'stupid'
    })
    await steve.save()
    mongoose.connection.close()
}

saved()

// Creature.remove(() => {
//     return Creature.remove()
// }).then(() => {
//     return frank.save()
// }).then(() => {
//     console.log('Saved Successfully!')
//     db.close
// }).catch((err) => {
//     console.log(err)
//     db.close
// })