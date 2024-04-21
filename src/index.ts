import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Express server is ready and listening on port ${PORT}`);
});
