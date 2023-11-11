const mongoose = require('mongoose');
const { Schema } = mongoose

const CompanySchema = new Schema(
  {
    nit: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    contact:String,
    address: {
      type: String,
      required: true
    },
    status:{
      type:Number,
      default: 1
    },
    isRemoved:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Company = mongoose.model('companies', CompanySchema)

module.exports = Company
