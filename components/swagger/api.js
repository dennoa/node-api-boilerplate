import { Router } from 'express'

import doc from './doc'

const api = Router()
api.get('/', (req, res) => res.status(200).send(doc))

export default api
