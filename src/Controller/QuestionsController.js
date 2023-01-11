const { getAllQuestionsService, createQuestionService, getOneQuestionService, deleteOneQuestionService } = require('../Services/QuesionsSErvices')

const getQuestions = async (req, res) => {
  const questions = await getAllQuestionsService()
  res.send({ status: 'OK', data: questions })
}

const getOneQuestion = async (req, res) => {
  const { params: { id } } = req
  if(!id){
      return
  }
  const question = await getOneQuestionService(id)
  res.send({ status: 'OK', data: question })
}

const createQuestion = async (req, res) => {
   const { body } = req
   if(
    !body.id ||
    !body.title ||
    !body.content.id ||
    !body.content.question
   ) {
    return res.status(400).send({
      message: 'No content try again!!!',
      error: 'ERROR'
    })
   } else {
    const newQuestion = {
      id: body.id,
      title: body.title,
      content: {
        id: body.content.id,
        question: body.content.question
      }
    }
    const createdQuestion = await createQuestionService(newQuestion)
    res.status(201).send({ status: 'OK', data: { createdQuestion } })
   }
}

const deleteOneQuestion = async (req, res) => {
  const { params: { id } } = req
  if(!id){
    return
  } else {
    await deleteOneQuestionService(id)
    res.status(204).send({ status: 'OK' })
  }
}

module.exports = { getQuestions, getOneQuestion, createQuestion, deleteOneQuestion }