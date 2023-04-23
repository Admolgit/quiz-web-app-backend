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
exports.getUsers = exports.getUser = exports.createUser = void 0;
const userModel_models_1 = __importDefault(require("../models/userModel.models"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, isAdmin } = req.body;
        if (!name || !email || !password || !isAdmin) {
            throw new Error("All fields must be filled");
        }
        const user = yield userModel_models_1.default.create({
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin,
        });
        return res.status(201).json({
            message: "User created successfully",
            user: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userModel_models_1.default.find({ _id: id });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User fetched successfully",
            user: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.getUser = getUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_models_1.default.find({});
        if (!users) {
            res.status(404).json({ message: "Users not found" });
        }
        return res.status(200).json({
            message: "Users fetched successfully",
            users: users,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
});
exports.getUsers = getUsers;
