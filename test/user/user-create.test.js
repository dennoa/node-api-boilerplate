import test from 'ava'
import request from 'supertest'
import sinon from 'sinon'

import app from '../../lib/app'
import routes from '../../lib/routes'
import logger from '../../lib/utils/logger'
import model from '../../lib/components/user/model'

app.use('/', routes)

let user

test.beforeEach(() => {
  user = { _id: '1' }
  sinon.stub(model, 'create').returns(Promise.resolve(user))
  sinon.stub(model, 'findOne').returns(Promise.resolve())
  sinon.stub(logger, 'error')
})

test.afterEach(() => {
  model.create.restore()
  model.findOne.restore()
  logger.error.restore()
})

function create(data) {
  return request(app)
    .post('/user')
    .set('Accept', 'application/json')
    .send(data)
}

test.serial('should create a user', async t => {
  const data = { username: 'test', firstName: 'Bob', lastName: 'Brown' }
  const res = await create(data)
  t.is(res.statusCode, 200)
  t.deepEqual(res.body, { user })
  t.deepEqual(model.create.firstCall.args[0], data)
})

test.serial('should ensure a unique username', async t => {
  model.findOne.returns(Promise.resolve({ _id: '23' }))
  const data = { username: 'test', firstName: 'Bob', lastName: 'Brown' }
  const res = await create(data)
  t.is(res.statusCode, 400)
  t.deepEqual(model.findOne.firstCall.args[0], { username: data.username })
})

test.serial('should report unexpected errors', async t => {
  model.findOne.throws(new Error())
  const data = { username: 'test', firstName: 'Bob', lastName: 'Brown' }
  const res = await create(data)
  t.is(res.statusCode, 500)
  t.is(logger.error.called, true)
})
