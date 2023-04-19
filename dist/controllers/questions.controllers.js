"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestion = exports.createQuestion = void 0;
const questionsModel_models_1 = __importDefault(require("../models/questionsModel.models"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { question, choice1, choice2, choice3, choice4, answer } = req.body;
        if (!question || !choice1 || !choice2 || !choice3 || !choice4 || !answer) {
            throw new Error("All fields are required");
        }
        const questionSaved = yield questionsModel_models_1.default.create({
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
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
});
exports.createQuestion = createQuestion;
const getQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield questionsModel_models_1.default.find({});
        if (!questions.length) {
            res.status(404).json({
                message: "No questions found"
            });
        }
        return res.status(200).json({
            message: "questions fetched successfully",
            length: questions.length,
            data: questions
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
});
exports.getQuestion = getQuestion;
