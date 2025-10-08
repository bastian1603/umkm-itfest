import express from "express";
import * as user_controller from "./user.controller.js"


const user_router = express.Router();

user_router.get("/", user_controller.get_users);
user_router.post("/", user_controller.create);
user_router.patch("/:id", user_controller.update);
user_router.delete("/:id", user_controller.destroy);

export default user_router;