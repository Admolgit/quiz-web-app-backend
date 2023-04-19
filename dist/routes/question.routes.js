"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questions_controllers_1 = require("../controllers/questions.controllers");
console.log("QUESTIONROUTES");
const questionRouter = express_1.default.Router();
questionRouter.post('/question', questions_controllers_1.createQuestion);
questionRouter.get('/questions', questions_controllers_1.getQuestion);
exports.default = questionRouter;
