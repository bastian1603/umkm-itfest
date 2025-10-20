import express from "express";
import * as product_controller from  "./product.controller.js";
import * as auth_middleware from "../../middleware/auth.middleware.js";

const product_router = express.Router();

product_router.get("/", product_controller.index);
product_router.post("/", auth_middleware.is_producer, product_controller.create);
product_router.patch("/:id", auth_middleware.is_producer, product_controller.update);
product_router.delete("/:id", auth_middleware.is_producer, product_controller.destroy);

export default product_router;