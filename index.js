import db from './db'
import app from './app'
import components from './components'
import logger from './utils/logger'

db.connect(process.env.MONGODB_URI)

app.use('/', components)
app.listen(process.env.PORT, () => logger.info(`Listening on port ${process.env.PORT}`))
