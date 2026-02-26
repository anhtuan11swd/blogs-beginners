import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./connection/connection.js";
import blogs from "./routes/blogs.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", blogs);

app.get("/", (_req, res) => {
  res.send("Xin chào");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log("Server đang chạy");
});
