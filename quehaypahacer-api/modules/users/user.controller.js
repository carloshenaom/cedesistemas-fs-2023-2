const userService = require('./user.service')

const login = async (req, res) => {
  try{
    const {email, password} = req.body
    const response = await userService.login(email,password)
    res.status(200).json(response)
  } catch (error){
    res.status(error.status).json(error.response)
  }
}

const signup = async (req, res) => {
  try {
    const userData = req.body
    const response = await userService.create(userData)
    res.status(200).json(response)

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const info = async (req, res) => {
  try {
    const { idUser } = req.payload

    const response = await userService.info(idUser)

    res.status(200).json(response)

  } catch (error) {
    console.log(error)
    res.status(error.status).json(error.response)
  }
}


module.exports = {
  login,
  signup,
  info
}

