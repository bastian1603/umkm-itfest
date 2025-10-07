import dotenv from "dotenv";
import { app } from "./app.js";

import { db_connect } from "./config/db.js";

dotenv.config()

const PORT = process.env.PORT || 5000

const start_server = async () => {
  try {
    await db_connect();
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`)
    })    
  }catch (error) {
    console.log("Server Failed to Start", error)
    process.exit(1)
  }
};

start_server();