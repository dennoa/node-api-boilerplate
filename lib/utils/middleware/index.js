import jsonwebtoken from 'jsonwebtoken'

export function identifyUser(req, res, next) {
  const values = (req.get('Authorization') || '').split(' ')
  if (values.length === 2 && values[0].toLowerCase() === 'bearer') {
    return jsonwebtoken.verify(values[1], process.env.JWT_SECRET, (err, userInfo) => {
      if (err) {
        return res.status(401).send()
      }
      res.locals.userInfo = userInfo
      return next()
    })
  }
  return next()
}

export function requireIdentifiedUser(req, res, next) {
  if (res.locals.userInfo) {
    return next()
  }
  return res.status(401).send()
}
