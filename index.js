import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Your on Home Page....");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runing....");
});
