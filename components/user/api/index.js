import { Router } from 'express'

import handle from '../../../utils/handle-error'
import model from '../model'
import schema from '../schema'

async function get(req, res) {
  const user = await model.findOne(req.params)
  return user ? res.status(200).send({ user }) : res.status(404).send()
}

async function create(req, res) {
  await schema.userCreate.validate(req.body)
  const user = await model.create(req.body)
  return res.status(200).send({ user })
}

const api = Router()
api.get('/:username', handle(get))
api.post('/', handle(create))

export default api
