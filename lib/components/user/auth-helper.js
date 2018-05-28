import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

export const isMatchingPassword = (user, password) => bcrypt.compare(password, user.passwordHash)

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(+process.env.PASSWORD_ROUNDS)
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return reject(err)
      }
      return resolve(hash)
    })
  })
}

export const getRandomPassword = () => uuidv4()

export function toJwt(user) {
  const { _id, username, email, firstName, lastName } = user
  return jsonwebtoken.sign({ _id, username, email, firstName, lastName }, process.env.JWT_SECRET, { expiresIn: '12h' })
}
