import express from "express";
import * as auth_controller from "./auth.controller.js";

const auth_router = express.Router()

auth_router.post("/", auth_controller.login);

export default auth_router;