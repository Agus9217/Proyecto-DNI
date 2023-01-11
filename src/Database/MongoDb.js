require('dotenv').config()
const mongoose = require('mongoose')

const URL = process.env.URI

mongoose.set('strictQuery', true)

const dbConnect = () => {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (!err) {
      console.log(`#### DATABASE IS CONNECT`)
    } else {
      console.log("#### DATABASE ERROR ####")
    }
  })
}

module.exports = dbConnect