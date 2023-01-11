const express = require('express')
const { getQuestions, createQuestion, deleteOneQuestion, getOneQuestion } = require('../Controller/QuestionsController')
const router = express.Router()

router
  .get('/', getQuestions)
  .get('/:id', getOneQuestion)
  .post('/', createQuestion)
  .delete('/:id', deleteOneQuestion)


module.exports = router