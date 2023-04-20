import { Response, Request } from "express";
import Question from "../models/questionsModel.models";

// Create question controller
export const createQuestion = async (req: Request, res: Response) => {
  try {
    const {question, choice1, choice2, choice3, choice4, answer} = req.body;

    if(!question || !choice1 || !choice2 || !choice3 || !choice4 || !answer) {
      throw new Error("All fields are required");
    }

    // Create new user object and save to database
    const questionSaved = await Question.create({
      question: question,
      choice1: choice1,
      choice2: choice2,
      choice3: choice3,
      choice4: choice4,
      answer: answer
    });

    return res.status(201).json({
      message: 'Message successfully created',
      data: questionSaved
    })
    
  } catch (error: any ) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
}

// Get all questions from the database
export const getQuestion = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find({});

    if(!questions.length) {
      res.status(404).json({
        message: "No questions found"
      })
    }

    return res.status(200).json({
      message: "questions fetched successfully",
      length: questions.length,
      data: questions
    })
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    })
  }
}