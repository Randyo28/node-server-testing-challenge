const router = require('express').Router()
const Users = require('./user-model')

router.get('/', (req, res) => {
  res.json('Get users here')
})

module.exports = router
