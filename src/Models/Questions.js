const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    id: {
      type: String,
      required: true,
      trim: true
    },
    question: {
      type: String,
      required: true,
      trim: true
    }
  }
})

module.exports = mongoose.model('Questions', questionSchema)