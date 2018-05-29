import db from './db'
import app from './app'
import config from './config'
import routes from './routes'
import logger from './utils/logger'
import './event-listeners'

db.connect()

app.use('/', routes)
app.listen(config.port, () => logger.info(`Listening on port ${config.port}`))
