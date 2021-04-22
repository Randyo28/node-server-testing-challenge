const db = require('../../data/dbConfig')

function findAll() {
  return db('users')
}

async function add(user) {
  const [id] = await db('users').insert(user)
  return db('users').where('user_id', id).first()
}
function remove(id) {
  return db('users').where('user_id', id).del()
}

module.exports = {
  findAll,
  add,
  remove,
}
