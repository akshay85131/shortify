const express = require('express')
const bodyParser = require('body-parser')
const id = require('short-id')
const app = express()
const PORT = 3001
const shortifyRoute = require('./router')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Content-Security-Policy : default-src *'self';
app.get('/', (req, res) => {
  res.json('hello')
})
app.use('/shortify', shortifyRoute)

app.listen(PORT, () => {
  console.log(`Magic Happening on ${PORT}`)
})
