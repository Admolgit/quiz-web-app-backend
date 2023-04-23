import express from 'express';
import { createHighScore, getScore, getScores } from '../controllers/highScore.controllers';

const highScoreRouter = express.Router();

highScoreRouter.post('/api/create-score', createHighScore);
highScoreRouter.get('/api/:id/score', getScore);
highScoreRouter.get('/api/scores', getScores);

export default highScoreRouter;