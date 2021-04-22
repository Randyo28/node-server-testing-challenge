const db = require('../../data/dbConfig')

const find = () => {
  return db('users')
}

module.exports = {
  find,
}
