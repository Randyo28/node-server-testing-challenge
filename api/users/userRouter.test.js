const request = require('supertest')
const db = require('../../data/dbConfig')
const route = require('./userRouter')

const user1 = { user_name: 'user1', user_age: 18 }
const user2 = { user_name: 'user2', user_age: 20 }

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('users').truncate()
})
afterAll(async () => {
  await db.destroy()
})

describe('server', () => {
  describe('[GET] /', () => {
    it('responds with 200 ok', async () => {
      const res = await request(route).get('/hobbits')
      expect(res.status).toBe(200)
    })
  })
})
