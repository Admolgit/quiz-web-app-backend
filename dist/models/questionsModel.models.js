"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const questionsSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
const Question = mongoose_1.default.model('question', questionsSchema);
exports.default = Question;
