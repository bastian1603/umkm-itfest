import { Router } from "express";
import * as category_controller from "./category.controller.js"

const category_router = Router();

category_router.get("/", category_controller.index);
category_router.post("/", category_controller.create);
category_router.patch("/:id", category_controller.update);
category_router.delete("/:id", category_controller.delete);
