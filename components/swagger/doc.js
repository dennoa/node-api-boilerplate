import merge from 'deepmerge'
import swaggerHelper from 'swagger-doc-helper'

import user from '../user/swagger'

const base = swaggerHelper.getBase({
  title: 'API Starter',
  description: 'Starting point for the api',
})

export default merge(base, user)
