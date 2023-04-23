import mongoose from 'mongoose';

const highScoreSchema = new mongoose.Schema({
  score: {
    type: [Number]
  },
  name: {
    type: String
  }
},
 {
  timestamps: true
 }
);

const highScore = mongoose.model('highScores', highScoreSchema);

export default highScore;