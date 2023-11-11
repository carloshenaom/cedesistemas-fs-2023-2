const companyService = require('./company.service')

const create = async (req, res) => {
  try {
    const companyData = req.body
    const response = await companyService.create(companyData)
    res.status(200).json(response)

  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  create
}

