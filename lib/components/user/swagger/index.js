import merge from 'deepmerge'
import swaggerHelper from 'swagger-doc-helper'

import commonSchema from '../../../utils/schema'
import schema from '../schema'

const tag = 'user'
const userCreateRequest = schema.create.definition
const userFindParameters = schema.find.definition.properties

export default {
  tags: [{ name: tag, description: tag }],
  paths: {
    '/user': {
      get: swaggerHelper.getOperation({
        tag,
        summary: 'Search for users',
        param: Object.keys(userFindParameters).concat(commonSchema.pagingParameters),
        resBody: 'usersResponse',
      }),
      post: swaggerHelper.getOperation({
        tag,
        summary: 'Create a new user',
        reqBody: 'userCreateRequest',
        resBody: 'userResponse',
        no404: true,
      }),
    },
    '/user/{_id}': {
      get: swaggerHelper.getOperation({
        tag,
        summary: 'Get a user by id',
        param: '_id',
        resBody: 'userResponse',
      }),
    },
  },
  definitions: {
    userCreateRequest,
    userModel: merge(userCreateRequest, {
      properties: {
        _id: { type: 'string', description: 'Uniquely identifies the user' },
        created: { type: 'string', format: 'date-time', description: 'The date / time the user was created' },
      },
    }),
    userResponse: {
      type: 'object',
      properties: {
        user: { $ref: '#/definitions/userModel' },
      },
    },
    usersResponse: {
      type: 'object',
      properties: {
        users: {
          type: 'array',
          items: { $ref: '#/definitions/userModel' },
        },
      },
    },
  },
  parameters: merge(userFindParameters, {
    username: { name: 'username', in: 'query' },
    firstName: { name: 'firstName', in: 'query' },
    lastName: { name: 'lastName', in: 'query' },
  }),
}
