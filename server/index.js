import express from "express";
import indexRouter from "./routes/index.js";

const app = express();
const port = process.env.port || 3000;
app.use(express.json());

app.use("/", indexRouter);
// app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
