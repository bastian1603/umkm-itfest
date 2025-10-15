import express from "express";
import * as uom_controller from "./uom.controller.js";

const uom_router = express.Router();

uom_router.get("/", uom_controller.index);
uom_router.post("/", uom_controller.create);
uom_router.delete("/:id", uom_controller.destroy);
uom_router.patch("/:id", uom_controller.update);