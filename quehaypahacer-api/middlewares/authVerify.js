const jwt = require('jsonwebtoken')

const authVerify = (req, res, next) => {

  if(req.headers.authorization && req.headers.authorization.split(" ")[0] === 'Bearer'){
    const token = req.headers.authorization.split(" ")[1]
    try {
      const decode = jwt.verify(token, 'aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccccccc')
      req.payload = decode
    } catch (error) {
      return res.status(401).send('unauthorization - invalid token')
    }
  }else{
    return res.status(401).send('unauthorization')
  }
  next()
}

module.exports = authVerify
