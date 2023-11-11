const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const errorHandler = require("../../utils/errorHandler")
const { USER_PASS_WRONG, USER_ALREADY_EXIST, SERVER_ERROR } = require("./utils/users.dict.errors")
const User = require('./models/user.models')


const login = async (email, password) => {
  try {
    console.log(email, password)
    const user = await User.findOne({ email })

    if(user && await bcrypt.compare(password, user.password)){

      const payload = {
        idUser: user._id
      }
      const secrteKey = 'aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccccccc'
      const token = await jwt.sign(payload, secrteKey)
      return {
        token
      }
    }
    throw errorHandler(USER_PASS_WRONG)
  } catch (error) {

    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

const create = async(userData) => {
  try {

    //crear hash de password
    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash

    const validateEmail = await User.findOne({ email: userData.email })
    if (validateEmail) {
      throw errorHandler(USER_ALREADY_EXIST)
    }

    const user = User(userData)
    await user.save()

    return {
      user
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

const info = async(idUser) => {
  try {

    const user = await User.findById(idUser)
    return user

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}
module.exports = {
  login,
  create,
  info
}
