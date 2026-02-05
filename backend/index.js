import express from "express";
import { matchRouter } from "./routes/matches.js";
const app = express();

app.use(express.json()); //read JSON bodies in requests and attach them to req.body
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.use("/matches", matchRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
