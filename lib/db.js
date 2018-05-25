import mongoose from 'mongoose'
import bluebird from 'bluebird'

import logger from './utils/logger'

function handleError(err) {
  logger.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
}

function connect(uri) {
  return mongoose.connect(uri)
}

mongoose.Promise = bluebird
mongoose.connection.on('error', handleError)

export default {
  connect
}
