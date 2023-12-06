const bookingService = require('./booking.service')

const create = async (req, res) => {
  try {
    const bookingData = req.body
    const response = await bookingService.create(bookingData)
    res.status(200).json(response)
  } catch (error) {
    console.log("ERROR CATCH: ", error)
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  create
}
