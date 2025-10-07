import express from "express";
import cors from "cors"
import { prisma } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json())
// app.use()

export { app };