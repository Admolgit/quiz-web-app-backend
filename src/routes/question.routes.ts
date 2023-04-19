import express from 'express';
import { createQuestion, getQuestion } from '../controllers/questions.controllers';

console.log("QUESTIONROUTES")

const questionRouter = express.Router();

questionRouter.post('/question', createQuestion);
questionRouter.get('/questions', getQuestion)

export default questionRouter;