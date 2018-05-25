import { Router } from 'express'

import handle from '../../../utils/handle-error'
import { create, find, get } from './handlers'

const api = Router()
api.get('/:_id', handle(get))
api.get('/', handle(find))
api.post('/', handle(create))

export default api
