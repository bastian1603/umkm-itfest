import express from "express";
import cors from "cors"
import { prisma } from "./config/db.js";
import user_router from "./modules/user/user.routes.js"
import auth_router from "./modules/auth/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json())
// app.use()

app.use("/api/users", user_router)
app.use("/api/auth", auth_router)

export { app };