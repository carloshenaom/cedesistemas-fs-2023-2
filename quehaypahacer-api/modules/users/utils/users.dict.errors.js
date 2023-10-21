const DictErrors= {
  USER_PASS_WRONG : {
    status:401,
    message: "user o password wrong"
  },
  USER_ALREADY_EXIST:{
    status:432,
    message: "user already exist"
  },
  SERVER_ERROR:{
    status: 500,
    message: "server internal error"
  }

}

module.exports = DictErrors

