import { Router } from 'express'

import info from '../package.json'
import user from './components/user/api'
import swagger from './swagger'

const routes = Router()

// API routes
routes.use('/user', user)

// Combined swagger docs
routes.use('/swagger', (req, res) => res.status(200).send(swagger))

// Basic landing page
routes.use('/', (req, res) => res.render('index', { info }))

export default routes
