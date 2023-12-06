const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema (
  {
    idUser: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    idEvent: {
      type: Schema.Types.ObjectId,
      ref: 'events'
    }
  },
  {
    timestamps: true
  }
)

const Booking = mongoose.model('booking', BookingSchema)

module.exports = Booking
