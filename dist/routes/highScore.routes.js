"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const highScore_controllers_1 = require("../controllers/highScore.controllers");
const highScoreRouter = express_1.default.Router();
highScoreRouter.post('/api/create-score', highScore_controllers_1.createHighScore);
highScoreRouter.get('/api/:id/score', highScore_controllers_1.getScore);
highScoreRouter.get('/api/scores', highScore_controllers_1.getScores);
exports.default = highScoreRouter;
