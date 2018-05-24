import merge from 'deepmerge'
import swaggerHelper from 'swagger-doc-helper'

import schema from '../schema'

const tag = 'user'

const userCreate = schema.userCreate.definition

const userModel = merge(userCreate, {
  properties: {
    created: { type: 'string', format: 'date-time', description: 'The date / time the user was created' },
  },
})

export default {
  tags: [{ name: tag, description: tag }],
  paths: {
    '/user': {
      post: swaggerHelper.getOperation({
        tag,
        summary: 'Create a new user',
        reqBody: 'userCreate',
        resBody: 'userModel',
        no404: true,
      }),
    },
    '/user/{username}': {
      get: swaggerHelper.getOperation({
        tag,
        summary: 'Get a user by username',
        param: 'username',
        resBody: 'userModel',
      }),
    },
  },
  definitions: {
    userCreate,
    userModel,
  },
  parameters: {
    username: {
      name: 'username',
      in: 'path',
      description: 'Identifies the user by username',
      type: 'string',
      required: true,
    },
  },
}
