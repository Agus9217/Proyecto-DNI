const express = require('express')
const dbConnect = require('./Database/MongoDb')
const router = require('./Routes/QuestionsRoutes')
const app = express()

const PORT = process.env.PORT || 3000


dbConnect()
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})

