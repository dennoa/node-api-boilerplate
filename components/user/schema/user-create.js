import Ajv from 'ajv'
import merge from 'deepmerge'

import model from '../model'

const definition = {
  type: 'object',
  properties: {
    username: { type: 'string', description: 'The username' },
    firstName: { type: 'string', description: 'The user first name' },
    lastName: { type: 'string', description: 'The user last name' },
  },
}

const ajvDefinition = merge(definition, {
  $async: true,
  required: ['username'],
  properties: {
    username: {
      usernameMustBeUnique: true,
    },
  },
})

const keywords = {
  usernameMustBeUnique: {
    async: true,
    errors: false,
    schema: false,
    validate: username => model.findOne({ username }).then(found => !found),
  },
}

function validate(data) {
  const ajv = new Ajv({ allErrors: true })
  Object.keys(keywords).forEach(keyword => ajv.addKeyword(keyword, keywords[keyword]))
  return ajv.validate(ajvDefinition, data)
}

export default {
  definition,
  validate,
}
