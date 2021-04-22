const express = require('express')
const usersRouter = require('./users/userRouter')
const server = express()

server.use(express.json())

server.use('/api/users', usersRouter)

server.use('*', (req, res) => {
  res.send('SERVER UP')
})

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
