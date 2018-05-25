import commonSchema from '../../../utils/schema'
import schema from '../schema'
import model from '../model'

function toFindConditions(query) {
  function toFindCondition(conditions, key) {
    if (typeof query[key] === 'undefined') {
      return conditions
    }
    return { [key]: new RegExp(query[key], 'i'), ...conditions }
  }
  return Object.keys(schema.find.definition.properties).reduce(toFindCondition, {})
}

export async function find(req, res) {
  await schema.find.validate(req.query)
  const users = await model
    .find(toFindConditions(req.query))
    .skip(+req.query.skip)
    .limit(+req.query.limit)
  return res.status(200).send({ users })
}

export async function create(req, res) {
  await schema.create.validate(req.body)
  const user = await model.create(req.body)
  return res.status(200).send({ user })
}

export async function get(req, res) {
  await commonSchema.validateId(req.params)
  const user = await model.findOne(req.params)
  return user ? res.status(200).send({ user }) : res.status(404).send()
}
