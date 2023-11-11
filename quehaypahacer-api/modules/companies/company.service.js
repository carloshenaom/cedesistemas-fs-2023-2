const errorHandler = require("../../utils/errorHandler")
const { COMPANY_ALREADY_EXIST, SERVER_ERROR } = require("./utils/companies.dict.errors")
const Company = require('./models/company.models')


const create = async(companyData) => {
  try {

    const validateNit = await Company.findOne({ nit: companyData.nit })
    if (validateNit) {
      throw errorHandler(COMPANY_ALREADY_EXIST)
    }

    const company = Company(companyData)
    await company.save()

    return {
      company
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

module.exports = {
  create
}
