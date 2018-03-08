require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection.on('error', (err) => {
    console.log(err)
})

//
db.on('open', () => {
    console.log('Connected to MongoDB... Rock \'n Roll')
})

// MIDDLEWARE
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))

//set up api routes
app.get('/', (req, res) => {
    res.send('Hello, Clarice. It\'s so nice to see you again')
})

const creatureController = require('./controllers/creatureController')
app.use('/api/creatures', creatureController)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Meat sizzlin hot on PORT 3001.')
})