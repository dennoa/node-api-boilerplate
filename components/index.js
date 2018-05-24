import { Router } from 'express'

import user from './user/api'
import swagger from './swagger/api'

const api = Router()

// Add your endpoints here.
api.use('/user', user)
api.use('/swagger', swagger)

// Basic view engine on root.
api.get('/', (req, res) => res.render('index', { data: { version: process.env.npm_package_version } }))

export default api
