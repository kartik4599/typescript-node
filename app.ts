import bodyParser from "body-parser";
import express from "express";
import todoRouter from "./routes/todos";

const app = express();

app.use(bodyParser.json());

app.use(todoRouter);

app.listen(1000);
