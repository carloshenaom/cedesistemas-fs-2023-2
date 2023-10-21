const userService = require('./user.service')

const login = (req, res) => {
  try{
    const {email, password} = req.body
    const response= userService.login(email,password)
    res.status(200).json(response)
  } catch (error){
    res.status(error.status).json(error.response)
  }
}

const signup = (req, res) => {
  try {
    const userData = req.body
    const response = userService.create(userData)
    res.status(200).json(response)

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  login,
  signup
}

