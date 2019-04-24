const shortid = require('shortid')
const client = require('./redis')
let newUrl = (req, res) => {
  const url = req.body.url
  let id = shortid.generate()
  if (!url) {
    res.status(400).send({ message: 'URl not valid' })
  }
  client.set(id, url, (err, result) => {
    if (!err) {
      res.status(200).send({ id })
    } else {
      res.status(500).send({ message: err })
    }
  })
}

let getUrl = (req, res) => {
  const { id } = req.params
  if (id) {
    client.get(id, (err, url) => {
      if (!err && url) {
        return res.redirect(url)
      } else {
        return res.status(400).send({ message: 'No url found for id' })
      }
    })
  } else {
    return res.status(400).send({ message: 'No id provided' })
  }
}
module.exports = { newUrl, getUrl }
