import express from "express";
import noteRouters from "./router/noteRouters.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use("/api/notes", noteRouters);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port 4000");
});

