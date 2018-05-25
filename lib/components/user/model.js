import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: { type: String, lowercase: true, index: true, unique: true },
  firstName: String,
  lastName: String,
  created: { type: Date, default: Date.now },
})

export default mongoose.model('user', schema)
