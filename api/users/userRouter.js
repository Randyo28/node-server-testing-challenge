const router = require('express').Router()
const Users = require('./user-model')

router.get('/', (req, res, next) => {
  Users.findAll()
    .then((all) => {
      res.json(all)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const newUser = req.body

  Users.add(newUser)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params

  Users.remove(id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

module.exports = router
