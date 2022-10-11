const mongoose = require("mongoose")
const constants = require("../utils/constants")

const noficationSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  recepients: {
    type: [String],
    required: true
  },
  status: {
    type: String,
    required: true,
    default: constants.sentStatusTypes.unsent,
    enum: [constants.sentStatusTypes.sent, constants.sentStatusTypes.unsent]
  },
  requester: {
    type: String,
    required: true
  }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.Model("Notification", noficationSchema)
