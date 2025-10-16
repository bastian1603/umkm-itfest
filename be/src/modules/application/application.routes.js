import express, { application } from "express";
import * as application_controller from "./application.controller.js";

const application_router = express.Router();

application_router.get("/", application_controller.index);
application_router.post("/", application_controller.create);
// application_router.get("/:id", application_controller.update);
application_router.get("/:id", application_controller.destroy);

export default application_controller;