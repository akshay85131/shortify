const express = require('express')
let { newUrl, getUrl } = require('./controler')
const router = express.Router()
router.route('/shorten')
  .post(newUrl)

router.route('/:id')
  .get(getUrl)

module.exports = router
