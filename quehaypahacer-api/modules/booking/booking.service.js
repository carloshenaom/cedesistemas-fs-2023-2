const errorHandler = require("../../utils/errorHandler")
const { SERVER_ERROR } = require("./utils/booking.dict.errors")
const Booking = require('./models/booking.model')
const Event = require("../events/models/event.models")
//const Event = require("./models/events.model")


const create = async (BookingData) => {
  try {
    const booking = Booking(BookingData)
    const {idUser, idEvent} = booking
    //validar usuario ya reservado
    const esUsuarioAgendado = await validarUsuarioAgendado(idUser, idEvent)
    if (esUsuarioAgendado) {
      return { error: 'usuario ya registrado para este evento' }
    }

    //validar tickets disponibles
    const esEventoDisponible = await validarTicketsDisponibles()
    if(!esEventoDisponible) {
      return { error: 'el evento no esta disponible' }
    }

    await booking.save()
    const event = await Event.findOne(idEvent)
    event.availableTickets = event.availableTickets - 1;
    event.save()

    return {
      booking
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

const validarUsuarioAgendado = async (idUser, idEvent) => {
  try{
    const booking = await Booking.findOne({idUser, idEvent})
    const existe = (
      booking !== null &&
      booking !== undefined &&
      Object.keys(booking).length > 0
    );
    return existe
  }catch(error){
    console.log("ERROR1: ", error)
  }
}

const validarTicketsDisponibles = async (idEvent) => {
  const event = await Event.findOne(idEvent)
  const hayTicketsDisponibles = (event && event.availableTickets > 0)
  return hayTicketsDisponibles
}

module.exports = {
  create
}
