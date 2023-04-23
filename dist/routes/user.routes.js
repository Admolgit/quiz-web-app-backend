"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("../controllers/user.controllers");
const userRouter = express_1.default.Router();
userRouter.post('/api/create-user', user_controllers_1.createUser);
userRouter.get('/api/:id/user', user_controllers_1.getUser);
userRouter.get('/api/users', user_controllers_1.getUsers);
exports.default = userRouter;
