"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const question_routes_1 = __importDefault(require("./routes/question.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const highScore_routes_1 = __importDefault(require("./routes/highScore.routes"));
// Env file
dotenv_1.default.config();
// Calling the mongodb database
(0, db_1.default)();
// Storing and calling the express framework
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.get('/api/test', (req, res) => {
    res.send("Server working perfectly");
});
app.use('/api', question_routes_1.default);
app.use('/', user_routes_1.default);
app.use('/', highScore_routes_1.default);
app.listen(process.env.PORT, () => console.log(`Quiz app running on port ${process.env.PORT}`));
exports.default = app;
