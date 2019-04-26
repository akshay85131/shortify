const express = require('express')
const bodyParser = require('body-parser')
// const id = require('short-id')
const app = express()
const PORT = 3001
const shortifyRoute = require('./route')
const cors = require('cors')
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Content-Security-Policy : default-src *'self';
app.use(express.static('client'))
app.get('/', (req, res) => {
  res.json('hello')
})
app.use('/shortify', shortifyRoute)

app.listen(PORT, () => {
  console.log(`Magic Happening on ${PORT}`)
})
