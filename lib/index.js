import db from './db'
import app from './app'
import routes from './routes'
import logger from './utils/logger'
import './event-listeners'

db.connect(process.env.MONGODB_URI)

app.use('/', routes)
app.listen(process.env.PORT, () => logger.info(`Listening on port ${process.env.PORT}`))
