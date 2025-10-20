import express from "express";
import cors from "cors"
import { prisma } from "./config/db.js";
import user_router from "./modules/user/user.routes.js";
import auth_router from "./modules/auth/auth.routes.js";
import product_router from "./modules/product/product.routes.js";
import category_router from "./modules/category/category.routes.js"
import uom_router from "./modules/unit_of_measurement/uom.routes.js";

const app = express();

app.use(cors());
app.use(express.json())
// app.use()

app.use("/api/users", user_router);
app.use("/api/auth", auth_router);
app.use("/api/product", product_router);
app.use("/api/category", category_router);
app.use("/api/uom", uom_router);


export { app };