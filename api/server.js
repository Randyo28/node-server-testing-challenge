const express = require('express')
const usersRouter = require('./users/userRouter')
const server = express()

server.use(express.json())

server.use('/api/users', usersRouter)

server.use('*', (req, res) => {
  res.send('SERVER UP')
})

module.exports = server
