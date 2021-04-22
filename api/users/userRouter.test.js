const request = require('supertest')
const db = require('../../data/dbConfig')
const server = require('../server')

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
      const res = await request(server).get('/api/users')
      expect(res.status).toBe(200)
    })
    it('responds with all users', async () => {
      let res
      await db('users').insert(user1)
      await db('users').insert(user2)
      res = await request(server).get('/api/users')
      expect(res.body).toHaveLength(2)
    })
  })
  describe('[POST] /', () => {
    it('can insert new User', async () => {
      let res
      res = await request(server).post('/api/users').send(user1)
      expect(res.body).toMatchObject({ user_id: 1, ...user1 })
    })
    it('can insert 2 new Users', async () => {
      let res
      res = await request(server).post('/api/users').send(user1)
      expect(res.body).toMatchObject({ user_id: 1, ...user1 })

      res = await request(server).post('/api/users').send(user2)
      expect(res.body).toMatchObject({ user_id: 2, ...user2 })
      expect(res.body).toBeTruthy()
    })
  })
  describe('[Delete] /:id', () => {
    it('can delete a User', async () => {
      let res

      res = await request(server).delete(`/api/users/${1}`)
      expect(res.status).toBe(200)
    })
    it('can delete a User', async () => {
      let res

      res = await request(server).delete(`/api/users/${1}`)
      expect(res.status).toBe(200)
    })
  })
})
