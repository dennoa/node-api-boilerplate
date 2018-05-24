import test from 'ava'
import request from 'supertest'
import sinon from 'sinon'

import app from '../../../app'
import model from '../model'
import api from './index'

app.use('/user', api)

let user

test.beforeEach(() => {
  user = {
    _id: '1',
  }
  sinon.stub(model, 'create').returns(Promise.resolve(user))
  sinon.stub(model, 'findOne').returns(Promise.resolve())
})

test.afterEach(() => {
  model.create.restore()
  model.findOne.restore()
})

function create(data) {
  return request(app)
    .post('/user')
    .set('Accept', 'application/json')
    .send(data)
}

test.serial('should create a user', async (t) => {
  const data = { username: 'test', firstName: 'Bob', lastName: 'Brown' }
  const res = await create(data)
  t.is(res.statusCode, 200)
  t.deepEqual(res.body, { user })
  t.deepEqual(model.create.firstCall.args[0], data)
})

test.serial('should ensure a unique username', async (t) => {
  model.findOne.returns(Promise.resolve({ _id: '23' }))
  const data = { username: 'test', firstName: 'Bob', lastName: 'Brown' }
  const res = await create(data)
  t.is(res.statusCode, 400)
  t.deepEqual(model.findOne.firstCall.args[0], { username: data.username })
})
