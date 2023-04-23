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
exports.getScores = exports.getScore = exports.createHighScore = void 0;
const highScoreModel_models_1 = __importDefault(require("../models/highScoreModel.models"));
const createHighScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { userId } = req.params;
        const { score, name } = req.body;
        if (!score || !name) {
            return res.status(404).json({ message: "All fields must be filled" });
        }
        const checkName = yield highScoreModel_models_1.default.findOne({
            name: name,
        });
        if (!checkName) {
            const highScores = yield highScoreModel_models_1.default.create({ score, name });
            return res.status(201).json({
                message: "High scores were created successfully",
                highScores: highScores,
            });
        }
        else {
            const highScores = yield highScoreModel_models_1.default.updateOne({ name: name }, {
                $push: {
                    score: score,
                },
            });
            return res.status(201).json({
                message: "High scores were created successfully",
                highScores: highScores,
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.createHighScore = createHighScore;
const getScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const highScores = yield highScoreModel_models_1.default.findById({ _id: id });
        if (!highScores) {
            return res.status(404).json({
                message: "No high scores found",
            });
        }
        return res.status(200).json({
            message: "High scores fetched successfully",
            highScores: highScores,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.getScore = getScore;
const getScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const highScores = yield highScoreModel_models_1.default.find({});
        if (!highScores) {
            res.status(404).json({
                message: "No high scores found",
            });
        }
        return res.status(200).json({
            message: "High scores fetched successfully",
            highScores: highScores,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.getScores = getScores;
