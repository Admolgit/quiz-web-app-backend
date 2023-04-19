import mongoose from 'mongoose';

const questionsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  choice1: {
    type: String,
    require: true
  },
  choice2: {
    type: String,
    require: true
  },
  choice3: {
    type: String,
    require: true
  },
  choice4: {
    type: String,
    require: true
  },
  answer: {
    type: Number,
    require: true
  },
},
  {
    timestamps: true,
  }
)

const Question = mongoose.model('question', questionsSchema)

export default Question;