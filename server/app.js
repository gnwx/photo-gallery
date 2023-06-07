import express from "express";
import mainRouter from "./routes/MainRouter.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", mainRouter);

export default app;
