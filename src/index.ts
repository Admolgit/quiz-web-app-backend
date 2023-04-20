import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import configDb from "./config/db"
import questionRouter from "./routes/question.routes";

// Env file
dotenv.config()

// Calling the mongodb database
configDb()

// Storing and calling the express framework
const app = express();

app.use(cors());
app.use(helmet())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/test', (req, res) => {
  res.send("Server working perfectly")
});

app.use('/api', questionRouter);

app.listen(process.env.PORT, () => console.log(`Quiz app running on port ${process.env.PORT}`));

export default app;