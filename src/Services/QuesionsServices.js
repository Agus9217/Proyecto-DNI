const Questions = require('../Models/Questions')

const getAllQuestionsService = () => {
  const allQuestion = Questions.find()
  return allQuestion
}

const getOneQuestionService = (questionId) => {
  const question = Questions.findById(questionId)
  return question
}

const createQuestionService = (newQuestion) => {
const createdQuestion = Questions.create(newQuestion)
return createdQuestion
}

const updateQuestionService = (questionId, change) => {
const updateQuestion = Questions.findByIdAndUpdate(questionId, change)
return updateQuestion
}

const deleteOneQuestionService = (id) => {
  const deleteQuestion = Questions.findByIdAndDelete(id)
  return deleteQuestion
}

module.exports = { updateQuestionService, deleteOneQuestionService, createQuestionService, getOneQuestionService, getAllQuestionsService }
