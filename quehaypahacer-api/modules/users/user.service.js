const errorHandler = require("../../utils/errorHandler")
const { USER_PASS_WRONG, USER_ALREADY_EXIST, SERVER_ERROR } = require("./utils/users.dict.errors")
const User = require('./models/user.models')


const login = (email, password) => {
  if (email === "juan@gmail.com" && password === "123456") {
    return {
      token: 'aaaaaaabbbbbbbbbbbbbcccccccccccc'
    }
  }
  throw errorHandler(USER_PASS_WRONG, { fields: "email"})
}

const create = async(userData) => {
  try {
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

module.exports = {
  login,
  create
}
