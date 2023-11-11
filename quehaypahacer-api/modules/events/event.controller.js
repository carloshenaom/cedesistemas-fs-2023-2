const eventService = require('./event.service')

const create = async (req, res) => {
  try {
    const eventData = req.body
    const response = await eventService.create(eventData)
    res.status(200).json(response)

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getAll = async (req,res) =>{
  try {
    const filters = req.query
    const response = await eventService.getAll(filters)
    res.status(200).json(response)

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const getOne = async (req,res) =>{
  try {
    const {id} = req.params
    const response = await eventService.getOne(id)
    res.status(200).json(response)

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  create,
  getAll,
  getOne
}

